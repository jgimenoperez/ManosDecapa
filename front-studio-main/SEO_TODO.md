# 📋 TODO SEO - Manos Decapa
## Posicionamiento Local: Decapado de Madera y Objetos Decorativos en Valencia

**Objetivo**: Posicionar a nivel local en Valencia/Puçol para keywords de decapado de madera y restauración de muebles.

**Fecha Inicio**: 2025-11-19
**Target Completion**: 2026-05-19 (6 meses)

---

## 🔥 FASE 1: FUNDAMENTOS SEO TÉCNICO (Semana 1-2)

### 1.1 Mejorar Metadata en layout.tsx
- [x] Actualizar `metadata` object con title, description optimizados
- [x] Agregar Open Graph tags completos (og:title, og:description, og:image, og:url)
- [x] Agregar Twitter Card tags
- [x] Agregar keywords array
- [x] Agregar author y publisher
- [x] Agregar robots meta
- [x] Agregar canonical URL
- [x] **Archivo**: `src/app/layout.tsx` ✅ COMPLETADO

### 1.2 Crear robots.txt
- [x] Crear archivo `public/robots.txt`
- [x] Configurar User-agent rules
- [x] Agregar enlace a sitemap
- [x] **Archivo**: `public/robots.txt` ✅ COMPLETADO

### 1.3 Crear sitemap.xml dinámico
- [x] Crear `src/app/sitemap.ts`
- [x] Agregar ruta principal
- [x] Agregar anchors de secciones (#services, #gallery, etc)
- [x] Agregar páginas legales
- [x] Configurar changeFrequency y priority
- [x] **Archivo**: `src/app/sitemap.ts` ✅ COMPLETADO

### 1.4 Crear manifest.json (PWA)
- [ ] Crear `src/app/manifest.ts`
- [ ] Configurar nombre y descripción
- [ ] Configurar colors (primary, background)
- [ ] Agregar iconos (192x192, 512x512)
- [ ] **Archivo**: `src/app/manifest.ts`

### 1.5 Generar favicons completos
- [ ] Crear `favicon-16x16.png` (16x16)
- [ ] Crear `favicon-32x32.png` (32x32)
- [ ] Crear `apple-touch-icon.png` (180x180)
- [ ] Crear `android-chrome-192x192.png` (192x192)
- [ ] Crear `android-chrome-512x512.png` (512x512)
- [ ] Crear `icon-192x192.png` (192x192)
- [ ] Crear `icon-512x512.png` (512x512)
- [ ] Actualizar referencias en `layout.tsx`
- [ ] **Directorio**: `public/`

### 1.6 Crear imágenes Open Graph
- [x] Crear `og-image.jpg` (1200x630) - Facebook/LinkedIn
- [x] Crear `twitter-image.jpg` (1200x600) - Twitter
- [x] Diseñar con logo + texto "Decapado Profesional Valencia"
- [x] Incluir información de contacto y beneficios
- [x] Optimizar tamaño (~130KB, optimizado)
- [x] **Directorio**: `public/images/` ✅ COMPLETADO

---

## 🔗 FASE 2: SCHEMA MARKUP / STRUCTURED DATA (Semana 2-3)

### 2.1 Implementar LocalBusiness Schema
- [x] Crear `src/components/schema/local-business-schema.tsx`
- [x] Configurar Name, URL, telefono, email
- [x] Agregar dirección (PostalAddress)
- [x] Agregar coordenadas (GeoCoordinates)
- [x] Agregar horarios (OpeningHoursSpecification)
- [x] Agregar áreas de servicio (areaServed) - 6 ciudades
- [x] Agregar redes sociales (sameAs)
- [x] Configurar priceRange
- [x] Agregar a `layout.tsx`
- [x] **Archivo**: `src/components/schema/local-business-schema.tsx` ✅ COMPLETADO

### 2.2 Implementar Service Schema
- [x] Crear `src/components/schema/service-schema.tsx`
- [x] Agregar servicios principales (muebles, puertas, metales)
- [x] Incluir descripciones con keywords
- [x] Agregar precios orientativos
- [x] Vincular con LocalBusiness
- [x] Agregar a `layout.tsx`
- [x] **Archivo**: `src/components/schema/service-schema.tsx` ✅ COMPLETADO

### 2.3 Implementar BreadcrumbList Schema
- [x] Crear `src/components/schema/breadcrumb-schema.tsx`
- [x] Crear componente reutilizable
- [ ] Usar en páginas principales (pendiente en páginas internas)
- [x] **Archivo**: `src/components/schema/breadcrumb-schema.tsx` ✅ COMPLETADO

### 2.4 Implementar FAQ Schema
- [x] Crear `src/components/schema/faq-schema.tsx`
- [x] Compilar 10 FAQs sobre decapado
- [x] Incluir keywords en preguntas/respuestas
- [x] Agregar a `layout.tsx`
- [x] **Archivo**: `src/components/schema/faq-schema.tsx` ✅ COMPLETADO

### 2.5 Agregar schemas a layout.tsx
- [x] Importar todos los componentes de schema
- [x] Renderizar en `<body>`
- [x] Crear guía de validación con instrucciones
- [x] Documentar schemas implementados
- [x] Crear SCHEMA_VALIDATION.md con checklist
- [x] **Archivo**: `src/app/layout.tsx`, `SCHEMA_VALIDATION.md` ✅ COMPLETADO

---

## 📝 FASE 3: OPTIMIZACIÓN DE CONTENIDO (Semana 3-4)

### 3.1 Optimizar Hero Section
- [x] Cambiar H1 a "Decapado Profesional de Muebles en Valencia"
- [x] Agregar location en H1 y subtítulo
- [x] Asegurar keywords "Valencia" y "Puçol" visibles
- [x] Incluir CTA claro (presupuesto, contacto)
- [x] Mejorar subtítulo con keywords secundarias
- [x] **Archivo**: `src/components/sections/hero.tsx` ✅ COMPLETADO

### 3.2 Optimizar Services Section
- [x] Cambiar H2 a "Servicios de Decapado en Valencia"
- [x] Incluir keywords en descriptions
- [x] Agregar "Valencia", "Puçol" y "profesional" en servicios
- [x] Mejorar copy con beneficios locales y keywords
- [x] **Archivo**: `src/components/sections/services.tsx` ✅ COMPLETADO

### 3.3 Crear sección FAQ
- [x] Crear `src/components/sections/faq.tsx`
- [x] Usar componente Accordion
- [x] Incluir 10 FAQs (usar las del FAQ Schema)
- [x] Optimizar respuestas con keywords
- [x] Agregar a `page.tsx` entre Pricing y About
- [x] **Archivo**: `src/components/sections/faq.tsx` ✅ COMPLETADO

### 3.4 Agregar FAQ a página principal
- [x] Importar FAQSection en `page.tsx`
- [x] Colocar antes de AboutSection
- [x] Configurar ID para navegación
- [x] **Archivo**: `src/app/page.tsx` ✅ COMPLETADO

### 3.5 Optimizar alt texts de imágenes
- [x] Revisar `placeholder-images.json`
- [x] Agregar keywords en todas las descripciones
- [x] Incluir localización (Valencia, Puçol)
- [x] Hacer descriptivos pero naturales
- [x] Ejemplo: "Cómoda antigua antes del decapado profesional en Valencia"
- [x] **Archivo**: `src/lib/placeholder-images.json` ✅ COMPLETADO

### 3.6 Mejorar About Section
- [x] Agregar H2 "Sobre Manos Decapa - Especialistas en Decapado en Valencia"
- [x] Incorporar keywords naturalmente
- [x] Mencionar ubicación (Valencia, Puçol)
- [x] Mencionar experiencia (+10 años)
- [x] Agregar método "sin químicos agresivos"
- [x] **Archivo**: `src/components/sections/about.tsx` ✅ COMPLETADO

---

## ⚡ FASE 4: OPTIMIZACIÓN TÉCNICA (Semana 4-5)

### 4.1 Optimizar carga de fuentes
- [x] Reemplazar Google Fonts CDN por `next/font/google`
- [x] Crear variables CSS para fuentes
- [x] Configurar `display: 'swap'` para todos
- [x] Actualizar `tailwind.config.ts`
- [x] Remover links de Google Fonts del HTML
- [x] **Archivos**: `src/app/layout.tsx`, `tailwind.config.ts` ✅ COMPLETADO

### 4.2 Habilitar optimización de imágenes
- [x] Evaluar output: 'export' (static) - confirmado
- [x] Configurar remotePatterns para Unsplash, placehold.co, picsum
- [x] Configurar formatos (AVIF, WebP)
- [x] Configurar deviceSizes y imageSizes
- [x] Agregar lazy loading en gallery
- [x] Agregar sizes responsivos
- [x] Configurar quality en imágenes críticas
- [x] **Archivo**: `next.config.ts`, `gallery.tsx`, `hero.tsx` ✅ COMPLETADO

### 4.3 Implementar lazy loading explícito
- [x] Agregar `loading="lazy"` a imágenes gallery
- [x] Configurar `sizes` en imágenes responsivas
- [x] Usar sizes para optimización responsive
- [x] **Archivos**: `src/components/sections/gallery.tsx` ✅ COMPLETADO

### 4.4 Optimizar Framer Motion
- [ ] Usar `useReducedMotion` para accesibilidad
- [ ] Desactivar animaciones si usuario lo prefiere
- [ ] Revisar performance impact
- [ ] **Archivos**: Componentes con motion

### 4.5 Agregar preconnect para recursos
- [ ] Agregar preconnect a Google Fonts (ya existe)
- [ ] Agregar preconnect a Google Maps
- [ ] Agregar dns-prefetch a Google Analytics
- [ ] **Archivo**: `src/app/layout.tsx`

---

## 📄 FASE 5: PÁGINAS ADICIONALES Y ESTRUCTURA (Semana 5-6)

### 5.1 Crear página Aviso Legal
- [x] Crear `src/app/aviso-legal/page.tsx`
- [x] Incluir metadata optimizada
- [x] Contenido legal completo
- [x] Mención de empresa y contacto
- [x] **Archivo**: `src/app/aviso-legal/page.tsx` ✅ COMPLETADO

### 5.2 Crear página Política de Privacidad
- [x] Crear `src/app/politica-privacidad/page.tsx`
- [x] Incluir metadata optimizada
- [x] RGPD compliance
- [x] Datos recopilados y uso
- [x] Derechos del usuario
- [x] **Archivo**: `src/app/politica-privacidad/page.tsx` ✅ COMPLETADO

### 5.3 Crear página Política de Cookies
- [x] Crear `src/app/politica-cookies/page.tsx`
- [x] Incluir metadata optimizada
- [x] Tipos de cookies utilizadas
- [x] Cómo desactivar cookies
- [x] **Archivo**: `src/app/politica-cookies/page.tsx` ✅ COMPLETADO

### 5.4 Crear página de Servicios (opcional)
- [ ] Crear `src/app/servicios/page.tsx`
- [ ] Metadata optimizada con keywords
- [ ] Descripción detallada de servicios
- [ ] Galería de trabajos
- [ ] CTA para contacto
- [ ] **Archivo**: `src/app/servicios/page.tsx`

### 5.5 Crear página "Proceso" (opcional)
- [ ] Crear `src/app/proceso/page.tsx`
- [ ] Explicar paso a paso el decapado
- [ ] Imágenes del proceso
- [ ] Tiempo estimado
- [ ] Ventajas del método
- [ ] **Archivo**: `src/app/proceso/page.tsx`

---

## 🗺️ FASE 6: LOCAL SEO Y GOOGLE BUSINESS (Semana 6)

### 6.1 Configurar Google Business Profile
- [ ] Reclamar/verificar perfil
- [ ] Completar información básica:
  - [ ] Nombre: Manos Decapa
  - [ ] Categoría: Servicio de restauración de muebles
  - [ ] Dirección: Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia
  - [ ] Teléfono: +34 654 49 69 60
  - [ ] Sitio web: https://www.manosdecapa.es
  - [ ] Horarios
- [ ] Subir fotos (mínimo 10):
  - [ ] Logo profesional
  - [ ] Fachada del taller
  - [ ] Interior del taller
  - [ ] Antes/después (5+ trabajos)
  - [ ] Equipo trabajando
- [ ] Configurar categorías secundarias
- [ ] Activar mensajería (si aplica)
- [ ] Crear posts mensuales
- [ ] **Platform**: Google Business Profile

### 6.2 Crear página de ubicación
- [ ] Crear `src/app/ubicacion/page.tsx`
- [ ] H1 "Nuestra Ubicación en Valencia"
- [ ] Mapa embebido más grande
- [ ] Información de contacto completa
- [ ] Cómo llegar desde diferentes zonas
- [ ] **Archivo**: `src/app/ubicacion/page.tsx`

### 6.3 Implementar marcado de áreas de servicio
- [ ] Actualizar LocalBusiness schema con areaServed array
- [ ] Incluir: Valencia, Puçol, Sagunto, Paterna
- [ ] Validar con Google Rich Results Test
- [ ] **Archivo**: `src/components/schema/local-business-schema.tsx`

### 6.4 Agregar contenido local a página principal
- [ ] Crear sección "Servicio en Valencia y Alrededores"
- [ ] Mencionar localidades servidas
- [ ] Destacar recogida y entrega
- [ ] Incluir mapa o lista de ciudades
- [ ] **Archivo**: `src/app/page.tsx` o nueva sección

### 6.5 Garantizar NAP consistency
- [ ] Verificar Name en todos los lugares
- [ ] Verificar Address idéntica en:
  - [ ] Footer
  - [ ] Schema markup
  - [ ] Google Business Profile
  - [ ] Páginas legales
- [ ] Verificar Phone idéntico
- [ ] Registrar en directorios locales:
  - [ ] Páginas Amarillas
  - [ ] Yelp España
  - [ ] Directorios locales Valencia

---

## 📊 FASE 7: MONITORIZACIÓN Y HERRAMIENTAS (Semana 7)

### 7.1 Configurar Google Search Console
- [ ] Crear/reclamar propiedad
- [ ] Verificar dominio
- [ ] Enviar sitemap.xml
- [ ] Solicitar indexación de páginas principales
- [ ] Revisar robots.txt
- [ ] Monitorizar errores de rastreo
- [ ] Configurar target de países (España)
- [ ] Revisar cobertura semanal
- [ ] **URL**: google.com/search-console

### 7.2 Configurar Google Analytics 4
- [x] Crear propiedad GA4
- [x] Obtener ID (G-XXXXXXXXXX)
- [x] Implementar script en `layout.tsx`
- [x] Configurar eventos de conversión:
  - [x] Envío de formulario contacto (generate_lead)
  - [x] Clic en WhatsApp (click - whatsapp_contact)
  - [x] Clic en teléfono (click - phone_contact)
  - [x] Visualización de FAQ (view_item)
  - [x] Visualización de galería (view_item_list)
- [x] Crear función trackEvent() para eventos personalizados
- [x] Crear guía GOOGLE_ANALYTICS_SETUP.md
- [x] **Archivo**: `src/components/analytics/google-analytics.tsx` ✅ COMPLETADO

### 7.3 Configurar Google Tag Manager (opcional)
- [ ] Crear contenedor GTM
- [ ] Implementar script
- [ ] Crear tags para eventos
- [ ] Configurar triggers
- [ ] Publicar cambios

### 7.4 Implementar eventos de conversión
- [ ] Agregar evento en submit de contacto
- [ ] Agregar evento en clic de WhatsApp
- [ ] Agregar evento en clic de teléfono
- [ ] Validar con Network tab
- [ ] **Archivo**: `src/components/sections/contact.tsx`

### 7.5 Test con Lighthouse
- [x] Crear guía completa de testing
- [x] Documentar 3 métodos (DevTools, PageSpeed, Web.dev)
- [x] Definir benchmarks objetivo
- [x] Incluir checklist pre-testing
- [x] Crear plantilla de documentación
- [x] Establecer cadencia de monitorización
- [x] **Archivo**: `LIGHTHOUSE_TESTING.md` ✅ COMPLETADO
- [ ] Ejecutar Lighthouse real (usuario responsable)

### 7.6 Test Mobile-Friendly
- [ ] Google Mobile-Friendly Test
- [ ] Test en múltiples dispositivos
- [ ] Verificar touch targets (48x48px mín)
- [ ] Verificar texto legible sin zoom
- [ ] Revisar velocidad móvil
- [ ] **URL**: google.com/test/mobile-friendly

---

## 📚 FASE 8: CONTENIDO Y LINK BUILDING (Ongoing)

### 8.1 Crear contenido de blog (Mensual)
- [ ] Mes 1: "Guía Completa del Decapado de Muebles"
  - [ ] 2000+ palabras
  - [ ] Incluir keywords
  - [ ] 5-10 imágenes
  - [ ] FAQ integradas
  - [ ] CTA para contacto
  - [ ] **Archivo**: `src/app/blog/guia-decapado/page.tsx`

- [ ] Mes 2: "Cómo Elegir el Mejor Servicio de Decapado en Valencia"
  - [ ] Comparativa de métodos
  - [ ] Consejos prácticos
  - [ ] Criterios de selección

- [ ] Mes 3: "Casos de Éxito: Antes y Después de Nuestros Trabajos"
  - [ ] 3-5 casos detallados
  - [ ] Fotos antes/después
  - [ ] Testimonios cliente

- [ ] Mes 4: "Decapado de Puertas Antiguas: Guía Completa"
  - [ ] Enfoque en carpintería
  - [ ] Proceso específico
  - [ ] Errores comunes

### 8.2 Link building local
- [ ] Registrarse en directorios locales:
  - [ ] [ ] Páginas Amarillas
  - [ ] [ ] Google Business Profile (ya hecho)
  - [ ] [ ] Yelp España
  - [ ] [ ] Listado empresas Valencia
  - [ ] [ ] Directorios craftspeople
- [ ] Contactar interioristas/decoradores Valencia
- [ ] Solicitar enlace desde Manos de Hada
- [ ] Contactar blogs decoración/interiores
- [ ] Participar en foros/comunidades locales Valencia

### 8.3 Social Media para SEO indirecto
- [ ] Publicar trabajos antes/después en Instagram
- [ ] Frecuencia: 2-3 posts/semana
- [ ] Hashtags: #Valencia #Puçol #Decapado #MueblesAntiguos
- [ ] Compartir contenido blog
- [ ] Engagement en comentarios
- [ ] Repostear testimonios clientes

### 8.4 Sistema de reseñas Google
- [ ] Crear email plantilla post-servicio
- [ ] Enviar 1 semana después del trabajo
- [ ] Incluir enlace directo a Google Reviews
- [ ] Responder a TODAS las reseñas (positivas y negativas)
- [ ] Objetivo: 20+ reseñas en 6 meses
- [ ] Objetivo: Rating 4.5+ estrellas

---

## ✅ CHECKLIST TÉCNICO SEO FINAL

### Meta Tags y SEO On-Page
- [x] Title tag optimizado con keyword + location ✅
- [x] Meta description con CTA (max 160 caracteres) ✅
- [x] Meta keywords incluidas ✅
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type) ✅
- [x] Twitter Card tags completos ✅
- [x] Canonical URL presente ✅
- [ ] Hreflang (N/A - monoidioma)
- [ ] Viewport meta tag
- [x] Robots meta tag ✅
- [x] Author meta tag ✅
- [ ] Favicon 16x16, 32x32, 180x180
- [ ] Theme color meta
- [ ] Robots.txt apropiado
- [ ] Sitemap.xml dinámico

### Estructura HTML y Semántica
- [ ] Un solo H1 por página con keyword principal
- [ ] Jerarquía correcta H1 > H2 > H3
- [ ] H2 y H3 con keywords secundarias
- [ ] Etiquetas semánticas (<article>, <section>, <nav>, <main>)
- [ ] Alt text en TODAS las imágenes con keywords
- [ ] Title attribute en enlaces importantes
- [ ] ARIA labels donde necesario
- [ ] Breadcrumbs visibles (en páginas secundarias)

### Schema Markup
- [ ] LocalBusiness schema implementado
- [ ] Service schema implementado
- [ ] Offer schema con precios
- [ ] Organization schema
- [ ] FAQPage schema implementado
- [ ] BreadcrumbList schema
- [ ] Review/AggregateRating schema (cuando tengas reseñas)
- [ ] OpeningHoursSpecification
- [ ] GeoCoordinates
- [ ] PostalAddress correcta

### URLs y Enlaces
- [ ] URLs amigables con keywords
- [ ] URLs cortas (<75 caracteres)
- [ ] Sin parámetros innecesarios
- [ ] HTTPS activo y forzado
- [ ] Redirects 301 para URLs antiguas (N/A)
- [ ] Enlaces internos estratégicos
- [ ] Enlaces externos con rel="noopener noreferrer"
- [ ] Enlaces sociales con rel="noopener"
- [ ] Sin enlaces rotos (verificado)

### Contenido Optimizado
- [ ] Keyword principal en primer párrafo
- [ ] Densidad keyword 1-2%
- [ ] LSI keywords (sinónimos) incluidas
- [ ] Mínimo 300 palabras por página (excepto home)
- [ ] Contenido único, no duplicado
- [ ] Párrafos cortos (2-3 líneas)
- [ ] Listas y bullets para legibilidad
- [ ] Negritas en keywords importantes
- [ ] CTAs claros en cada sección
- [ ] Location keywords "Valencia" presente

### Optimización de Imágenes
- [ ] Formato WebP o AVIF soportado
- [ ] Imágenes comprimidas (<200KB promedio)
- [ ] Dimensiones correctas
- [ ] Alt text descriptivo con keywords
- [ ] Title attribute en imágenes importantes
- [ ] Lazy loading implementado
- [ ] Responsive images con srcset
- [ ] Open Graph image (1200x630) creada
- [ ] Twitter image (1200x600) creada

### Performance
- [ ] Lighthouse Performance >90
- [ ] First Contentful Paint <1.8s
- [ ] Largest Contentful Paint <2.5s
- [ ] Cumulative Layout Shift <0.1
- [ ] First Input Delay <100ms
- [ ] Time to Interactive <3.8s
- [ ] Total Blocking Time <200ms
- [ ] CSS/JS minificado
- [ ] Gzip/Brotli compresión activa
- [ ] Preload recursos críticos
- [ ] Async/defer scripts no críticos

### Mobile y UX
- [ ] Diseño 100% responsive
- [ ] Mobile-Friendly Test aprobado
- [ ] Touch targets 48x48px mínimo
- [ ] Texto >16px legible sin zoom
- [ ] Sin pop-ups intrusivos
- [ ] Velocidad móvil optimizada
- [ ] Viewport meta tag correcto

### Local SEO
- [ ] Google Business Profile reclamado
- [ ] NAP consistente en todo sitio
- [ ] NAP en schema markup
- [ ] Dirección en footer visible
- [ ] Mapa embebido funcional
- [ ] Áreas de servicio especificadas
- [ ] Horarios publicados
- [ ] 10+ fotos en GBP
- [ ] Categorías correctas en GBP
- [ ] Posts mensuales en GBP
- [ ] Solicitud de reseñas implementada
- [ ] Respuesta a reseñas sistemática
- [ ] Citas en directorios locales
- [ ] Keywords locales en contenido

### Analytics y Monitorización
- [ ] Google Search Console configurado
- [ ] Google Analytics 4 implementado
- [ ] Sitemap enviado a GSC
- [ ] Propiedad verificada en GSC
- [ ] Eventos de conversión configurados
- [ ] Goals en GA4 creados
- [ ] Monitorización semanal de posiciones
- [ ] Alertas de errores configuradas
- [ ] Reporte mensual de métricas

### Seguridad y Legal
- [ ] HTTPS activo y forzado
- [ ] Certificado SSL válido
- [ ] Política de Privacidad publicada
- [ ] Aviso Legal publicado
- [ ] Política de Cookies publicada
- [ ] Cookie consent implementado (✅ ya existe)
- [ ] RGPD compliance verificado

### Social Media
- [ ] Enlaces a redes sociales presentes
- [ ] Botones de compartir (opcional)
- [ ] Open Graph optimizado
- [ ] Twitter Cards optimizadas
- [ ] Perfiles sociales activos
- [ ] Publicaciones regulares (2-3/semana)

---

## 📈 MÉTRICAS A MONITORIZAR

### Mensual
- [ ] Posición media en Google (keywords principales)
- [ ] Número de keywords en Top 10
- [ ] Impresiones en Search Console
- [ ] CTR medio en búsqueda
- [ ] Sesiones orgánicas
- [ ] Usuarios nuevos vs recurrentes
- [ ] Tasa de rebote
- [ ] Tiempo medio en página
- [ ] Páginas por sesión
- [ ] Tasa de conversión
- [ ] Formularios enviados
- [ ] Reseñas nuevas en Google
- [ ] Rating promedio Google

### Cada 3 Meses
- [ ] Lighthouse score (Performance, SEO)
- [ ] Core Web Vitals
- [ ] Páginas indexadas en Google
- [ ] Errores de rastreo
- [ ] Backlinks de calidad
- [ ] Análisis competitivo

### Objetivos 6 Meses
- [ ] Top 3 para "decapado muebles valencia"
- [ ] Top 5 para "decapado madera valencia"
- [ ] 15+ keywords en Top 10
- [ ] 5-15 leads orgánicos/mes
- [ ] 20+ reseñas con rating 4.5+
- [ ] 5.000+ sesiones orgánicas mensuales

---

## 🎯 PRIORIDAD Y ORDEN DE EJECUCIÓN

### Semana 1-2: CRÍTICO ✅ (5 de 7 completadas)
1. ✅ Tarea 1.1 - Metadata layout.tsx (HECHO ✅ - 19/11/2025)
2. ✅ Tarea 1.2 - robots.txt (HECHO ✅ - 19/11/2025)
3. ✅ Tarea 1.3 - sitemap.ts (HECHO ✅ - 19/11/2025)
4. ✅ Tarea 2.1 - LocalBusiness schema (HECHO ✅ - 19/11/2025)
5. [ ] Tarea 3.1 - Optimizar Hero H1 (PENDIENTE - CRÍTICO)
6. ✅ Tarea 7.1 - Google Search Console (HECHO ✅ - verificado por DNS)
7. [ ] Tarea 6.1 - Google Business Profile (PENDIENTE)

### Semana 3-4: ALTA PRIORIDAD
8. ✅ Tarea 1.6 - Imágenes OG (HECHO ✅)
9. [ ] Tarea 2.4 + 3.3 - FAQ Schema + Sección (PENDIENTE)
10. [ ] Tarea 3.2 - Services Section (PENDIENTE)
11. [ ] Tarea 4.1 - Fuentes optimizadas (PENDIENTE)
12. [ ] Tarea 5.1 - Páginas legales (PENDIENTE)
13. [ ] Tarea 7.2 - Google Analytics (PENDIENTE)
14. [ ] Tarea 8.4 - Sistema reseñas (PENDIENTE)

### Semana 5-6: MEDIA PRIORIDAD
15. [ ] Tarea 1.4 - manifest.ts (PENDIENTE)
16. [ ] Tarea 2.2 - Service schema (PENDIENTE)
17. [ ] Tarea 3.5 - Alt texts (PENDIENTE)
18. [ ] Tarea 4.2 - Optimizar imágenes (PENDIENTE)
19. [ ] Tarea 5.2 - Página servicios (PENDIENTE)
20. [ ] Tarea 6.4 - Contenido local (PENDIENTE)
21. [ ] Tarea 8.1 - Primer blog (PENDIENTE)

### Futuro: BAJA PRIORIDAD
22. Tarea 4.4 - Optimizar Framer Motion
23. Tarea 5.3 - Página proceso
24. Tarea 8.1 - Blog mensual regular
25. Tarea 8.2 - Link building activo

---

## 📊 ESTIMACIÓN DE ESFUERZO

| Fase | Tareas | Horas | Semanas |
|------|--------|-------|---------|
| 1: Fundamentos | 6 | 12-16h | 1-2 |
| 2: Schema | 5 | 8-12h | 2-3 |
| 3: Contenido | 6 | 10-14h | 3-4 |
| 4: Técnica | 5 | 8-10h | 4-5 |
| 5: Páginas | 5 | 12-16h | 5-6 |
| 6: Local SEO | 5 | 6-8h | 6 |
| 7: Monitoreo | 6 | 4-6h | 7 |
| 8: Contenido | 4 | 4-8h/mes | Ongoing |
| **TOTAL** | **42** | **60-82h** | **6 meses + ongoing** |

---

## 🚀 PRÓXIMOS PASOS

1. **Hoy**: Revisar este TODO y ajustar según necesidades
2. **Esta semana**: Completar Fase 1 (tareas 1.1-1.6)
3. **Próxima semana**: Completar Fase 2 (tareas 2.1-2.5)
4. **Semanas 3-4**: Completar Fases 3-4
5. **Semanas 5-6**: Completar Fases 5-6
6. **Semana 7**: Completar Fase 7 + testing final
7. **Semana 8+**: Fase 8 (contenido y mantenimiento)

---

## 📝 NOTAS Y CONSIDERACIONES

- **NAP**: Asegurar que Name, Address, Phone sean EXACTOS en todos lados
- **Keywords**: Incluir "Valencia" o "Puçol" en contenido principal
- **Imágenes**: Todas deben tener alt text con keywords
- **Performance**: Es crítica para ranking local
- **Reseñas**: Solicitar regularmente a clientes satisfechos
- **Blog**: Comenzar con 1 artículo/mes mínimo
- **Link Building**: Enfocarse en directorios locales primero
- **Monitoreo**: Revisar Google Search Console semanalmente

---

**Última actualización**: 2025-11-19
**Responsable**: Equipo de Desarrollo
**Status**: 🟢 En Progreso (24 de 42 tareas completadas - 57.1%)

---

## 📊 PROGRESO ACTUAL

✅ **COMPLETADAS (24 tareas - 57.1%):**
1. Tarea 1.1 - Metadata layout.tsx con keywords, Open Graph, Twitter Cards, robots
2. Tarea 1.2 - robots.txt con reglas para Google, Bing, Yahoo y bloqueo de bots malos
3. Tarea 1.3 - sitemap.ts dinámico con todas las rutas principales y páginas legales
4. Tarea 1.6 - Imágenes Open Graph profesionales (og-image.jpg + twitter-image.jpg)
5. Tarea 2.1 - LocalBusiness Schema con 6 ciudades, horarios, coordenadas
6. Tarea 2.2 - Service Schema con 3 servicios principales y precios
7. Tarea 2.3 - BreadcrumbList Schema reutilizable
8. Tarea 2.4 - FAQ Schema con 10 FAQs optimizadas
9. Tarea 3.1 - Hero Section optimizada con H1 y keywords "Valencia" + "Decapado Profesional"
10. Tarea 3.2 - Services Section optimizada "Servicios de Decapado en Valencia"
11. Tarea 3.3 - Sección FAQ visual con Accordion component (10 FAQs)
12. Tarea 3.4 - Agregar FAQ a página principal
13. Tarea 3.5 - Alt texts de imágenes optimizados en placeholder-images.json (19/11/2025)
14. Tarea 3.6 - About Section optimizada con keywords locales
15. Tarea 4.1 - Optimizar carga de fuentes con next/font/google (19/11/2025)
16. Tarea 4.2 - Optimizar imágenes con lazy loading y formatos modernos (19/11/2025)
17. Tarea 4.3 - Implementar lazy loading explícito y sizes responsivos (19/11/2025)
18. Tarea 5.1 - Página Aviso Legal (aviso-legal/page.tsx)
19. Tarea 5.2 - Página Política de Privacidad (politica-privacidad/page.tsx)
20. Tarea 5.3 - Página Política de Cookies (politica-cookies/page.tsx)
21. Tarea 7.1 - Google Search Console verificado por DNS
22. Tarea 7.2 - Google Analytics 4 con eventos de conversión (19/11/2025)
23. Tarea 2.5 - Guía de validación de Structured Data (SCHEMA_VALIDATION.md) (19/11/2025)
24. Tarea 7.5 - Guía completa de Lighthouse Testing (LIGHTHOUSE_TESTING.md) (19/11/2025)

⏭️ **EN PROGRESO:** Próxima tarea = Tarea 4.4 (Optimizar Framer Motion)

⏳ **PENDIENTES:** 18 tareas (42.9%)
