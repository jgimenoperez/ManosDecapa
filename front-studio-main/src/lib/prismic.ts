import * as prismic from '@prismicio/client';

export const createClient = () => {
  const client = prismic.createClient(
    process.env.NEXT_PUBLIC_PRISMIC_REPO_NAME,
    {
      accessToken: process.env.PRISMIC_API_KEY,
    }
  );

  return client;
};

export const getGaleriaItems = async () => {
  const client = createClient();

  try {
    // Obtener todos los documentos de tipo "Galeria_ManosDecapa"
    const documents = await client.getAllByType('gallery', {
      pageSize: 1,
    });

    if (documents.length === 0) {
      console.warn('No se encontraron documentos de tipo Galeria_ManosDecapa');
      return [];
    }

    const galeriaDoc = documents[0];

    // Si tiene un campo repetible "galeria", retornar eso
    if (galeriaDoc?.data?.galeria && Array.isArray(galeriaDoc.data.galeria)) {
      console.log(`✅ Documento encontrado con ${galeriaDoc.data.galeria.length} items en el campo 'galeria'`);
      return galeriaDoc.data.galeria;
    }

    console.warn('El documento no tiene un campo repetible "galeria"');
    return [];
  } catch (error) {
    console.error('Error obteniendo items de galería de Prismic:', error);
    return [];
  }
};
