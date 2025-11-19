export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.manosdecapa.es/#organization',
    name: 'Manos Decapa',
    alternateName: 'Manos de Hada Decapado',
    description:
      'Servicio profesional de decapado de muebles en Valencia. Especialistas en recuperación de madera antigua sin químicos agresivos. +10 años de experiencia.',
    url: 'https://www.manosdecapa.es',
    telephone: '+34654496960',
    email: 'fiona@manosdehada.es',
    logo: 'https://www.manosdecapa.es/images/logo.png',
    image: 'https://www.manosdecapa.es/images/og-image.jpg',
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
      },
      {
        '@type': 'City',
        name: 'Puçol',
      },
      {
        '@type': 'City',
        name: 'Sagunto',
      },
      {
        '@type': 'City',
        name: 'Paterna',
      },
      {
        '@type': 'City',
        name: 'Burjassot',
      },
      {
        '@type': 'City',
        name: 'Moncada',
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
