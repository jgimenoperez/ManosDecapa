import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Aviso Legal | Manos Decapa',
  description: 'Información legal, condiciones de uso y datos de contacto de Manos Decapa - Servicio de decapado profesional en Valencia',
};

export default function AvisoLegalLayout({
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
