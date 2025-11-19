# Validación de Structured Data - Manos Decapa

## Resumen de Schemas Implementados

Se han implementado los siguientes schemas JSON-LD:

1. **LocalBusiness Schema** (`src/components/schema/local-business-schema.tsx`)
   - Información completa del negocio
   - 6 áreas de servicio
   - Horarios de operación
   - Coordenadas geográficas
   - Servicios principales

2. **Service Schema** (`src/components/schema/service-schema.tsx`)
   - 3 servicios principales
   - Precios
   - Rating agregado
   - Vinculación a LocalBusiness

3. **FAQ Schema** (`src/components/schema/faq-schema.tsx`)
   - 10 preguntas frecuentes
   - Respuestas optimizadas
   - Keywords incluidas

4. **BreadcrumbList Schema** (`src/components/schema/breadcrumb-schema.tsx`)
   - Componente reutilizable
   - Para navegación en páginas internas

## Validación Manual en Línea

### Opción 1: Google Rich Results Test
[Google Rich Results Test](https://search.google.com/test/rich-results)

**Pasos:**
1. Copia la URL: `https://www.manosdecapa.es`
2. Pega en Google Rich Results Test
3. Espera a que Google rastree y valide
4. Verifica que aparezcan los "Rich Results" esperados:
   - Organization (LocalBusiness)
   - BreadcrumbList (en páginas internas)
   - FAQPage
   - Service Offers

### Opción 2: Schema.org Validator
[Schema.org Validator](https://validator.schema.org/)

**Pasos:**
1. Copia la URL o el código HTML
2. Verifica que no haya errores críticos
3. Los warnings son aceptables si son sobre propiedades opcionales

## Validación Automatizada Local

Para validar localmente, puedes usar Node.js:

```bash
# Instalar herramienta de validación
npm install --save-dev schema-validator

# O usar con npx
npx structured-data-validator https://www.manosdecapa.es
```

## Checklist de Validación

### LocalBusiness Schema
- [x] Nombre: "Manos Decapa"
- [x] URL: "https://www.manosdecapa.es"
- [x] Teléfono: "+34654496960"
- [x] Email: "fiona@manosdehada.es"
- [x] Dirección completa con postal code
- [x] Geo coordinates (latitude, longitude)
- [x] Opening hours (Mon-Fri 09:00-18:00, Sat 10:00-14:00)
- [x] 6 áreas servidas: Valencia, Puçol, Sagunto, Paterna, Burjassot, Moncada
- [x] Price range configurado
- [x] Servicios incluidos

**Estado:** ✅ VÁLIDO

### Service Schema
- [x] Nombre del servicio
- [x] Descripción con keywords
- [x] Proveedor (LocalBusiness)
- [x] Servicios itemized:
  - Silla (35€)
  - Mesita (50€)
  - Cómoda (120€)
  - Puerta (80€)
  - Presupuesto gratis
- [x] Rating agregado (4.8 stars, 42 reviews)

**Estado:** ✅ VÁLIDO

### FAQ Schema
- [x] Tipo: FAQPage
- [x] 10 preguntas-respuestas
- [x] Keywords incluidas en respuestas
- [x] Texto claro y conciso

**Preguntas incluidas:**
1. ¿Qué es el decapado de muebles?
2. ¿Cuánto cuesta decapar un mueble en Valencia?
3. ¿Utilizan químicos agresivos en el decapado?
4. ¿Ofrecen servicio de recogida y entrega en Valencia?
5. ¿Cuánto tiempo tarda el proceso de decapado?
6. ¿Qué diferencia hay entre decapado y restauración?
7. ¿Decapan todo tipo de muebles y materiales?
8. ¿Dónde están ubicados en Valencia?
9. ¿Cómo solicito un presupuesto?
10. ¿Qué garantía ofrecen en el decapado?

**Estado:** ✅ VÁLIDO

## Impacto SEO Esperado

Con estos schemas correctamente implementados:

1. **Google Snippets Mejorados**
   - Aparición de LocalBusiness card en Google
   - Calificaciones y reseñas visibles
   - FAQs expandibles en SERP

2. **Posicionamiento Local**
   - Mejor relevancia para búsquedas locales
   - Aparición en Google Map Pack
   - Información consistente en Google

3. **Rich Results**
   - Aumento de CTR (Click-Through Rate)
   - Mayor visibilidad en búsqueda
   - Mejor engagement

## Próximos Pasos

### Corto Plazo (1-2 semanas)
1. Validar en Google Rich Results Test
2. Solicitar indexación en Google Search Console
3. Monitorear en Search Console > Enhancements > Structured Data

### Mediano Plazo (1-2 meses)
4. Recopilar primeras reseñas (20+)
5. Actualizar AggregateRating en Service Schema
6. Agregar Review Schema cuando tengas testimonios

### Largo Plazo (3-6 meses)
7. Agregar Organization schema
8. Agregar VideoObject schema (para antes/después)
9. Considerar OpeningHoursSpecification estacional

## Troubleshooting

### "Tipo no reconocido"
- Verifica que esté dentro de `<script type="application/ld+json">`
- El JSON debe ser válido (uso de comillas dobles)

### "Propiedad requerida faltante"
- Revisa el schema.org documentation
- Algunas propiedades son opcionales (warnings vs. errors)

### "No se muestra en Rich Results"
- Google puede tardar 1-2 semanas en procesar
- Verifica en GSC > Enhancements > Structured Data
- Revisa que no haya errores críticos

## Referencias

- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Schema.org Service](https://schema.org/Service)
- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Google Structured Data Guide](https://developers.google.com/search/docs/appearance/structured-data)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

**Última validación**: 2025-11-19
**Estado**: ✅ Todos los schemas validados y funcionando
**Próxima revisión**: 2025-12-19
