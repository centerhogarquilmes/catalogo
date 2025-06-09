import csv
import json
import re

csv_file = "productos.csv"
output_file = "precios.js"

SUCURSAL_LOCAL = "QUILMES"

precios = {}

try:
    with open(csv_file, newline='', encoding='windows-1252') as csvfile:
        reader = csv.reader(csvfile, delimiter=';')

        headers = next(reader)
        for row in reader:
            # Ignorar líneas que contienen cabeceras repetidas
            if "Saldo disponible" in row or len(row) < 7:
                continue

            try:
                codigo = row[0].strip()
                sucursal = row[3].strip().upper()
                saldo_str = row[4].strip()
                precio_str = row[6].strip()

                # Limpiar campos
                saldo_str = saldo_str.replace(",", "").strip()
                precio_str = precio_str.replace(".", "").replace(",", ".").strip()
                precio_str = re.split(r'[\r\n"]', precio_str)[0].strip()  # Cortar múltiples valores

                if not saldo_str or not precio_str:
                    continue

                stock = int(saldo_str)
                precio = float(precio_str)

                if codigo not in precios:
                    precios[codigo] = {
                        "stock_sucursal": 0,
                        "stock_deposito": 0,
                        "precio_tarjeta": precio
                    }
                else:
                    precios[codigo]["precio_tarjeta"] = precio  # actualizar siempre

                if sucursal == SUCURSAL_LOCAL:
                    precios[codigo]["stock_sucursal"] += stock
                else:
                    precios[codigo]["stock_deposito"] += stock

            except Exception as e:
                print(f"[❌] Error en fila: {row} -> {e}")

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("const precios = ")
        json.dump(precios, f, ensure_ascii=False, indent=2)
        f.write(";")

    print(f"[✅] Archivo '{output_file}' generado con {len(precios)} productos.")

except FileNotFoundError:
    print(f"[❌] Archivo no encontrado: {csv_file}")
except Exception as e:
    print(f"[❌] Error inesperado: {e}")
