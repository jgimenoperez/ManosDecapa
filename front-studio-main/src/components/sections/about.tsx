import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSection() {
  return (
    <Section id="about" className="bg-accent/10 border-y border-accent/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Sobre Manos Decapa - Especialistas en Decapado en Valencia</h2>
        <div className="mt-6 text-lg text-muted-foreground space-y-4">
            <p>
                Manos Decapa nace de la experiencia de <span className="font-bold text-primary">Manos de Hada</span>, nuestro taller de restauración
                de muebles con más de <span className="font-semibold">10 años devolviendo la vida a piezas antiguas en Valencia y Puçol</span>.
            </p>
            <p>
                Tras años perfeccionando técnicas de <span className="font-semibold">decapado profesional sin químicos agresivos</span>, ahora ofrecemos nuestro servicio
                especializado de <span className="font-semibold">decapado de madera</span> para quienes necesitan recuperar la belleza original de sus
                <span className="font-semibold">muebles antiguos</span> sin necesidad de una restauración completa.
            </p>
            <p>
                Nuestro compromiso es garantizar un servicio de calidad, con respeto por la integridad de la madera y el medio ambiente,
                en toda el <span className="font-semibold">área metropolitana de Valencia</span>.
            </p>
        </div>
        <div className="mt-8 p-6 bg-background rounded-lg shadow-sm border">
            <p className='text-lg'>¿Necesitas una restauración integral de tu mueble?</p>
            <Button asChild variant="link" className="text-lg text-secondary">
                <a href="https://www.manosdehada.es" target="_blank" rel="noopener noreferrer">Visita www.manosdehada.es</a>
            </Button>
        </div>
      </div>
    </Section>
  );
}
