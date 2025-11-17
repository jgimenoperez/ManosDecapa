import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Manos Decapa',
  description: 'Política de privacidad y protección de datos de Manos Decapa - Cómo tratamos tus datos personales conforme al RGPD',
};

export default function PoliticaPrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
