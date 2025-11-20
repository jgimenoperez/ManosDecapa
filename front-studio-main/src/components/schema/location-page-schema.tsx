export function LocationPageSchema() {
  const schema = {
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
        name: 'Ubicación',
        item: 'https://www.manosdecapa.es/ubicacion',
      },
    ],
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Manos Decapa - Taller de Decapado',
    description:
      'Taller de decapado profesional de muebles en Puçol, Valencia. Centro de operaciones principal de Manos Decapa.',
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
    telephone: '+34 654 49 69 60',
    email: 'fiona@manosdehada.es',
    url: 'https://www.manosdecapa.es',
    image: 'https://www.manosdecapa.es/images/og-image.jpg',
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
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: 'closed',
      },
    ],
    accessibility: 'https://schema.org/WheelchairAccessible',
    hasMap: 'https://maps.google.com/?q=39.6164524,-0.3122398',
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+34 654 49 69 60',
      email: 'fiona@manosdehada.es',
      areaServed: 'ES-VC',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        suppressHydrationWarning
      />
    </>
  );
}
