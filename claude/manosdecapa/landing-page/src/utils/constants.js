// Services (3 items)
export const services = [
  {
    id: 'wood',
    title: 'Decapado de Muebles de Madera',
    description: 'Eliminamos pintura, barniz y lacas de todo tipo de muebles respetando la madera original',
    icon: 'wood-grain',
    order: 1
  },
  {
    id: 'doors',
    title: 'Puertas y Ventanas Antiguas',
    description: 'Recuperamos carpintería antigua dejándola lista para nuevo acabado',
    icon: 'door',
    order: 2
  },
  {
    id: 'metal',
    title: 'Elementos Metálicos Decorativos',
    description: 'Decapado de rejas, barandillas y elementos decorativos de metal',
    icon: 'metal',
    order: 3
  }
]

// Process Steps (4 items)
export const processSteps = [
  {
    id: 1,
    title: 'VALORACIÓN',
    description: 'Envíanos fotos de tu pieza y te damos presupuesto sin compromiso. Nos ponemos en contacto en 24 horas.',
    duration: '24 horas'
  },
  {
    id: 2,
    title: 'RECOGIDA',
    description: 'Opcionalmente recogemos en Valencia y área metropolitana sin coste adicional. También aceptamos entregas en nuestro taller.',
    duration: 'Flexible'
  },
  {
    id: 3,
    title: 'DECAPADO',
    description: 'Proceso profesional que respeta la madera original. Limpieza profunda, eliminación de pinturas y barnices, acabado liso y listo para restaurar.',
    duration: '3-10 días según pieza'
  },
  {
    id: 4,
    title: 'ENTREGA',
    description: 'Tu pieza lista para restaurar o darle nuevo acabado. Te devolvemos los muebles en perfecto estado para que aplicues el acabado que desees.',
    duration: 'Según coordinación'
  }
]

// Why Choose Us (3 pillars)
export const whyChooseUs = [
  {
    id: 'experience',
    title: 'Experiencia',
    description: 'Avalados por Manos de Hada, más de 20 años en restauración de muebles antiguos en Valencia',
    icon: 'award'
  },
  {
    id: 'technology',
    title: 'Tecnología Avanzada',
    description: 'Método profesional que no daña la madera. Proceso controlado y respeta la estructura original',
    icon: 'gear'
  },
  {
    id: 'guaranteed',
    title: 'Resultados Garantizados',
    description: 'Sin químicos agresivos, proceso controlado. Satisfacción garantizada o devolvemos el mueble',
    icon: 'shield'
  }
]

// Pricing Tiers (4 items)
export const pricingTiers = [
  {
    id: 'chair',
    category: 'Silla',
    startingPrice: 35,
    description: 'Sillas simples o tapizadas'
  },
  {
    id: 'small-furniture',
    category: 'Mesita/Silla tapizada',
    startingPrice: 50,
    description: 'Mesas pequeñas, taburetes, sillas tapizadas'
  },
  {
    id: 'large-furniture',
    category: 'Cómoda/Aparador',
    startingPrice: 120,
    description: 'Cómodas, aparadores, estanterías'
  },
  {
    id: 'doors',
    category: 'Puerta',
    startingPrice: 80,
    description: 'Puertas de madera, ventanas'
  }
]

// Form Configuration
export const formConfig = {
  fields: [
    { name: 'fullName', type: 'text', required: true, label: 'Nombre Completo', minLength: 2, maxLength: 100 },
    { name: 'email', type: 'email', required: true, label: 'Email' },
    { name: 'phone', type: 'tel', required: true, label: 'Teléfono' },
    { name: 'clientType', type: 'select', required: true, label: 'Tipo de Cliente', options: ['Particular', 'Profesional'] },
    { name: 'itemType', type: 'select', required: true, label: 'Tipo de Mueble', options: ['Silla', 'Mesa', 'Cómoda', 'Puerta', 'Ventana', 'Metal', 'Otro'] },
    { name: 'itemDescription', type: 'textarea', required: true, label: 'Descripción del Mueble', minLength: 10, maxLength: 1000 },
    { name: 'message', type: 'textarea', required: false, label: 'Mensaje Adicional', maxLength: 2000 },
    { name: 'photos', type: 'file', required: false, label: 'Fotos del Mueble', multiple: true, maxFiles: 5, maxFileSize: '5MB', accept: 'image/jpeg,image/png' }
  ],
  submitButtonLabel: 'Solicitar Presupuesto Gratuito',
  successMessage: '¡Gracias! Nos pondremos en contacto en 24 horas.',
  errorMessage: 'Error al enviar el formulario. Por favor, intenta de nuevo o llama al [PLACEHOLDER].'
}

// Footer Info
export const footer = {
  phone: import.meta.env.VITE_FOOTER_PHONE || '[PLACEHOLDER]',
  email: import.meta.env.VITE_FOOTER_EMAIL || 'contact@manosdecapa.es',
  address: 'Valencia, España',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || '[PLACEHOLDER]',
  facebook: import.meta.env.VITE_FACEBOOK_URL || '[PLACEHOLDER]',
  manosDehada: 'www.manosdehada.es'
}

// Portfolio Items (6 items)
export const portfolioItems = [
  {
    id: 'portfolio-1',
    title: 'Silla de Madera Tapizada - Luis XV',
    category: 'Silla',
    beforeImage: {
      url: 'https://via.placeholder.com/400x300?text=Silla+Antes',
      alt: 'Silla de madera tapizada con pintura vieja desgastada'
    },
    afterImage: {
      url: 'https://via.placeholder.com/400x300?text=Silla+Después',
      alt: 'Silla de madera restaurada con estructura clara'
    },
    estimatedTime: '3-5 días',
    description: 'Restauración de silla Luis XV con más de 50 años de pintura acumulada'
  },
  {
    id: 'portfolio-2',
    title: 'Cómoda Años 70 - Nogal',
    category: 'Cómoda',
    beforeImage: {
      url: 'https://via.placeholder.com/400x300?text=Cómoda+Antes',
      alt: 'Cómoda con múltiples capas de pintura marrón'
    },
    afterImage: {
      url: 'https://via.placeholder.com/400x300?text=Cómoda+Después',
      alt: 'Cómoda de nogal restaurada'
    },
    estimatedTime: '7-10 días',
    description: 'Cómoda vintage de nogal con vetas hermosas después del decapado'
  },
  {
    id: 'portfolio-3',
    title: 'Puerta de Roble Antiguo',
    category: 'Puerta',
    beforeImage: {
      url: 'https://via.placeholder.com/400x300?text=Puerta+Antes',
      alt: 'Puerta con pintura blanca despellejada'
    },
    afterImage: {
      url: 'https://via.placeholder.com/400x300?text=Puerta+Después',
      alt: 'Puerta de roble antiguo restaurada'
    },
    estimatedTime: '5-7 días',
    description: 'Puerta de roble macizo restaurada a su belleza original'
  },
  {
    id: 'portfolio-4',
    title: 'Reja de Hierro Decorativa',
    category: 'Metal',
    beforeImage: {
      url: 'https://via.placeholder.com/400x300?text=Reja+Antes',
      alt: 'Reja de hierro oxidada'
    },
    afterImage: {
      url: 'https://via.placeholder.com/400x300?text=Reja+Después',
      alt: 'Reja de hierro restaurada'
    },
    estimatedTime: '2-3 días',
    description: 'Reja de balcón con detalles de hierro forjado recuperados'
  },
  {
    id: 'portfolio-5',
    title: 'Mesa de Escritorio de Caoba',
    category: 'Mesa',
    beforeImage: {
      url: 'https://via.placeholder.com/400x300?text=Mesa+Antes',
      alt: 'Mesa cubierta en laca oscura'
    },
    afterImage: {
      url: 'https://via.placeholder.com/400x300?text=Mesa+Después',
      alt: 'Mesa de caoba restaurada'
    },
    estimatedTime: '4-6 días',
    description: 'Escritorio clásico de caoba completamente restaurado'
  },
  {
    id: 'portfolio-6',
    title: 'Aparador de Dormitorio Vintage',
    category: 'Aparador',
    beforeImage: {
      url: 'https://via.placeholder.com/400x300?text=Aparador+Antes',
      alt: 'Aparador con pintura roja desgastada'
    },
    afterImage: {
      url: 'https://via.placeholder.com/400x300?text=Aparador+Después',
      alt: 'Aparador con vetas naturales restauradas'
    },
    estimatedTime: '6-8 días',
    description: 'Aparador con detalles tallados recuperados en su esplendor'
  }
]
