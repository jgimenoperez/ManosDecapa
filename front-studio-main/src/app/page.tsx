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
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { BackToTopButton } from '@/components/back-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ForWhomSection />
        <ProcessSection />
        <WhyUsSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
