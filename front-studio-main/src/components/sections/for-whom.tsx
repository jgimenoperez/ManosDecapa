import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Building } from 'lucide-react';

export function ForWhomSection() {
  return (
    <Section id="for-whom">
       <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">¿Para Quién Trabajamos?</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Ofrecemos soluciones tanto para amantes de la restauración como para profesionales del sector.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <Card className="flex flex-col shadow-md">
          <CardHeader className="items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <User className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl mt-4">Particulares</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex-grow">
            <p className="text-muted-foreground">
              ¿Tienes un mueble heredado con capas de pintura? ¿Compraste una pieza antigua? 
              Nosotros eliminamos todo y dejamos la madera natural lista para su nuevo uso.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col shadow-md">
          <CardHeader className="items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <Building className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl mt-4">Profesionales</CardTitle>
          </CardHeader>
          <CardContent className="text-center flex-grow">
            <p className="text-muted-foreground">
              Servicio para carpinterías, restauradores y anticuarios. Capacidad para múltiples piezas,
              plazos garantizados. Consulta condiciones especiales para profesionales.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
