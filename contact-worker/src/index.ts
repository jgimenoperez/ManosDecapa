import { processContactForm } from './handlers/contact';
import { handleCORSPreflight, createCORSOptions, respondWithCORS } from './utils/cors';
import { WorkerEnv, ContactResponse } from './types/index';

/**
 * Worker de Cloudflare para manejar formularios de contacto
 * - Valida datos
 * - Sube imágenes a R2
 * - Envía emails con Resend
 */
export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const origin = request.headers.get('Origin') || '';

    // Crear opciones de CORS
    const corsOptions = createCORSOptions([
      'https://manosdecapa.es',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5500',
    ]);

    // Manejar preflight (OPTIONS)
    const preflightResponse = handleCORSPreflight(request, corsOptions);
    if (preflightResponse) {
      return preflightResponse;
    }

    // Solo permitir POST
    if (request.method !== 'POST') {
      const response = new Response(
        JSON.stringify({
          success: false,
          error: 'Método no permitido. Use POST.',
        }),
        {
          status: 405,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return respondWithCORS(response, origin, corsOptions);
    }

    // Parsear URL
    const url = new URL(request.url);
    const path = url.pathname;

    // Rutas disponibles
    if (path === '/contact' || path === '/contact/') {
      return handleContactForm(request, env, origin, corsOptions);
    }

    // Ruta no encontrada
    const response = new Response(
      JSON.stringify({
        success: false,
        error: 'Endpoint no encontrado',
      }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return respondWithCORS(response, origin, corsOptions);
  },
};

/**
 * Maneja la solicitud POST a /contact
 */
async function handleContactForm(
  request: Request,
  env: WorkerEnv,
  origin: string,
  corsOptions: any
): Promise<Response> {
  try {
    console.log('📨 Solicitud de contacto recibida de:', origin);

    // Validar Content-Type
    const contentType = request.headers.get('Content-Type');
    if (!contentType?.includes('multipart/form-data')) {
      const response = new Response(
        JSON.stringify({
          success: false,
          error: 'Content-Type debe ser multipart/form-data',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return respondWithCORS(response, origin, corsOptions);
    }

    // Parsear FormData
    const formData = await request.formData();

    // Procesar contacto
    const result: ContactResponse = await processContactForm(formData, env);

    // Retornar respuesta
    const statusCode = result.success ? 200 : 400;
    const response = new Response(JSON.stringify(result), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });

    return respondWithCORS(response, origin, corsOptions);
  } catch (error) {
    console.error('❌ Error en contactForm:', error);

    const response = new Response(
      JSON.stringify({
        success: false,
        error: 'Error procesando solicitud',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return respondWithCORS(response, origin, corsOptions);
  }
}
