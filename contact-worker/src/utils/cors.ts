/**
 * CORS (Cross-Origin Resource Sharing) utilities
 * Permite que tu frontend en Next.js se comunique con el Worker en Cloudflare
 */

export interface CORSOptions {
  allowedOrigins: string[];
  allowedMethods?: string[];
  allowedHeaders?: string[];
  exposedHeaders?: string[];
  maxAge?: number;
  credentials?: boolean;
}

export function getCORSHeaders(
  origin: string,
  options: CORSOptions
): Record<string, string> {
  const isOriginAllowed =
    options.allowedOrigins.includes(origin) ||
    options.allowedOrigins.includes('*');

  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': isOriginAllowed ? origin : '',
    'Access-Control-Allow-Methods': options.allowedMethods?.join(', ') || 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': options.allowedHeaders?.join(', ') || 'Content-Type, Authorization',
    'Access-Control-Expose-Headers': options.exposedHeaders?.join(', ') || 'Content-Type',
  };

  if (options.maxAge) {
    headers['Access-Control-Max-Age'] = options.maxAge.toString();
  }

  if (options.credentials) {
    headers['Access-Control-Allow-Credentials'] = 'true';
  }

  return headers;
}

export function handleCORSPreflight(
  request: Request,
  options: CORSOptions
): Response | null {
  if (request.method === 'OPTIONS') {
    const origin = request.headers.get('Origin') || '';
    const corsHeaders = getCORSHeaders(origin, options);

    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  return null;
}

/**
 * Crea las opciones de CORS para tu proyecto
 * @param allowedOrigins - Dominios permitidos (ej: ["https://manosdecapa.es", "http://localhost:3000"])
 */
export function createCORSOptions(allowedOrigins: string[]): CORSOptions {
  return {
    allowedOrigins,
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type'],
    maxAge: 86400, // 24 horas
    credentials: false,
  };
}

/**
 * Wrapper para respuestas con CORS headers
 */
export function respondWithCORS(
  response: Response,
  origin: string,
  options: CORSOptions
): Response {
  const corsHeaders = getCORSHeaders(origin, options);
  const newHeaders = new Headers(response.headers);

  Object.entries(corsHeaders).forEach(([key, value]) => {
    if (value) {
      newHeaders.set(key, value);
    }
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
