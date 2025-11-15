import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Sobre Nosotros</h2>
        <div className="mt-6 text-lg text-muted-foreground space-y-4">
            <p>
                Manos Decapa nace de la experiencia de <span className="font-bold text-primary">Manos de Hada</span>, nuestro taller de restauración
                con más de 10 años devolviendo la vida a muebles antiguos en Valencia.
            </p>
            <p>
                Tras años perfeccionando técnicas, ahora ofrecemos nuestro servicio especializado de decapado para quienes necesitan 
                recuperar la madera original sin necesidad de una restauración completa.
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
