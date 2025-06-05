import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import csv
import json
import re
import os
from pathlib import Path

class GenerarPreciosApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Generar Precios - Center Hogar Quilmes")
        self.root.geometry("600x400")
        self.root.configure(bg="#f0f0f0")
        # Forzar tema estándar para evitar problemas gráficos
        style = ttk.Style()
        style.theme_use('clam')

        # Variables
        self.csv_path = tk.StringVar()
        # Rutas relativas al directorio del script
        script_dir = os.path.dirname(os.path.abspath(__file__))
        self.productos_js_path = os.path.join(script_dir, "productos.js")
        self.precios_js_path = os.path.join(script_dir, "precios.js")

        # Interfaz
        self.create_widgets()

    def create_widgets(self):
        # Estilo
        label_font = ("Roboto", 12)
        button_font = ("Roboto", 10, "bold")
        entry_font = ("Roboto", 10)

        # Frame principal
        frame = ttk.Frame(self.root, padding="20")
        frame.pack(expand=True, fill="both")

        # Seleccionar archivo CSV
        ttk.Label(frame, text="Archivo CSV:", font=label_font).pack(anchor="w")
        csv_frame = ttk.Frame(frame)
        csv_frame.pack(fill="x", pady=5)
        ttk.Entry(csv_frame, textvariable=self.csv_path, font=entry_font, state="readonly", width=50).pack(side="left", padx=(0, 5))
        ttk.Button(csv_frame, text="Seleccionar", command=self.select_csv).pack(side="left")

        # Información sobre productos.js y precios.js
        ttk.Label(frame, text=f"Usando catálogo: {os.path.basename(self.productos_js_path)}", font=label_font).pack(anchor="w", pady=(10, 0))
        ttk.Label(frame, text=f"Generando: {os.path.basename(self.precios_js_path)}", font=label_font).pack(anchor="w")

        # Botón generar
        ttk.Button(frame, text="Generar precios.js", command=self.generar_precios, width=20).pack(pady=10)

        # Área de mensajes
        ttk.Label(frame, text="Mensajes:", font=label_font).pack(anchor="w")
        self.log_text = tk.Text(frame, height=12, width=60, font=entry_font, state="disabled")
        self.log_text.pack(fill="both", pady=5)

    def select_csv(self):
        path = filedialog.askopenfilename(filetypes=[("Archivos CSV", "*.csv")])
        if path:
            self.csv_path.set(path)
            self.log("Archivo CSV seleccionado: " + path)

    def log(self, message):
        self.log_text.configure(state="normal")
        self.log_text.insert("end", message + "\n")
        self.log_text.configure(state="disabled")
        self.log_text.see("end")

    def preprocess_js_to_json(self, js_str):
        try:
            # Eliminar comentarios multilínea (/* */)
            js_str = re.sub(r'/\*[\s\S]*?\*/', '', js_str)
            # Eliminar comentarios de una línea (//)
            js_str = re.sub(r'//.*?\n', '\n', js_str)
            # Normalizar espacios y saltos de línea
            js_str = re.sub(r'\n\s*\n', '\n', js_str)
            # Convertir comillas simples a dobles en cadenas
            js_str = re.sub(r"'([^'\\]*?(?:\\'[^'\\]*?)*)'", r'"\1"', js_str)
            # Escapar comillas internas en cadenas
            def escape_quotes(match):
                text = match.group(1)
                # Escapar comillas dobles
                text = text.replace('"', '\\"')
                return f'"{text}"'
            js_str = re.sub(r'"([^"]*?)"', escape_quotes, js_str)
            # Agregar comillas dobles a claves sin comillas
            js_str = re.sub(r'([{\n,\s])(\b[a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', js_str)
            # Eliminar comas finales antes de } o ]
            js_str = re.sub(r',(\s*[}\]])', r'\1', js_str)
            # Asegurar comas entre objetos
            js_str = re.sub(r'}\s*{', r'}, {', js_str)
            # Asegurar comas entre elementos de array
            js_str = re.sub(r'(\w|\])\s*\[', r'\1, [', js_str)
            return js_str.strip()
        except Exception as e:
            self.log(f"Error en preprocess_js_to_json: {str(e)}")
            return ""

    def parse_json_with_context(self, json_str):
        try:
            return json.loads(json_str)
        except json.JSONDecodeError as e:
            self.log(f"Error al parsear 'productos': {str(e)}")
            # Mostrar líneas cercanas al error
            lines = json_str.splitlines()
            error_line = e.lineno - 1
            start_line = max(0, error_line - 5)
            end_line = min(len(lines), error_line + 5)
            self.log("Líneas cercanas al error:")
            for i in range(start_line, end_line):
                prefix = ">>>" if i == error_line else ""
                self.log(f"Línea {i + 1}: {prefix}{lines[i]}")
            return None

    def parse_productos(self):
        try:
            with open(self.productos_js_path, 'r', encoding='utf-8') as f:
                contenido = f.read().strip()
                if not contenido:
                    self.log("Error: productos.js está vacío")
                    return None
            # Buscar const productos = [...]
            match = re.search(r'\bconst\s*productos\s*=\s*(\[[\s\S]*?\])\s*;', contenido, re.DOTALL)
            if not match:
                self.log("Error: No se encontró 'const productos' en productos.js")
                self.log("Primeras líneas de productos.js:")
                lines = contenido.splitlines()[:5]
                for i, line in enumerate(lines, 1):
                    self.log(f"Línea {i}: {line}")
                return None
            js_str = match.group(1)
            # Guardar el JavaScript original
            with open('debug_productos_raw.json', 'w', encoding='utf-8') as f:
                f.write(js_str)
            # Preprocesar
            json_str = self.preprocess_js_to_json(js_str)
            # Guardar JSON limpio
            with open('debug_productos.json', 'w', encoding='utf-8') as f:
                f.write(json_str if json_str else "Error: json_str vacío")
            if not json_str:
                self.log("Error: JSON preprocesado vacío")
                return None
            # Log de primeras y últimas líneas
            self.log("Primeras 10 líneas de JSON preprocesado:")
            lines = json_str.splitlines()[:10]
            for i, line in enumerate(lines, 1):
                self.log(f"L{i}: {line}")
            self.log("Últimas 10 líneas de JSON preprocesado:")
            lines = json_str.splitlines()[-10:]
            for i, line in enumerate(lines, 1):
                self.log(f"L{i}: {line}")
            # Parsear con contexto
            productos = self.parse_json_with_context(json_str)
            if productos is None:
                self.log("El JSON capturado se guardó en 'debug_productos.json'")
                return None
            if not isinstance(productos, list):
                self.log("Error: El contenido de 'productos' no es una lista")
                return None
            return productos
        except UnicodeDecodeError:
            self.log("Error: productos.js no está en codificación UTF-8")
            return None
        except FileNotFoundError:
            self.log(f"Error: No se encontró {self.productos_js_path}")
            return None
        except Exception as e:
            self.log(f"Error al leer productos.js: {str(e)}")
            return None

    def generar_precios(self):
        # Validar entradas
        if not self.csv_path.get():
            messagebox.showerror("Error", "Selecciona un archivo CSV")
            return

        try:
            # Leer códigos válidos desde productos.js
            productos = self.parse_productos()  # Corregido: parse_productos en lugar de parse_productos_js
            if productos is None:
                messagebox.showerror("Error", f"No se pudo parsear {self.productos_js_path}")
                return
            codigos_validos = {producto.get('codigo', '') for producto in productos if producto.get('codigo')}
            self.log(f"Leídos {len(codigos_validos)} códigos válidos de {self.productos_js_path}")

            # Procesar archivo CSV
            precios = {}
            codigos_vistos = set()
            with open(self.csv_path.get(), newline='', encoding='latin-1') as csvfile:
                reader = csv.DictReader(csvfile, delimiter=';')
                # Validar columnas
                required_columns = ['Artículo', 'Saldo disponible', 'Precio tarjeta']
                if not all(col in reader.fieldnames for col in required_columns):
                    messagebox.showerror("Error", "El CSV debe tener las columnas: Artículo, Saldo disponible, Precio tarjeta")
                    self.log("Error: Columnas incorrectas en el archivo CSV")
                    return
                for row in reader:
                    codigo = row['Artículo'].strip().strip('"')
                    if not codigo:
                        self.log("Advertencia: Fila con código vacío, se omite")
                        continue
                    if codigo not in codigos_validos:
                        self.log(f"Advertencia: Código '{codigo}' no está en {self.productos_js_path}, se omite")
                        continue
                    if codigo in codigos_vistos:
                        self.log(f"Advertencia: Código duplicado '{codigo}'")
                    codigos_vistos.add(codigo)
                    try:
                        precio_tarjeta = float(row['Precio tarjeta'].strip().strip('"'))
                        stock = int(row['Saldo disponible'].strip().strip('"'))
                        if precio_tarjeta < 0 or stock < 0:
                            self.log(f"Advertencia: Precio o stock negativo para el código '{codigo}'")
                            continue
                    except ValueError:
                        self.log(f"Advertencia: Precio o stock no válido para el código '{codigo}'")
                        continue
                    precios[codigo] = {
                        'precio_tarjeta': precio_tarjeta,
                        'stock': stock
                    }
            self.log(f"Procesados {len(precios)} productos válidos del CSV")

            # Generar precios.js
            with open(self.precios_js_path, 'w', encoding='utf-8') as jsfile:
                jsfile.write('const precios = ')
                json.dump(precios, jsfile, ensure_ascii=False, separators=(',', ':'))
                jsfile.write(';\n')
            self.log(f"{self.precios_js_path} generado correctamente")
            messagebox.showinfo("Éxito", f"{self.precios_js_path} generado correctamente")

        except Exception as e:
            messagebox.showerror("Error", f"Error al procesar: {str(e)}")
            self.log(f"Error: {str(e)}")

if __name__ == "__main__":
    root = tk.Tk()
    app = GenerarPreciosApp(root)
    root.mainloop()