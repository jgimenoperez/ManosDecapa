import type {NextConfig} from 'next';


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Suprimir advertencia de hydration mismatch en desarrollo (causado por extensiones del navegador)
  experimental: {
    isrMemoryCacheSize: 50 * 1024 * 1024, // 50MB
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  images: {
    // Con output: 'export', las imágenes remotas requieren unoptimized: true
    // Sin embargo, usamos Next.js Image component con configuración óptima
    unoptimized: true,
    // Dispositivos comunes para responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Formatos modernos en orden de preferencia
    formats: ['image/webp', 'image/avif'],
    // Calidades para optimización
    qualities: [75, 80, 85, 90, 95, 100],
    // Permitir imágenes de Unsplash y otros CDNs
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.prismic.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cdn.prismic.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;


// const nextConfig: NextConfig = {
//   /* config options here */
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placehold.co',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };

export default nextConfig;
