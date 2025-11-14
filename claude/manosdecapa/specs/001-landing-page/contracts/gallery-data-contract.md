# Data Contract: Gallery (Before/After)

**Phase 1 Output** | **Date**: 2025-11-14 | **Component**: Gallery (FR-006, US3)

## Overview

Before/after gallery displays 6 furniture restoration examples to build customer confidence and demonstrate quality of work (success criteria SC-010).

## Data Structure

### Gallery Item

```typescript
interface GalleryItem {
  id: string;                    // Unique identifier: "portfolio-1" to "portfolio-6"
  title: string;                 // Furniture name/description in Spanish
  category: GalleryCategory;     // Type of furniture
  beforeImage: ImageRef;         // Before state (with paint/damage)
  afterImage: ImageRef;          // After state (restored, ready for finishing)
  estimatedTime: string;         // Time required (e.g., "3-5 días")
  description?: string;          // Optional story about the piece
}

type GalleryCategory =
  | "Silla"
  | "Mesa"
  | "Aparador"
  | "Cómoda"
  | "Puerta"
  | "Metal";

interface ImageRef {
  url: string;                   // Cloudinary CDN URL
  alt: string;                   // WCAG AA alt text (required for accessibility)
  width?: number;                // Image width in pixels (for responsive sizing)
  height?: number;               // Image height in pixels
}
```

## Complete Gallery Data

```json
{
  "gallery": [
    {
      "id": "portfolio-1",
      "title": "Silla de Madera Tapizada - Luis XV",
      "category": "Silla",
      "beforeImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-1-before.jpg",
        "alt": "Silla de madera tapizada con pintura vieja desgastada, múltiples capas visibles",
        "width": 400,
        "height": 300
      },
      "afterImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-1-after.jpg",
        "alt": "Silla de madera restaurada con estructura clara, lista para nuevo tapizado o acabado",
        "width": 400,
        "height": 300
      },
      "estimatedTime": "3-5 días",
      "description": "Restauración de silla Luis XV con más de 50 años de acumulación de pintura. Madera de caoba perfectamente recuperada."
    },
    {
      "id": "portfolio-2",
      "title": "Cómoda Años 70 - Nogal",
      "category": "Cómoda",
      "beforeImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-2-before.jpg",
        "alt": "Cómoda de madera con múltiples capas de pintura marrón oscuro craquelada",
        "width": 400,
        "height": 300
      },
      "afterImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-2-after.jpg",
        "alt": "Cómoda de nogal restaurada mostrando el grano natural de la madera",
        "width": 400,
        "height": 300
      },
      "estimatedTime": "7-10 días",
      "description": "Cómoda vintage de nogal con vetas hermosas después del decapado profesional."
    },
    {
      "id": "portfolio-3",
      "title": "Puerta de Roble Antiguo",
      "category": "Puerta",
      "beforeImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-3-before.jpg",
        "alt": "Puerta de madera con pintura blanca despellejada y dañada por el tiempo",
        "width": 400,
        "height": 300
      },
      "afterImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-3-after.jpg",
        "alt": "Puerta de roble antiguo con vetas naturales restauradas",
        "width": 400,
        "height": 300
      },
      "estimatedTime": "5-7 días",
      "description": "Puerta de roble macizo de más de 100 años restaurada a su belleza original."
    },
    {
      "id": "portfolio-4",
      "title": "Reja de Hierro Decorativa",
      "category": "Metal",
      "beforeImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-4-before.jpg",
        "alt": "Reja de hierro forjado oxidada con pintura roja vieja",
        "width": 400,
        "height": 300
      },
      "afterImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-4-after.jpg",
        "alt": "Reja de hierro forjado decapada mostrando la estructura artesanal original",
        "width": 400,
        "height": 300
      },
      "estimatedTime": "2-3 días",
      "description": "Reja de balcón con detalles de hierro forjado recuperados y listos para protección."
    },
    {
      "id": "portfolio-5",
      "title": "Mesa de Escritorio de Caoba",
      "category": "Mesa",
      "beforeImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-5-before.jpg",
        "alt": "Mesa de escritorio cubierta en laca oscura opaca y acabado deslustrado",
        "width": 400,
        "height": 300
      },
      "afterImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-5-after.jpg",
        "alt": "Mesa de caoba clásica restaurada mostrando el grano hermoso de la madera",
        "width": 400,
        "height": 300
      },
      "estimatedTime": "4-6 días",
      "description": "Escritorio clásico de caoba con herrajes de cobre, completamente restaurado."
    },
    {
      "id": "portfolio-6",
      "title": "Aparador de Dormitorio Vintage",
      "category": "Aparador",
      "beforeImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-6-before.jpg",
        "alt": "Aparador vintage con pintura roja desgastada y descascarada",
        "width": 400,
        "height": 300
      },
      "afterImage": {
        "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp,q_auto/v1/gallery/portfolio-6-after.jpg",
        "alt": "Aparador con vetas naturales de madera recuperadas y brillantes",
        "width": 400,
        "height": 300
      },
      "estimatedTime": "6-8 días",
      "description": "Aparador de dormitorio con detalles tallados recuperados en su esplendor."
    }
  ]
}
```

## Image Specifications

### Cloudinary URL Structure

All images hosted on Cloudinary with automatic optimization:

```
https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/v{version}/gallery/{image_id}.jpg
```

**Transformations applied**:
- `c_scale,w_400`: Scale to 400px width (responsive)
- `f_webp`: Serve WebP format (25-35% smaller)
- `q_auto`: Auto quality based on device (80 for desktop, 75 for mobile)
- `v1`: Version control for cache busting

### Responsive Image Sizes

For different screen sizes:

```
Mobile (320px):   https://res.cloudinary.com/.../w_280,f_webp/.../image.jpg
Tablet (768px):   https://res.cloudinary.com/.../w_350,f_webp/.../image.jpg
Desktop (1024px): https://res.cloudinary.com/.../w_400,f_webp/.../image.jpg
```

### Image Quality Requirements

| Requirement | Value |
|-------------|-------|
| Format | JPEG (original), served as WebP |
| Dimensions | 400x300 px minimum |
| File size | < 150KB (uncompressed), < 40KB (WebP) |
| Aspect ratio | 4:3 (consistent grid appearance) |
| Lighting | Professional studio or natural diffused light |
| Content | Clear before/after contrast |
| Color accuracy | True colors, no over-saturation |

## React Component Integration

### Usage in Gallery Component

```jsx
// src/components/Gallery.jsx
import { useState } from 'react';
import galleryData from '@/data/gallery.json';
import ImageWithFallback from '@/components/common/ImageWithFallback';

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="gallery-section">
      <h2>Galería Antes/Después</h2>
      <div className="gallery-grid">
        {galleryData.gallery.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onTouchStart={() => setHoveredId(item.id)}
          >
            <div className="image-container">
              <ImageWithFallback
                src={hoveredId === item.id ? item.afterImage.url : item.beforeImage.url}
                alt={hoveredId === item.id ? item.afterImage.alt : item.beforeImage.alt}
                width={item.beforeImage.width}
                height={item.beforeImage.height}
              />
            </div>
            <h3>{item.title}</h3>
            <p className="category">{item.category}</p>
            <p className="time">~{item.estimatedTime}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### Before/After Toggle (Accessibility)

For users without hover capability (touch devices):

```jsx
// Enhanced version with toggle button
<div className="gallery-item" key={item.id}>
  <div className="image-container">
    <button
      className="toggle-before-after"
      onClick={() => setHoveredId(hoveredId === item.id ? null : item.id)}
      aria-label={`Ver ${hoveredId === item.id ? 'antes' : 'después'} de ${item.title}`}
    >
      {hoveredId === item.id ? 'Ver ANTES' : 'Ver DESPUÉS'}
    </button>
    <ImageWithFallback
      src={hoveredId === item.id ? item.afterImage.url : item.beforeImage.url}
      alt={hoveredId === item.id ? item.afterImage.alt : item.beforeImage.alt}
    />
  </div>
</div>
```

## Validation Rules

| Field | Rule | Error |
|-------|------|-------|
| id | Must be unique, format "portfolio-N" | Duplicate ID error |
| title | Required, 3-100 chars, Spanish text | Invalid title |
| category | Must be from enum | Invalid category |
| beforeImage.url | Valid Cloudinary URL, accessible | Image 404 error |
| beforeImage.alt | Required, 10-200 chars, descriptive | Missing alt text |
| afterImage.url | Valid Cloudinary URL, accessible | Image 404 error |
| afterImage.alt | Required, 10-200 chars, descriptive | Missing alt text |
| estimatedTime | Required, e.g., "3-5 días" | Invalid format |

## Loading & Performance

### Lazy Loading

Images should load as user scrolls to gallery section:

```jsx
import { lazy, Suspense } from 'react';

const LazyGalleryItem = lazy(() => import('@/components/GalleryItem'));

<Suspense fallback={<div className="skeleton" />}>
  <LazyGalleryItem item={item} />
</Suspense>
```

### Image Optimization Checklist

- [ ] All images < 150KB uncompressed
- [ ] Cloudinary transformation applied (webp, quality auto)
- [ ] Responsive sizes for mobile/tablet/desktop
- [ ] Alt text is descriptive and accessible
- [ ] Images load within 2 seconds
- [ ] Lighthouse report shows no image optimization warnings

## Testing

### Unit Tests

```javascript
// tests/unit/Gallery.test.jsx
describe('Gallery Component', () => {
  test('should display 6 portfolio items', () => {
    render(<Gallery />);
    const items = screen.getAllByRole('img');
    expect(items).toHaveLength(12); // 6 items × 2 images each
  });

  test('should toggle before/after on hover', async () => {
    render(<Gallery />);
    const firstItem = screen.getByAltText(/silla.*antes/i);
    await userEvent.hover(firstItem);
    const afterImage = screen.getByAltText(/silla.*después/i);
    expect(afterImage).toBeVisible();
  });

  test('should have valid alt text for accessibility', () => {
    render(<Gallery />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt').length).toBeGreaterThan(5);
    });
  });
});
```

### Integration Tests

```javascript
// tests/integration/gallery-loading.test.js
describe('Gallery Image Loading', () => {
  test('all Cloudinary URLs should return 200 OK', async () => {
    const gallery = await import('@/data/gallery.json');
    for (const item of gallery.gallery) {
      const response = await fetch(item.beforeImage.url);
      expect(response.status).toBe(200);
      const response2 = await fetch(item.afterImage.url);
      expect(response2.status).toBe(200);
    }
  });

  test('images should load within performance budget', () => {
    // Test using Lighthouse or WebPageTest
    // Ensure LCP < 2.5s when gallery is in viewport
  });
});
```

## Future Enhancements

1. **Testimonial Integration**: Add customer quote/name to each gallery item
2. **Video Gallery**: Replace/supplement images with short before/after videos
3. **Interactive Slider**: Allow users to drag slider to compare before/after
4. **Mobile Gallery**: Swipeable carousel for mobile devices
5. **Admin Panel**: Upload new gallery items without code changes
6. **Dynamic Pricing**: Link gallery items to pricing tiers

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-14 | Initial 6-item gallery specification |
| (future) | TBD | Video support, admin uploads, slider UI |
