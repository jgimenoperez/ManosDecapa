export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.manosdecapa.es/#service',
    name: 'Decapado Profesional de Muebles',
    description:
      'Servicio de decapado profesional de muebles en Valencia. Eliminamos pintura, barniz y lacas sin químicos agresivos.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.manosdecapa.es/#organization',
      name: 'Manos Decapa',
      url: 'https://www.manosdecapa.es',
      telephone: '+34 654 49 69 60',
    },
    serviceType: 'Decapado de Muebles',
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
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Decapado',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Decapado de Silla',
          description: 'Servicio de decapado profesional para sillas de madera',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Silla',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: '35',
            description: 'Desde 35€',
          },
        },
        {
          '@type': 'Offer',
          name: 'Decapado de Mesita',
          description: 'Decapado profesional de mesitas de madera y pequeñas mesas',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Mesita',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: '50',
            description: 'Desde 50€',
          },
        },
        {
          '@type': 'Offer',
          name: 'Decapado de Cómoda',
          description: 'Servicio de decapado para cómodas y muebles grandes de madera',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Cómoda',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: '120',
            description: 'Desde 120€',
          },
        },
        {
          '@type': 'Offer',
          name: 'Decapado de Puerta',
          description:
            'Decapado profesional de puertas y ventanas antiguas de madera',
          itemOffered: {
            '@type': 'Service',
            name: 'Decapado de Puerta',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: '80',
            description: 'Desde 80€',
          },
        },
        {
          '@type': 'Offer',
          name: 'Presupuesto Gratis',
          description: 'Solicita un presupuesto sin compromiso',
          itemOffered: {
            '@type': 'Service',
            name: 'Presupuesto Gratuito',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: '0',
            description: 'Gratis',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.92',
      reviewCount: '12',
      bestRating: '5',
      worstRating: '1',
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
