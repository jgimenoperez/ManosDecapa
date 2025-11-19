# Guía de Testing con Lighthouse - Manos Decapa

## ¿Qué es Lighthouse?

Lighthouse es una herramienta de auditoría automática de Google que mide:
- **Performance**: Velocidad de carga
- **Accessibility**: Accesibilidad para usuarios con discapacidades
- **Best Practices**: Mejores prácticas web
- **SEO**: Optimización para motores de búsqueda
- **PWA** (opcional): Progessive Web App

## Método 1: Chrome DevTools (Local - Recomendado)

### Paso 1: Iniciar servidor de desarrollo
```bash
npm run dev
```

### Paso 2: Abrir Chrome DevTools
1. Abre http://localhost:3000 en Chrome
2. Presiona `F12` o `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. Ve a la pestaña **Lighthouse**

### Paso 3: Configurar auditoría
1. Selecciona dispositivo: **Mobile** (primero) y **Desktop** (después)
2. Selecciona categorías a auditar:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - ❌ PWA (no aplica con `output: export`)
3. Haz clic en **Analyze page load**

### Paso 4: Interpretar resultados

**Escala de puntuación:**
- 90-100: Verde ✅ Excelente
- 50-89: Amarillo ⚠️ Necesita mejora
- 0-49: Rojo ❌ Crítico

**Métricas clave a revisar:**

#### Performance
- **First Contentful Paint (FCP)**: < 1.8s ✅
- **Largest Contentful Paint (LCP)**: < 2.5s ✅
- **Cumulative Layout Shift (CLS)**: < 0.1 ✅
- **Total Blocking Time (TBT)**: < 200ms ✅

#### SEO
- Meta tags presentes
- Imagen de OG de tamaño correcto
- Viewport configurado
- Texto legible sin zoom
- Robots.txt accesible

#### Accessibility
- Contraste de colores adecuado
- ARIA labels presentes
- Estructura de heading correcta
- Alt text en imágenes

## Método 2: PageSpeed Insights (Producción)

1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/)
2. Ingresa URL: `https://www.manosdecapa.es`
3. Haz clic en "Analizar"
4. Espera 1-2 minutos

**Ventajas:**
- Datos de usuarios reales
- Simula conexión 4G
- Simula dispositivo móvil de gama media

**Desventajas:**
- Requiere sitio en producción
- Los datos llegan después de 24-28 días

## Método 3: Web.dev Measure (Alternativa)

1. Ve a [web.dev/measure](https://web.dev/measure/)
2. Similar a PageSpeed Insights
3. Proporciona recomendaciones detalladas

---

## Optimizaciones Realizadas - Análisis de Impacto

### ✅ Implementadas en esta sesión

| Optimización | Impacto esperado |
|---|---|
| Font loading (next/font/google) | +5-10 pts Performance |
| Image lazy loading | +5-15 pts Performance |
| Image quality optimization | +5 pts Performance |
| Alt text completado | +10 pts SEO |
| Metadata completo | +5 pts SEO |
| Structured Data (Schema) | +5 pts SEO |
| Google Analytics | +2 pts Best Practices |

**Total esperado: +15-25 puntos (promedio)**

---

## Checklist Pre-Testing

Antes de ejecutar Lighthouse, verifica:

- [ ] Dev server corriendo en puerto 3000
- [ ] Sin extensiones del navegador (usa Incognito)
- [ ] Red estable
- [ ] Aplicación compilada correctamente
- [ ] No hay errores en console (F12)
- [ ] Imágenes se cargan correctamente

---

## Benchmarks Objetivo

### Performance
- **Actual (estimado)**: 70-75
- **Objetivo Corto Plazo** (1 mes): 80-85
- **Objetivo Largo Plazo** (3 meses): 90+

### SEO
- **Actual (estimado)**: 85-90
- **Objetivo Corto Plazo** (1 mes): 95+
- **Objetivo Largo Plazo** (3 meses): 100

### Accessibility
- **Actual (estimado)**: 85-90
- **Objetivo Corto Plazo** (1 mes): 90-95
- **Objetivo Largo Plazo** (3 meses): 95+

### Best Practices
- **Actual (estimado)**: 80-85
- **Objetivo Corto Plazo** (1 mes): 90+
- **Objetivo Largo Plazo** (3 meses): 95+

---

## Acciones para Mejora Continua

### Si Performance < 80
1. Reducir tamaño de Framer Motion
2. Agregar code splitting
3. Optimizar imágenes más agresivamente
4. Agregar service worker (PWA)

### Si SEO < 90
1. Agregar más contenido con keywords
2. Mejorar estructura de headings
3. Agregar más backlinks
4. Crear blog posts

### Si Accessibility < 85
1. Revisar contraste de colores
2. Agregar ARIA labels
3. Verificar navegación con teclado
4. Mejorar alttext de imágenes

### Si Best Practices < 85
1. Actualizar dependencias
2. Remover código no utilizado
3. Agregar security headers
4. Optimizar librerías

---

## Documentación de Resultados

Después de ejecutar Lighthouse, documenta:

1. **Fecha de test**: YYYY-MM-DD
2. **Dispositivo**: Mobile / Desktop
3. **Puntuaciones**:
   - Performance: __/100
   - Accessibility: __/100
   - Best Practices: __/100
   - SEO: __/100
4. **Oportunidades principales** (primeras 5)
5. **Diagnósticos** (primeros 5)
6. **Pasos tomados** para mejorar

### Plantilla de documento

```markdown
## Lighthouse Test - [DATE]

### Resultados Móvil
- Performance: X/100
- Accessibility: X/100
- Best Practices: X/100
- SEO: X/100

### Resultados Desktop
- Performance: X/100
- Accessibility: X/100
- Best Practices: X/100
- SEO: X/100

### Top 3 Problemas
1. [Problema] - Impacto: [Alto/Medio/Bajo]
2. [Problema] - Impacto: [Alto/Medio/Bajo]
3. [Problema] - Impacto: [Alto/Medio/Bajo]

### Acciones Tomadas
- [ ] [Acción 1]
- [ ] [Acción 2]
- [ ] [Acción 3]
```

---

## Monitorización Regular

**Recomendado:**
- **Semanal**: Local testing durante desarrollo
- **Quincenal**: PageSpeed Insights en producción
- **Mensual**: Análisis completo + documentación

---

## Recursos Útiles

- [Google Lighthouse Guide](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals Guide](https://web.dev/vitals/)
- [PageSpeed Insights Help](https://support.google.com/webmasters/answer/9205520)
- [Best Practices for Performance](https://web.dev/performance/)
- [Web Accessibility WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Última actualización**: 2025-11-19
**Próxima auditoría recomendada**: 2025-11-26 (post-blog)
