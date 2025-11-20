export function ProjectsPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nuestros Proyectos - Manos Decapa',
    description:
      'Galería de proyectos de decapado antes y después. Descubre las transformaciones que realizamos en muebles y elementos decorativos.',
    url: 'https://www.manosdecapa.es/proyectos',
    image: 'https://www.manosdecapa.es/images/og-image.jpg',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Proyectos Completados',
      itemListElement: [
        {
          '@type': 'ImageObject',
          name: 'Cómoda Antigüa del Siglo XX',
          description:
            'Recuperación completa de una cómoda de madera con múltiples capas de pintura vieja.',
          image: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
          ],
          thumbnailUrl:
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
          position: 1,
        },
        {
          '@type': 'ImageObject',
          name: 'Silla de Madera Oscura',
          description: 'Decapado de silla clásica con barniz oscuro muy adherente.',
          image: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
          ],
          thumbnailUrl:
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
          position: 2,
        },
        {
          '@type': 'ImageObject',
          name: 'Puerta Antigua de Roble',
          description: 'Restauración de puerta histórica con detalles decorativos preservados.',
          image: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
          ],
          thumbnailUrl:
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
          position: 3,
        },
        {
          '@type': 'ImageObject',
          name: 'Mesita Lacada en Blanco',
          description: 'Decapado de pequeña mesa con laca blanca. Trabajo rápido y eficiente.',
          image: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
          ],
          thumbnailUrl:
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
          position: 4,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
