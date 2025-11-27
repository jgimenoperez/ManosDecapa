interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date?: string;
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
    review: testimonials.map((testimonial) => {
      // Estimar fecha publicada basada en texto descriptivo
      let publishDate = new Date().toISOString().split('T')[0];

      const dateText = testimonial.date?.toLowerCase() || '';

      if (dateText.includes('última semana')) {
        const date = new Date();
        date.setDate(date.getDate() - 3);
        publishDate = date.toISOString().split('T')[0];
      } else if (dateText.includes('3 meses')) {
        const date = new Date();
        date.setMonth(date.getMonth() - 3);
        publishDate = date.toISOString().split('T')[0];
      } else if (dateText.includes('2 meses')) {
        const date = new Date();
        date.setMonth(date.getMonth() - 2);
        publishDate = date.toISOString().split('T')[0];
      } else if (dateText.includes('un año')) {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        publishDate = date.toISOString().split('T')[0];
      } else if (dateText.includes('2020')) {
        publishDate = '2020-12-01';
      } else if (dateText.includes('2021')) {
        publishDate = '2021-06-01';
      }

      return {
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
        datePublished: publishDate,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
