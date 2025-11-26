import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { ForWhomSection } from '@/components/sections/for-whom';
import { ProcessSection } from '@/components/sections/process';
import { WhyUsSection } from '@/components/sections/why-us';
import { GallerySection } from '@/components/sections/gallery';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { PricingSection } from '@/components/sections/pricing';
import { FAQSection } from '@/components/sections/faq';
import { AboutSection } from '@/components/sections/about';
import { LocalServiceAreasSection } from '@/components/sections/local-service-areas';
import { ContactSection } from '@/components/sections/contact';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { BackToTopButton } from '@/components/back-to-top';
import { getGaleriaItems } from '@/lib/prismic';

interface GalleryImage {
  id: string;
  name: string;
  beforeUrl: string;
  beforeAlt: string;
  afterUrl: string;
  afterAlt: string;
}

// Obtener datos de Prismic en el servidor (build time o request time)
async function getGalleryData(): Promise<GalleryImage[]> {
  try {
    const galeriaItems = await getGaleriaItems();

    if (!galeriaItems || galeriaItems.length === 0) {
      console.warn('No se encontraron items de galería en Prismic');
      return [];
    }

    // Función auxiliar para optimizar URLs de Prismic
    const optimizeImageUrl = (url: string): string => {
      if (!url) return '';
      // Agregar parámetros de compresión y redimensionamiento a la URL de Prismic
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}auto=compress&fm=webp&fit=max&w=1200`;
    };

    const images: GalleryImage[] = galeriaItems
      .map((item: any, index: number) => {
        // Prismic puede tener campos en mayúsculas o minúsculas
        const antes = item.Antes || item.antes;
        const despues = item.Despues || item.despues;
        const nombre = item.nombre || item.Nombre || `Proyecto ${index + 1}`;

        return {
          id: `gallery-${index + 1}`,
          name: nombre,
          beforeUrl: optimizeImageUrl(antes?.url || ''),
          beforeAlt: antes?.alt || `Antes ${index + 1}`,
          afterUrl: optimizeImageUrl(despues?.url || ''),
          afterAlt: despues?.alt || `Después ${index + 1}`,
        };
      })
      .filter(img => img.beforeUrl && img.afterUrl);

    return images;
  } catch (error) {
    console.error('Error al obtener datos de Prismic:', error);
    return [];
  }
}

export default async function Home() {
  const galleryData = await getGalleryData();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ForWhomSection />
        <ProcessSection />
        <WhyUsSection />
        <GallerySection galleryData={galleryData} />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <AboutSection />
        <LocalServiceAreasSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
