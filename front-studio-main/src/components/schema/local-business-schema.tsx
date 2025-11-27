export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.manosdecapa.es/#organization',
    name: 'Manos Decapa',
    alternateName: 'Manos de Hada Decapado',
    description:
      'Servicio profesional de decapado de muebles en Valencia y Puçol. Especialistas en recuperación de madera antigua sin químicos agresivos. +10 años de experiencia en decapado profesional, restauración de muebles antiguos y elementos decorativos.',
    url: 'https://www.manosdecapa.es',
    foundingDate: '2014',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: '1',
      maxValue: '3',
    },
    telephone: '+34 654 49 69 60',
    email: 'fiona@manosdehada.es',
    logo: 'https://www.manosdecapa.es/images/logo.png',
    image: [
      'https://www.manosdecapa.es/images/og-image.jpg',
      'https://www.manosdecapa.es/images/before-after-1.jpg',
      'https://www.manosdecapa.es/images/workshop.jpg',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+34 654 49 69 60',
        email: 'fiona@manosdehada.es',
        availableLanguage: ['es', 'ca'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        telephone: '+34 654 49 69 60',
        email: 'fiona@manosdehada.es',
        areaServed: 'ES-VC',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Rafelbunyol, 31 bajo 3',
      addressLocality: 'Puçol',
      addressRegion: 'Valencia',
      postalCode: '46530',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '39.6164524',
      longitude: '-0.3122398',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    priceRange: '€€',
    areaServed: [
      {
        '@type': 'City',
        name: 'Valencia',
        '@id': 'https://en.wikipedia.org/wiki/Valencia',
        alternateName: 'Valencia (Capital)',
        description: 'Zona Centro, Barrio del Carmen, Turia, Ensanche y otras áreas de Valencia capital',
      },
      {
        '@type': 'City',
        name: 'Puçol',
        '@id': 'https://en.wikipedia.org/wiki/Puçol',
        description: 'Ubicación principal de Manos Decapa - Servicio prioritario y más rápido',
        areaServedRadius: {
          '@type': 'QuantitativeValue',
          name: 'Radio de servicio',
          value: '5',
          unitCode: 'KMT',
        },
      },
      {
        '@type': 'City',
        name: 'Sagunto',
        '@id': 'https://en.wikipedia.org/wiki/Sagunto',
        description: 'Zona norte del área metropolitana de Valencia',
      },
      {
        '@type': 'City',
        name: 'Paterna',
        '@id': 'https://en.wikipedia.org/wiki/Paterna',
        description: 'Zona oeste de Valencia - Servicio de decapado profesional',
      },
      {
        '@type': 'City',
        name: 'Burjassot',
        '@id': 'https://en.wikipedia.org/wiki/Burjassot',
        description: 'Zona noroeste del área metropolitana',
      },
      {
        '@type': 'City',
        name: 'Moncada',
        '@id': 'https://en.wikipedia.org/wiki/Moncada',
        description: 'Zona norte próxima a Valencia',
      },
    ],
    sameAs: [
      'https://www.instagram.com/manosdhada/',
      'https://www.facebook.com/manosdehadarestaura/',
      'https://www.manosdehada.es',
    ],
    knowsAbout: [
      'Decapado de muebles',
      'Decapado de madera',
      'Restauración de muebles',
      'Decapante para madera',
      'Decapado de puertas antiguas',
      'Muebles antiguos',
      'Carpintería antigua',
    ],
    serviceArea: {
      '@type': 'GeoShape',
      description: 'Valencia y área metropolitana, España',
      areaServed: 'ES-VC',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '39.4699',
        longitude: '-0.3763',
        name: 'Área Metropolitana de Valencia',
      },
    },
    areaServedAddress: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Rafelbunyol, 31 bajo 3',
      addressLocality: 'Puçol',
      addressRegion: 'Valencia',
      postalCode: '46530',
      addressCountry: 'ES',
      description: 'Centro de operaciones principal - Recogida y entrega disponible',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Decapado',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Muebles de Madera',
            description:
              'Eliminamos pintura, barniz y lacas de todo tipo de muebles respetando la madera original. Utilizamos métodos profesionales sin químicos agresivos.',
          },
          price: '35',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '35',
            priceCurrency: 'EUR',
            description: 'Desde',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Puertas y Ventanas Antiguas',
            description:
              'Recuperamos carpintería antigua dejándola lista para un nuevo acabado. Especialistas en maderas nobles y elementos antiguos.',
          },
          price: '80',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '80',
            priceCurrency: 'EUR',
            description: 'Desde',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Elementos Metálicos',
            description:
              'Decapado de rejas, barandillas y elementos decorativos de metal. Recuperamos el acabado original con métodos seguros.',
          },
          price: '50',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '50',
            priceCurrency: 'EUR',
            description: 'Desde',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
