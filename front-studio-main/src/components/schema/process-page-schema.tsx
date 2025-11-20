export function ProcessPageSchema() {
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
        name: 'Proceso',
        item: 'https://www.manosdecapa.es/proceso',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Proceso de Decapado Profesional de Muebles',
    description:
      'Guía completa sobre cómo realizamos el decapado profesional de muebles sin químicos agresivos.',
    image: 'https://www.manosdecapa.es/images/og-image.jpg',
    totalTime: 'P7D',
    estimatedCost: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      price: '35',
    },
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Decapante Profesional',
      },
      {
        '@type': 'HowToTool',
        name: 'Herramientas de Remoción',
      },
      {
        '@type': 'HowToTool',
        name: 'Agua y Neutralizantes',
      },
      {
        '@type': 'HowToTool',
        name: 'Lija de Acabado',
      },
    ],
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Protección para Mueble',
      },
      {
        '@type': 'HowToSupply',
        name: 'Materiales de Limpieza',
      },
      {
        '@type': 'HowToSupply',
        name: 'Equipamiento de Seguridad',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Evaluación e Inspección',
        text: 'Se analizan el mueble para determinar el estado de la madera, tipo de pintura, y posibles daños.',
        image: 'https://www.manosdecapa.es/images/process-step-1.jpg',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Preparación del Mueble',
        text: 'Se desmonta partes móviles, se limpia y se protegen áreas sensibles del mueble.',
        image: 'https://www.manosdecapa.es/images/process-step-2.jpg',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Decapado Profesional',
        text: 'Se aplican métodos profesionales para eliminar capas sin dañar la madera original.',
        image: 'https://www.manosdecapa.es/images/process-step-3.jpg',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Limpieza y Neutralización',
        text: 'Se eliminan residuos de decapante y se neutraliza la madera para protegerla.',
        image: 'https://www.manosdecapa.es/images/process-step-4.jpg',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Acabado y Lijado',
        text: 'Se prepara la madera para su acabado final con lijado suave y profesional.',
        image: 'https://www.manosdecapa.es/images/process-step-5.jpg',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Ensamblaje y Entrega',
        text: 'Se reensamblaje el mueble y se prepara para entrega con asesoramiento personalizado.',
        image: 'https://www.manosdecapa.es/images/process-step-6.jpg',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué sucede después del decapado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El mueble se entrega listo para barnizar o pintar. Ofrecemos asesoramiento sobre el acabado más adecuado. La madera requiere un acabado para protegerse.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puede haber sorpresas durante el proceso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ocasionalmente descubrimos daños que no eran visibles antes (grietas, tablillas sueltas). Estos se incluyen en presupuesto o se notifican inmediatamente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo entrego el mueble?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recogemos en tu domicilio (según medidas y peso permitidos). Si prefieres traerlo, contacta para coordinar.',
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
    </>
  );
}
