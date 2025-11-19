import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/scroll-progress';
import { CookieConsent } from '@/components/cookie-consent';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { LocalBusinessSchema } from '@/components/schema/local-business-schema';
import { ServiceSchema } from '@/components/schema/service-schema';
import { FAQSchema } from '@/components/schema/faq-schema';

// Optimizar carga de fuentes con next/font/google
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['700'],
  display: 'swap',
  preload: true,
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.manosdecapa.es'),
  title: {
    default: 'Decapado de Muebles Valencia | Manos Decapa - Servicio Profesional',
    template: '%s | Manos Decapa',
  },
  description:
    'Decapado profesional de muebles en Valencia y Puçol. Recuperamos la madera original de tus piezas antiguas sin químicos agresivos. Presupuesto gratis en 24h. +10 años de experiencia. ☎️ +34 654 49 69 60',
  keywords: [
    'decapado muebles valencia',
    'decapado madera',
    'decapado madera valencia',
    'restauración muebles',
    'decapante para madera',
    'decapado puertas antiguas',
    'decapado profesional',
    'decapado sin químicos',
    'muebles antiguos Valencia',
    'carpintería antigua',
    'decapado Puçol',
    'servicio decapado',
  ],
  authors: [
    {
      name: 'Manos Decapa',
      url: 'https://www.manosdecapa.es',
    },
  ],
  creator: 'Manos Decapa',
  publisher: 'Manos Decapa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.manosdecapa.es',
    siteName: 'Manos Decapa',
    title: 'Decapado Profesional de Muebles en Valencia | Manos Decapa',
    description:
      'Servicio especializado de decapado de muebles en Valencia. Recuperamos madera antigua sin químicos agresivos. +10 años de experiencia. Presupuesto gratis.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manos Decapa - Decapado profesional de muebles en Valencia',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decapado Profesional de Muebles Valencia | Manos Decapa',
    description:
      'Recuperamos la madera original de tus muebles antiguos. Servicio profesional en Valencia. Presupuesto gratis en 24h.',
    images: ['/images/twitter-image.jpg'],
    creator: '@manosdecapa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplaza con tu código de verificación
  },
  alternates: {
    canonical: 'https://www.manosdecapa.es',
  },
  category: 'business',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${ptSans.variable}`}>
      <head>
        {/* Preconnect para optimizar carga de recursos externos */}

        {/* Google Maps - Para mapa de ubicación en contacto */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics - Para rastreo de eventos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Unsplash CDN - Para imágenes placeholder */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <GoogleAnalytics />
        <LocalBusinessSchema />
        <ServiceSchema />
        <FAQSchema />
        <ScrollProgress />
        {children}
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}
