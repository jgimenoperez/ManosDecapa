import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Manos Decapa',
    short_name: 'Manos Decapa',
    description:
      'Servicio profesional de decapado de muebles en Valencia. Recuperamos la madera original sin químicos agresivos. Presupuesto gratis en 24h.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: '#F4A460',
    background_color: '#FFF8DC',
    categories: ['business', 'lifestyle'],
    screenshots: [
      {
        src: '/images/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide',
      },
      {
        src: '/images/og-image.jpg',
        sizes: '540x720',
        type: 'image/jpeg',
        form_factor: 'narrow',
      },
    ],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Solicitar Presupuesto',
        short_name: 'Presupuesto',
        description: 'Solicita un presupuesto sin compromiso para tu mueble',
        url: '/#contact',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Ver Servicios',
        short_name: 'Servicios',
        description: 'Conoce todos nuestros servicios de decapado',
        url: '/servicios',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Nuestro Proceso',
        short_name: 'Proceso',
        description: 'Descubre cómo realizamos el decapado profesional',
        url: '/proceso',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Ubicación',
        short_name: 'Ubicación',
        description: 'Nuestra ubicación en Puçol, Valencia',
        url: '/ubicacion',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    ],
    prefer_related_applications: false,
  };
}
