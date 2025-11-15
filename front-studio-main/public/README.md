# Directorio Public

Este directorio contiene archivos estáticos que se sirven directamente desde la raíz del sitio web.

## Estructura

```
public/
├── images/          # Imágenes del sitio
│   ├── hero/        # Imágenes del hero section
│   ├── gallery/     # Imágenes de la galería (antes/después)
│   ├── services/    # Imágenes de servicios
│   ├── testimonials/# Avatares de testimonios
│   └── icons/       # Iconos y logos
├── fonts/           # Fuentes personalizadas (si las hay)
└── documents/       # PDFs u otros documentos
```

## Cómo usar las imágenes

### En componentes Next.js con Image:

```jsx
import Image from 'next/image';

export function MyComponent() {
  return (
    <Image
      src="/images/hero/main.jpg"
      alt="Descripción de la imagen"
      width={1200}
      height={600}
    />
  );
}
```

### En CSS/Tailwind:

```css
/* En globals.css */
.hero-background {
  background-image: url('/images/hero/bg.jpg');
}
```

## Formatos recomendados

- **Fotografías**: `.webp` (mejor compresión) o `.jpg` (compatibilidad)
- **PNG**: Para imágenes con transparencia
- **SVG**: Para iconos y logos
- **GIF**: Animaciones simples

## Optimización

Next.js sirve automáticamente los archivos en `public/` con caché:
- Las imágenes se cachean indefinidamente si no cambia el nombre
- Usa versionado en el nombre si necesitas actualizar: `hero-v2.jpg`

## Ejemplo de estructura para tu proyecto

```
public/
├── images/
│   ├── hero/
│   │   ├── background.jpg
│   │   └── logo.svg
│   ├── gallery/
│   │   ├── gallery-1-before.jpg
│   │   ├── gallery-1-after.jpg
│   │   └── ... (más imágenes)
│   ├── services/
│   │   ├── service-1.jpg
│   │   └── ... (más imágenes)
│   └── testimonials/
│       └── avatar-placeholder.svg
└── README.md
```

## Notas importantes

1. **Tamaño de archivos**: Optimiza las imágenes antes de subirlas
2. **Alt text**: Siempre proporciona descripciones accesibles
3. **Nombres**: Usa nombres descriptivos en minúsculas con guiones
4. **No commits binarios grandes**: Si las imágenes son muy pesadas, considera usar un CDN

---

Para más información, consulta la [documentación de Next.js sobre archivos estáticos](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)
