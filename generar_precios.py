import csv
import json
import os

# Rutas de los archivos
csv_file = "productos.csv"  # Cambia esto si el CSV tiene otro nombre o ruta
output_file = "precios.js"  # Archivo de salida

# Leer el CSV
precios = {}
try:
    with open(csv_file, newline='', encoding='utf-8') as csvfile:
        # Mostrar la primera línea para depuración
        first_line = csvfile.readline()
        csvfile.seek(0)  # Volver al inicio del archivo
        print("Primera línea del CSV:", repr(first_line))

        # Usar punto y coma como delimitador
        reader = csv.DictReader(csvfile, delimiter=';', quotechar='"')
        print("Encabezados detectados:", reader.fieldnames)

        # Verificar que los encabezados esperados estén presentes
        required_fields = {'Artículo', 'Saldo disponible', 'Precio tarjeta'}
        if not required_fields.issubset(reader.fieldnames):
            missing = required_fields - set(reader.fieldnames)
            raise ValueError(f"Faltan los encabezados requeridos: {missing}")

        # Procesar las filas
        for row in reader:
            try:
                codigo = row['Artículo'].strip()
                stock = int(row['Saldo disponible'].strip())
                precio_tarjeta = float(row['Precio tarjeta'].strip())
                precios[codigo] = {
                    "stock": stock,
                    "precio_tarjeta": precio_tarjeta
                }
                print(f"Procesado producto {codigo}: stock={stock}, precio={precio_tarjeta}")
            except (ValueError, KeyError) as e:
                print(f"Error procesando el producto {row.get('Artículo', 'desconocido')}: {e}")

    # Generar el archivo precios.js
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("const precios = ")
        json.dump(precios, f, ensure_ascii=False, indent=2)
        f.write(";")
    print(f"Archivo {output_file} generado exitosamente.")
    print(f"Productos procesados: {len(precios)}")

except FileNotFoundError:
    print(f"Error: No se encontró el archivo {csv_file}.")
except UnicodeDecodeError:
    print(f"Error: No se pudo decodificar el archivo {csv_file}. Intenta con otra codificación (por ejemplo, latin-1).")
except ValueError as e:
    print(f"Error en el formato del CSV: {e}")
except Exception as e:
    print(f"Error inesperado: {e}")