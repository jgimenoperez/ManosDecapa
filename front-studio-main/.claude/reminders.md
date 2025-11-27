# Recordatorios para el Proyecto Manos Decapa

## ⚠️ Funcionalidades en Desarrollo

### 1. Página de Proyectos (/proyectos/)
**Estado:** En desarrollo - Actualmente oculta en producción

**Dónde está oculta:**
- `src/components/header.tsx` - Línea 16: `// { href: '/proyectos', label: 'Proyectos' }, // En desarrollo`
- `public/robots.txt` - Línea 6: `Disallow: /proyectos/`
- `scripts/generate-sitemap.ts` - Línea 7-15: Excluida de rutas

**Qué hacer cuando esté lista:**
1. Descomentar la línea en `src/components/header.tsx:16`
2. Remover `Disallow: /proyectos/` de `public/robots.txt`
3. Agregar `'/proyectos/',` a las rutas en `scripts/generate-sitemap.ts`
4. Hacer un nuevo build

---

## 📊 Integración con Prismic

### Galería de Imágenes
- **API Key:** Configurada en `.env` (`PRISMIC_API_KEY`)
- **Repositorio:** `manosdehada`
- **Documento:** `Galeria_ManosDecapa` (tipo `gallery`)
- **Función:** `src/lib/prismic.ts` → `getGaleriaItems()`
- **Componente:** `src/components/sections/gallery.tsx`

Las imágenes se optimizan automáticamente con:
- Formato WebP
- Compresión automática
- Ancho máximo de 1200px

---

## 🔍 SEO & Robots

- **Sitemap:** Se genera automáticamente en `npm run build`
- **Robots.txt:** Se encuentra en `public/robots.txt`
- **Build:** `npm run generate:sitemap && next build`

---

## 📝 Notas Finales

- Build estático (`output: 'export'`)
- Datos de Prismic se obtienen en build time
- Página completamente pre-renderizada