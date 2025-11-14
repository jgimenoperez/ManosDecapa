# Data Model: Manos Decapa Landing Page

**Phase 1 Output** | **Date**: 2025-11-14 | **Status**: Complete

This document defines all data structures used in the landing page.

## Entity: Contact Lead

Represents a customer inquiry from the contact form (FR-009, US2).

### Schema

```json
{
  "id": "string (UUID)",
  "createdAt": "ISO8601 datetime",
  "status": "enum: pending|contacted|converted|no-response",
  "clientType": "enum: Particular | Profesional",

  "personalInfo": {
    "fullName": "string (required, 2-100 chars)",
    "email": "string (required, valid email format)",
    "phone": "string (required, flexible international format: +34XXXXXXXXX or 6XX XXX XXX)",
    "preferredContact": "enum: email | phone | whatsapp"
  },

  "projectInfo": {
    "itemType": "enum: Silla | Mesa | Cómoda | Puerta | Ventana | Metal | Otro",
    "itemDescription": "string (required, 10-1000 chars, customer's description of piece)",
    "estimatedValue": "enum: bajo(0-100€) | medio(100-500€) | alto(>500€) | desconocido",
    "quantity": "integer (1-100, number of pieces)"
  },

  "message": "string (optional, 10-2000 chars, customer's notes/questions)",

  "attachments": {
    "photos": [
      {
        "url": "string (Cloudinary URL or S3 path)",
        "uploadedAt": "ISO8601 datetime",
        "fileName": "string (original file name)",
        "size": "integer (bytes)"
      }
    ],
    "maxPhotos": 5,
    "maxPhotoSize": "5MB per file"
  },

  "metadata": {
    "sourcePage": "string (URL where form was submitted)",
    "userAgent": "string (browser info for support)",
    "formSubmitTime": "integer (milliseconds from page load to submit)",
    "ipAddress": "string (for fraud detection, anonymized)"
  }
}
```

### Validation Rules

| Field | Rules | Error Message |
|-------|-------|---------------|
| fullName | Required, 2-100 chars, alphabetic + spaces | "Por favor ingresa tu nombre completo (2-100 caracteres)" |
| email | Required, valid email format | "Por favor ingresa un email válido" |
| phone | Required, flexible international format | "Por favor ingresa un teléfono válido (ej: +34 666 777 888)" |
| itemType | Required, from enum | "Por favor selecciona el tipo de mueble" |
| itemDescription | Required, 10-1000 chars | "Describe brevemente tu mueble (10-1000 caracteres)" |
| message | Optional, max 2000 chars | "El mensaje no puede exceder 2000 caracteres" |
| photos | Optional, max 5 files, max 5MB each, JPEG/PNG only | "Máximo 5 fotos, 5MB cada una. Formatos: JPEG, PNG" |

### State Transitions

```
pending (just submitted)
  → contacted (business acknowledged via email)
    → converted (customer accepted quote & scheduled service)
    OR
    → no-response (customer didn't follow up after 30 days)
```

### Data Storage

- **Primary storage**: Email service (SendGrid) + email to contact@manosdecapa.es
- **Backup storage**: AWS S3 or Vercel KV for form submission logs (30-day retention)
- **Photos**: Cloudinary or AWS S3 (encrypted, 90-day retention)
- **Future**: CRM integration (HubSpot, Pipedrive) for lead management

### Privacy & Compliance

- **GDPR**: User data deleted after 30 days unless customer requests longer retention
- **GDPR**: Privacy notice displayed in form (link to www.manosdecapa.es/privacy)
- **CCPA**: Applicable if serving California users (comply with data deletion requests)
- **Retention**: Contact lead + photos deleted after 90 days by default

---

## Entity: Service

Represents a service offering (FR-002, US1).

### Schema

```json
{
  "id": "string (enum: wood | doors | metal)",
  "title": "string (service name in Spanish)",
  "description": "string (2-3 sentence explanation)",
  "icon": "string (SVG path or icon name)",
  "order": "integer (display order on page)"
}
```

### Data

```json
[
  {
    "id": "wood",
    "title": "Decapado de Muebles de Madera",
    "description": "Eliminamos pintura, barniz y lacas de todo tipo de muebles respetando la madera original",
    "icon": "wood-grain",
    "order": 1
  },
  {
    "id": "doors",
    "title": "Puertas y Ventanas Antiguas",
    "description": "Recuperamos carpintería antigua dejándola lista para nuevo acabado",
    "icon": "door",
    "order": 2
  },
  {
    "id": "metal",
    "title": "Elementos Metálicos Decorativos",
    "description": "Decapado de rejas, barandillas y elementos decorativos de metal",
    "icon": "metal",
    "order": 3
  }
]
```

---

## Entity: Portfolio Item (Gallery)

Represents before/after furniture examples (FR-006, US3).

### Schema

```json
{
  "id": "string (portfolio-1 to portfolio-6)",
  "title": "string (furniture name: Silla Luis XV, Cómoda años 70, etc)",
  "category": "enum: Silla | Mesa | Aparador | Cómoda | Puerta | Metal",
  "beforeImage": {
    "url": "string (Cloudinary URL with before state)",
    "alt": "string (WCAG alt text)"
  },
  "afterImage": {
    "url": "string (Cloudinary URL with after state)",
    "alt": "string (WCAG alt text)"
  },
  "estimatedTime": "string (e.g., '3-5 días')",
  "description": "string (optional, brief story about piece)"
}
```

### Data (6 Portfolio Items)

```json
[
  {
    "id": "portfolio-1",
    "title": "Silla de Madera Tapizada",
    "category": "Silla",
    "beforeImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/chair-1-before",
      "alt": "Silla de madera con tapizado desgastado y pintura vieja"
    },
    "afterImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/chair-1-after",
      "alt": "Silla de madera restaurada con estructura clara y lista para nuevo acabado"
    },
    "estimatedTime": "3-5 días",
    "description": "Restauración de silla Luis XV con original décadas de pintura"
  },
  {
    "id": "portfolio-2",
    "title": "Cómoda Años 70",
    "category": "Cómoda",
    "beforeImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/dresser-1-before",
      "alt": "Cómoda con múltiples capas de pintura marrón oscuro"
    },
    "afterImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/dresser-1-after",
      "alt": "Cómoda con madera natural visible, lista para restauración integral"
    },
    "estimatedTime": "7-10 días",
    "description": "Cómoda de nogal con capas de pintura acumulada"
  },
  {
    "id": "portfolio-3",
    "title": "Puerta de Roble Antiguo",
    "category": "Puerta",
    "beforeImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/door-1-before",
      "alt": "Puerta de madera con pintura blanca despellejada"
    },
    "afterImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/door-1-after",
      "alt": "Puerta con grano de roble original restaurado"
    },
    "estimatedTime": "5-7 días",
    "description": "Puerta de acceso con roble auténtico descubierto"
  },
  {
    "id": "portfolio-4",
    "title": "Reja de Hierro Decorativa",
    "category": "Metal",
    "beforeImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/metal-1-before",
      "alt": "Reja de hierro oxidada con pintura vieja"
    },
    "afterImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/metal-1-after",
      "alt": "Reja de hierro decapada mostrando estructura original"
    },
    "estimatedTime": "2-3 días",
    "description": "Reja de balcón con detalle de hierro forjado"
  },
  {
    "id": "portfolio-5",
    "title": "Mesa de Escritorio Clásica",
    "category": "Mesa",
    "beforeImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/desk-1-before",
      "alt": "Mesa de escritorio cubierta en laca oscura"
    },
    "afterImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/desk-1-after",
      "alt": "Mesa con madera de caoba visible lista para pulido"
    },
    "estimatedTime": "4-6 días",
    "description": "Mesa de caoba con laca original decapada"
  },
  {
    "id": "portfolio-6",
    "title": "Aparador de Dormitorio",
    "category": "Aparador",
    "beforeImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/sideboard-1-before",
      "alt": "Aparador con múltiples capas de pintura roja desconchada"
    },
    "afterImage": {
      "url": "https://res.cloudinary.com/manosdecapa/image/upload/c_scale,w_400,f_webp/v1/gallery/sideboard-1-after",
      "alt": "Aparador restaurado mostrando vetas naturales de la madera"
    },
    "estimatedTime": "6-8 días",
    "description": "Aparador vintage con capas de pintura removidas"
  }
]
```

---

## Entity: Process Step

Represents the 4-step service process (FR-004, US4).

### Schema

```json
{
  "id": "integer (1-4)",
  "title": "string (step name in Spanish)",
  "description": "string (explanation of what happens at this step)",
  "duration": "string (e.g., '1-2 días')"
}
```

### Data

```json
[
  {
    "id": 1,
    "title": "VALORACIÓN",
    "description": "Envíanos fotos de tu pieza y te damos presupuesto sin compromiso. Nos ponemos en contacto en 24 horas.",
    "duration": "24 horas"
  },
  {
    "id": 2,
    "title": "RECOGIDA",
    "description": "Opcionalmente recogemos en Valencia y área metropolitana sin coste adicional. También aceptamos entregas en nuestro taller.",
    "duration": "Flexible"
  },
  {
    "id": 3,
    "title": "DECAPADO",
    "description": "Proceso profesional que respeta la madera original. Limpieza profunda, eliminación de pinturas y barnices, acabado liso y listo para restaurar.",
    "duration": "3-10 días según pieza"
  },
  {
    "id": 4,
    "title": "ENTREGA",
    "description": "Tu pieza lista para restaurar o darle nuevo acabado. Te devolvemos los muebles en perfecto estado para que aplicues el acabado que desees.",
    "duration": "Según coordinación"
  }
]
```

---

## Entity: Pricing Tier

Represents pricing table (FR-007, US3).

### Schema

```json
{
  "id": "string (category id)",
  "category": "string (furniture category in Spanish)",
  "startingPrice": "number (euros)",
  "description": "string (what's included)",
  "note": "string (optional, special notes)"
}
```

### Data

```json
[
  {
    "id": "chair",
    "category": "Silla",
    "startingPrice": 35,
    "description": "Sillas simples o tapizadas",
    "note": null
  },
  {
    "id": "small-furniture",
    "category": "Mesita/Silla tapizada",
    "startingPrice": 50,
    "description": "Mesas pequeñas, taburetes, sillas tapizadas",
    "note": null
  },
  {
    "id": "large-furniture",
    "category": "Cómoda/Aparador",
    "startingPrice": 120,
    "description": "Cómodas, aparadores, estanterías",
    "note": null
  },
  {
    "id": "doors",
    "category": "Puerta",
    "startingPrice": 80,
    "description": "Puertas de madera, ventanas",
    "note": null
  }
]
```

### Pricing Notes (Footer)

- *Precio final según estado y dimensiones
- **Profesionales: consulta tarifas para volumen

---

## Entity: Why Choose Us (Trust Pillar)

Represents the 3 differentiation factors (FR-005, US1).

### Schema

```json
{
  "id": "string (pillar-1 to pillar-3)",
  "title": "string (pillar name)",
  "description": "string (explanation)",
  "icon": "string (icon name)"
}
```

### Data

```json
[
  {
    "id": "experience",
    "title": "Experiencia",
    "description": "Avalados por Manos de Hada, más de 20 años en restauración de muebles antiguos en Valencia",
    "icon": "award"
  },
  {
    "id": "technology",
    "title": "Tecnología Avanzada",
    "description": "Método profesional que no daña la madera. Proceso controlado y respeta la estructura original",
    "icon": "gear"
  },
  {
    "id": "guaranteed",
    "title": "Resultados Garantizados",
    "description": "Sin químicos agresivos, proceso controlado. Satisfacción garantizada o devolvemos el mueble",
    "icon": "shield"
  }
]
```

---

## Constants

### Color Palette

```javascript
const colors = {
  primary: "#8B4513",      // Wood brown
  secondary: "#D2691E",    // Chocolate
  accent: "#F4A460",       // Warm orange
  background: "#FFF8DC",   // Cream
  text: "#2C1810",         // Dark brown
  white: "#FFFFFF",
  lightGray: "#F5F5F5",
  error: "#E74C3C",
  success: "#27AE60",
  warning: "#F39C12"
};
```

### Typography

```javascript
const typography = {
  fonts: {
    heading: "'Poppins', 'Montserrat', sans-serif",
    body: "'Open Sans', 'Roboto', sans-serif"
  },
  sizes: {
    h1: "3rem",       // 48px
    h2: "2rem",       // 32px
    h3: "1.5rem",     // 24px
    body: "1rem",     // 16px
    small: "0.875rem" // 14px
  },
  weights: {
    normal: 400,
    semibold: 600,
    bold: 700
  }
};
```

### Responsive Breakpoints

```javascript
const breakpoints = {
  mobile: "320px",   // min-width for mobile phones
  tablet: "768px",   // min-width for tablets
  desktop: "1024px", // min-width for desktops
  wide: "1440px"     // min-width for widescreen
};
```

### Contact Form Configuration

```javascript
const formConfig = {
  fields: [
    { name: "fullName", type: "text", required: true, label: "Nombre Completo" },
    { name: "email", type: "email", required: true, label: "Email" },
    { name: "phone", type: "tel", required: true, label: "Teléfono" },
    { name: "clientType", type: "select", required: true, label: "Tipo de Cliente", options: ["Particular", "Profesional"] },
    { name: "itemType", type: "select", required: true, label: "Tipo de Mueble", options: ["Silla", "Mesa", "Cómoda", "Puerta", "Ventana", "Metal", "Otro"] },
    { name: "itemDescription", type: "textarea", required: true, label: "Descripción del Mueble" },
    { name: "message", type: "textarea", required: false, label: "Mensaje Adicional" },
    { name: "photos", type: "file", required: false, label: "Fotos del Mueble", multiple: true, maxFiles: 5, maxFileSize: "5MB", accept: "image/jpeg,image/png" }
  ],
  submitButtonLabel: "Solicitar Presupuesto Gratuito",
  successMessage: "¡Gracias! Nos pondremos en contacto en 24 horas.",
  errorMessage: "Error al enviar el formulario. Por favor, intenta de nuevo o llama al [PLACEHOLDER]."
};
```

---

## Summary

**Total Data Entities**: 6 (Contact Lead, Service, Portfolio Item, Process Step, Pricing Tier, Why Choose Us)

**Total Data Records**:
- Services: 3
- Portfolio items: 6
- Process steps: 4
- Pricing tiers: 4
- Why choose us pillars: 3

**Data Dependencies**:
- Contact Lead has optional attachment references to Portfolio Items and Services
- No circular dependencies
- All data is read-mostly (gallery, pricing, services) except Contact Lead (write-heavy on form submission)

**Scalability Notes**:
- Portfolio items easily expandable (add more before/after examples)
- Pricing tiers easily updatable (seasonal changes, volume discounts)
- Process steps unlikely to change (core business process)
- Contact Lead schema supports future CRM integration

This data model is final and ready for implementation in Phase 2.
