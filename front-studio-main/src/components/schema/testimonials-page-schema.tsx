interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export function TestimonialsPageSchema({
  testimonials,
  averageRating,
}: {
  testimonials: Testimonial[];
  averageRating: number;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Manos Decapa',
    description: 'Servicio profesional de decapado de muebles en Valencia',
    url: 'https://www.manosdecapa.es',
    telephone: '+34 654 49 69 60',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Rafelbunyol, 31 bajo 3',
      addressLocality: 'Puçol',
      postalCode: '46530',
      addressCountry: 'ES',
      addressRegion: 'Valencia',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewBody: testimonial.text,
      datePublished: new Date().toISOString().split('T')[0],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
