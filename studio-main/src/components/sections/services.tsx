import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Paintbrush, DoorOpen, ShieldHalf } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
    title: 'Decapado de Muebles de Madera',
    description: 'Eliminamos pintura, barniz y lacas de todo tipo de muebles respetando la madera original.',
  },
  {
    icon: <DoorOpen className="w-10 h-10 text-primary" />,
    title: 'Puertas y Ventanas Antiguas',
    description: 'Recuperamos carpintería antigua dejándola lista para un nuevo acabado.',
  },
  {
    icon: <ShieldHalf className="w-10 h-10 text-primary" />,
    title: 'Elementos Metálicos Decorativos',
    description: 'Decapado de rejas, barandillas y elementos decorativos de metal para devolverles su esplendor.',
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Servicios</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Descubre cómo podemos transformar tus piezas.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                {service.icon}
              </div>
              <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
