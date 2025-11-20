export function ServicesPageSchema() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.manosdecapa.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: 'https://www.manosdecapa.es/servicios',
      },
    ],
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Manos Decapa',
    url: 'https://www.manosdecapa.es/servicios',
    telephone: '+34 654 49 69 60',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Rafelbunyol, 31 bajo 3',
      addressLocality: 'Puçol',
      addressRegion: 'Valencia',
      postalCode: '46530',
      addressCountry: 'ES',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Decapado Profesional',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Decapado de Muebles',
          description:
            'Eliminamos pintura, barniz y lacas respetando la madera original. Métodos profesionales sin químicos agresivos.',
          price: '35',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '35',
            priceCurrency: 'EUR',
            unitCode: 'M2',
            description: 'Desde 35€ por metro cuadrado',
          },
          url: 'https://www.manosdecapa.es/servicios#muebles',
          availability: 'https://schema.org/InStock',
          image: 'https://www.manosdecapa.es/images/before-after-1.jpg',
          serviceType: 'Decapado profesional',
          areaServed: ['Valencia', 'Puçol', 'Sagunto', 'Paterna', 'Burjassot', 'Moncada'],
          deliveryLeadTime: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 7,
            unitCode: 'DAY',
          },
        },
        {
          '@type': 'Offer',
          name: 'Decapado de Puertas y Ventanas',
          description:
            'Recuperamos carpintería antigua dejándola lista para un nuevo acabado. Especialistas en maderas nobles y elementos antiguos.',
          price: '80',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '80',
            priceCurrency: 'EUR',
            unitCode: 'C62',
            description: 'Desde 80€ por unidad',
          },
          url: 'https://www.manosdecapa.es/servicios#puertas',
          availability: 'https://schema.org/InStock',
          serviceType: 'Decapado de carpintería',
          areaServed: ['Valencia', 'Puçol', 'Sagunto', 'Paterna', 'Burjassot', 'Moncada'],
          deliveryLeadTime: {
            '@type': 'QuantitativeValue',
            minValue: 3,
            maxValue: 7,
            unitCode: 'DAY',
          },
        },
        {
          '@type': 'Offer',
          name: 'Decapado de Elementos Metálicos',
          description:
            'Decapado de rejas, barandillas y elementos decorativos de metal. Recuperamos el acabado original con métodos seguros.',
          price: '50',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '50',
            priceCurrency: 'EUR',
            unitCode: 'M2',
            description: 'Desde 50€ por metro cuadrado',
          },
          url: 'https://www.manosdecapa.es/servicios#metalicos',
          availability: 'https://schema.org/InStock',
          serviceType: 'Decapado de metal',
          areaServed: ['Valencia', 'Puçol', 'Sagunto', 'Paterna', 'Burjassot', 'Moncada'],
          deliveryLeadTime: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 5,
            unitCode: 'DAY',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        suppressHydrationWarning
      />
    </>
  );
}
