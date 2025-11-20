# 📋 NEXT TASKS - Manos Decapa

**Documento creado**: 2025-11-20
**Status**: Planning próximas sesiones
**Total Tareas**: 6 main + subtasks

---

## 🎯 Tareas RECOMENDADAS (Sin depender de Deferred)

Estas tareas pueden hacerse **AHORA** sin esperar a Google Business Profile, Search Console, etc.

---

## SESIÓN 1: Quick Wins (2 horas estimadas)

### ✅ TAREA 1: Agregar BreadcrumbList a Páginas Internas
**Prioridad**: ⭐⭐⭐ ALTA
**Tiempo estimado**: 20-30 minutos
**Impacto SEO**: ⭐⭐⭐⭐

**Descripción**:
Implementar BreadcrumbList schema en las 3 páginas nuevas (/servicios, /proceso, /ubicacion).
Ya tenemos el componente `breadcrumb-schema.tsx` pero falta usarlo en las páginas.

**Subtasks**:
- [ ] 1.1: Agregar BreadcrumbList a `/servicios/page.tsx`
  - Estructura: Inicio → Servicios
  - Importar BreadcrumbSchema component
  - Verificar en Google Rich Results Test

- [ ] 1.2: Agregar BreadcrumbList a `/proceso/page.tsx`
  - Estructura: Inicio → Proceso
  - Importar BreadcrumbSchema component

- [ ] 1.3: Agregar BreadcrumbList a `/ubicacion/page.tsx`
  - Estructura: Inicio → Ubicación
  - Importar BreadcrumbSchema component

- [ ] 1.4: Testing
  - Verificar 3 páginas en dev
  - Validar con Google Rich Results Test
  - Confirmar breadcrumbs en SERPS preview

**Archivos a modificar**:
- `src/app/servicios/page.tsx`
- `src/app/proceso/page.tsx`
- `src/app/ubicacion/page.tsx`

**Beneficios**:
✅ Breadcrumbs visibles en Google SERPS
✅ Mejor navegación interna señal
✅ Mejora UX desktop/mobile
✅ Rápido de implementar

---

### ✅ TAREA 2: Crear Manifest.ts (PWA)
**Prioridad**: ⭐⭐⭐ ALTA
**Tiempo estimado**: 15-20 minutos
**Impacto UX**: ⭐⭐⭐⭐

**Descripción**:
Crear archivo `manifest.ts` para PWA (Progressive Web App).
Permite agregar a home screen en móviles, instalar como app, etc.

**Subtasks**:
- [ ] 2.1: Crear `src/app/manifest.ts`
  - name: "Manos Decapa"
  - short_name: "Manos Decapa"
  - description: "Servicio de decapado profesional en Valencia"
  - start_url: "/"
  - display: "standalone"
  - scope: "/"
  - icons array (usar favicon existente)
  - theme_color: color accent (#F4A460)
  - background_color: color background

- [ ] 2.2: Actualizar `layout.tsx`
  - Agregar referencia al manifest
  - Agregar apple-mobile-web-app-capable
  - Agregar apple-mobile-web-app-status-bar-style

- [ ] 2.3: Testing
  - Verificar manifest.json en dev
  - Probar en móvil
  - Verificar en Lighthouse

**Archivos a crear/modificar**:
- `src/app/manifest.ts` (CREAR)
- `src/app/layout.tsx` (MODIFICAR)

**Beneficios**:
✅ Instalable como app en móviles
✅ Ícono en home screen
✅ Mejor engagement mobile
✅ Mejora Lighthouse score

---

## SESIÓN 2: High Impact Content (2-3 horas)

### ✅ TAREA 3: Crear Página de Proyectos Antes/Después
**Prioridad**: ⭐⭐⭐⭐⭐ CRÍTICA
**Tiempo estimado**: 1.5-2 horas
**Impacto Conversión**: ⭐⭐⭐⭐⭐

**Descripción**:
Crear página `/proyectos` o `/trabajos` con galería de antes/después.
Es la forma más poderosa de generar confianza y leads.

**Subtasks**:
- [ ] 3.1: Crear `src/app/proyectos/page.tsx`
  - Hero section: "Nuestros Trabajos - Proyectos Realizados"
  - Grid de 8-12 proyectos antes/después
  - Cada proyecto con:
    - Imagen antes (thumbnail)
    - Imagen después (thumbnail)
    - Título (ej: "Cómoda Antigua del Siglo XX")
    - Descripción corta
    - Tipo de mueble
    - Tiempo realización
    - Cliente testimonio (1-2 líneas)
  - Modal/Lightbox para ver grandes
  - Schema: ItemList + ImageObject

- [ ] 3.2: Crear componentes
  - `ProjectCard` - Tarjeta antes/después
  - `ProjectModal` - Modal expandido
  - `ProjectGallery` - Grid de proyectos

- [ ] 3.3: Crear schema
  - `src/components/schema/projects-page-schema.tsx`
  - ItemList de proyectos
  - ImageObject para antes/después
  - BreadcrumbList

- [ ] 3.4: Agregar a menú
  - Header: "Proyectos"
  - Footer: "Nuestros Trabajos"

- [ ] 3.5: Contenido - Proyectos de ejemplo
  - Usar placeholder images o crear mockups
  - O: Esperar a que usuario proporcione fotos reales
  - Mínimo 8 proyectos para que se vea bien

- [ ] 3.6: Testing
  - Responsive en móvil
  - Modal funciona bien
  - Schema válido

**Archivos a crear**:
- `src/app/proyectos/page.tsx` (CREAR)
- `src/components/sections/project-card.tsx` (CREAR)
- `src/components/sections/project-modal.tsx` (CREAR)
- `src/components/schema/projects-page-schema.tsx` (CREAR)

**Modificar**:
- `src/components/header.tsx` - Agregar link
- `src/components/footer.tsx` - Agregar link

**Beneficios**:
✅ Social proof MÁXIMO (imágenes hablan más que palabras)
✅ Potencial viral en redes (antes/después es muy shareable)
✅ Generador de leads #1
✅ Mejora CTR en Google
✅ Tiempo en sitio ↑↑↑
✅ Diferenciación vs competencia

---

### ✅ TAREA 4: Crear Página de Testimonios/Reseñas
**Prioridad**: ⭐⭐⭐⭐ MUY ALTA
**Tiempo estimado**: 1-1.5 horas
**Impacto Conversión**: ⭐⭐⭐⭐⭐

**Descripción**:
Página `/testimonios` con reseñas de clientes reales.
Factor #1 de conversión después de precio.

**Subtasks**:
- [ ] 4.1: Crear `src/app/testimonios/page.tsx`
  - Hero: "Lo que dicen nuestros clientes"
  - 10-15 testimonios en grid/carousel
  - Cada uno con:
    - Foto cliente (avatar)
    - Nombre
    - Rating (1-5 estrellas)
    - Reseña (2-3 párrafos)
    - Tipo de mueble
    - Fecha
  - Carousel opcional para mobile

- [ ] 4.2: Crear componentes
  - `TestimonialCard` - Tarjeta de reseña
  - `StarRating` - Componente de estrellas
  - `TestimonialCarousel` - Carousel (opcional)

- [ ] 4.3: Crear schema
  - `src/components/schema/testimonials-page-schema.tsx`
  - Review schema (Google Reviews compatible)
  - AggregateRating (promedio de ratings)
  - BreadcrumbList

- [ ] 4.4: Agregar a menú
  - Header: "Testimonios"
  - Footer: "Reseñas de Clientes"

- [ ] 4.5: Contenido
  - Mínimo 10 testimonios reales (o placeholders)
  - Cada uno debe incluir rating

- [ ] 4.6: Testing
  - Schema validation
  - Responsive
  - AggregateRating mostrando correctamente

**Archivos a crear**:
- `src/app/testimonios/page.tsx` (CREAR)
- `src/components/sections/testimonial-card.tsx` (CREAR)
- `src/components/ui/star-rating.tsx` (CREAR)
- `src/components/schema/testimonials-page-schema.tsx` (CREAR)

**Modificar**:
- `src/components/header.tsx` - Agregar link
- `src/components/footer.tsx` - Agregar link

**Beneficios**:
✅ Credibilidad MÁXIMA
✅ Review schema = Rich snippets
✅ Mejora tasa de conversión 30-50%
✅ Google valida reputación
✅ Diferencial vs competencia

---

## SESIÓN 3: Technical Polish (1.5-2 horas)

### ✅ TAREA 5: Generar Favicons Completos
**Prioridad**: ⭐⭐⭐ MEDIA
**Tiempo estimado**: 30-45 minutos
**Impacto UX**: ⭐⭐⭐

**Descripción**:
Crear 7 archivos favicon en diferentes tamaños para navegadores y dispositivos.

**Subtasks**:
- [ ] 5.1: Generar favicons (online tool)
  - favicon-16x16.png (16x16)
  - favicon-32x32.png (32x32)
  - apple-touch-icon.png (180x180)
  - android-chrome-192x192.png (192x192)
  - android-chrome-512x512.png (512x512)
  - icon-192x192.png (duplicate para PWA)
  - icon-512x512.png (duplicate para PWA)
  - favicon.ico (legacy)

- [ ] 5.2: Guardar en `public/`

- [ ] 5.3: Actualizar `layout.tsx`
  - Agregar todas las referencias en head
  - Validar que manifest.ts referencia correctas

- [ ] 5.4: Testing
  - Verificar favicon en navegador
  - Verificar apple-touch-icon en iOS
  - Verificar android en móvil

**Archivos a crear**:
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/favicon.ico`

**Modificar**:
- `src/app/layout.tsx` - Agregar referencias

**Beneficios**:
✅ Profesionalismo visual
✅ Ícono visible en browser tab
✅ Installable en home screen (iOS/Android)
✅ Mejora brand recognition

---

### ✅ TAREA 6: Mejorar Contact Form
**Prioridad**: ⭐⭐⭐ MEDIA
**Tiempo estimado**: 1-1.5 horas
**Impacto Conversión**: ⭐⭐⭐⭐

**Descripción**:
Mejorar formulario de contacto con validación, anti-spam, etc.

**Subtasks**:
- [ ] 6.1: Agregar reCAPTCHA v3
  - Importar script en layout.tsx
  - Implementar en ContactSection
  - Validar en backend (si aplica)

- [ ] 6.2: Mejorar validación
  - Email validation mejorado
  - Teléfono solo números
  - Mensaje mínimo 10 caracteres
  - Error messages claros

- [ ] 6.3: Agregar upload de fotos
  - Botón "Adjuntar fotos"
  - Aceptar JPG, PNG, WebP
  - Máximo 3 fotos
  - Máximo 5MB por foto
  - Preview antes de enviar

- [ ] 6.4: Mejorar UX
  - Spinner al enviar
  - Success message clara
  - Error handling
  - Auto-clear después de success

- [ ] 6.5: Testing
  - Validación de campos
  - Upload de imágenes
  - reCAPTCHA funciona
  - Mobile responsive

**Archivos a modificar**:
- `src/components/sections/contact.tsx`
- `src/app/layout.tsx` (para reCAPTCHA script)

**Beneficios**:
✅ Menos spam
✅ Mejor UX
✅ Más leads de calidad
✅ Usuarios pueden mostrar fotos

---

## 📊 RESUMEN DE TAREAS

| # | Tarea | Prioridad | Tiempo | Impacto | Estado |
|---|-------|-----------|--------|--------|--------|
| 1 | BreadcrumbList internas | ⭐⭐⭐ | 20-30min | ⭐⭐⭐⭐ | Pendiente |
| 2 | Manifest.ts (PWA) | ⭐⭐⭐ | 15-20min | ⭐⭐⭐⭐ | Pendiente |
| 3 | Proyectos Antes/Después | ⭐⭐⭐⭐⭐ | 1.5-2h | ⭐⭐⭐⭐⭐ | Pendiente |
| 4 | Testimonios/Reviews | ⭐⭐⭐⭐ | 1-1.5h | ⭐⭐⭐⭐⭐ | Pendiente |
| 5 | Favicons Completos | ⭐⭐⭐ | 30-45min | ⭐⭐⭐ | Pendiente |
| 6 | Mejorar Contact Form | ⭐⭐⭐ | 1-1.5h | ⭐⭐⭐⭐ | Pendiente |

---

## 🎯 RECOMENDACIÓN DE ORDEN

### Primera sesión (HOY - 2 horas):
1. ✅ **Tarea 1**: BreadcrumbList (20-30 min)
2. ✅ **Tarea 2**: Manifest.ts (15-20 min)
3. ✅ **Tarea 5**: Favicons (30-45 min)
**Total**: ~1-1.5 horas

### Segunda sesión (PRÓXIMA):
4. ✅ **Tarea 3**: Proyectos Antes/Después (1.5-2 h)

### Tercera sesión:
5. ✅ **Tarea 4**: Testimonios (1-1.5 h)
6. ✅ **Tarea 6**: Contact Form (1-1.5 h)

---

## 📈 IMPACTO TOTAL ESPERADO

**Después de completar estas 6 tareas**:

- ✅ 6 nuevas páginas/features
- ✅ 20+ nuevos esquemas
- ✅ +500 líneas de código
- ✅ Tasa de conversión ↑ 40-60% (estimado)
- ✅ Social proof máximo (Proyectos + Testimonios)
- ✅ PWA installable en móviles
- ✅ Breadcrumbs en Google SERPS
- ✅ Form spam protection
- ✅ Proyecto casi 90% completo

---

## 🚀 PRÓXIMO PASO

¿Empezamos? **Recomendación**: Hacer Tareas 1, 2, 5 hoy (rápidas y satisfactorias).

¿Listo para comenzar con la Tarea 1 (BreadcrumbList)?

---

**Documento**: NEXT_TASKS.md
**Creado**: 2025-11-20
**Status**: Ready para implementación
**Last Updated**: 2025-11-20
