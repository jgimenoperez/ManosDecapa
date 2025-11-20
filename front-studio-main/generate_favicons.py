#!/usr/bin/env python3
"""
Script para generar favicons en múltiples tamaños desde una imagen base.
Usa Pillow para redimensionar la imagen y guardarla en diferentes formatos.
"""

from PIL import Image
import os

# Ruta de la imagen base
source_image = 'public/images/favicon.png'
output_dir = 'public'

# Verificar que la imagen existe
if not os.path.exists(source_image):
    print(f"Error: {source_image} no encontrado")
    exit(1)

# Abrir la imagen base
img = Image.open(source_image)

# Convertir a RGBA si es necesario
if img.mode != 'RGBA':
    img = img.convert('RGBA')

print(f"Imagen original: {img.size}")

# Definir los tamaños necesarios
favicons = [
    ('favicon-16x16.png', 16),
    ('favicon-32x32.png', 32),
    ('apple-touch-icon.png', 180),
    ('android-chrome-192x192.png', 192),
    ('android-chrome-512x512.png', 512),
]

# Generar cada tamaño
for filename, size in favicons:
    # Redimensionar la imagen
    resized = img.resize((size, size), Image.Resampling.LANCZOS)

    # Guardar con fondo blanco si es PNG (excepto apple-touch-icon que puede ser transparente)
    if filename == 'apple-touch-icon.png':
        # Apple touch icon generalmente necesita fondo
        bg = Image.new('RGB', (size, size), (255, 255, 255))
        bg.paste(resized, mask=resized.split()[3])  # Usar canal alpha como máscara
        bg.save(os.path.join(output_dir, filename), 'PNG')
    else:
        resized.save(os.path.join(output_dir, filename), 'PNG')

    print(f"[OK] Generado: {filename} ({size}x{size})")

# Generar favicon.ico (versión múltiple que es compatible con navegadores antiguos)
# Usar el tamaño 32x32 como base
favicon_ico = img.resize((32, 32), Image.Resampling.LANCZOS)
favicon_ico.save(os.path.join(output_dir, 'favicon.ico'), 'ICO')
print(f"[OK] Generado: favicon.ico (32x32)")

print("\nTodos los favicons han sido generados correctamente!")
print("\nArchivos creados:")
for filename, size in favicons:
    filepath = os.path.join(output_dir, filename)
    if os.path.exists(filepath):
        filesize = os.path.getsize(filepath)
        print(f"  {filename} ({filesize} bytes)")

if os.path.exists(os.path.join(output_dir, 'favicon.ico')):
    filesize = os.path.getsize(os.path.join(output_dir, 'favicon.ico'))
    print(f"  - favicon.ico ({filesize} bytes)")
