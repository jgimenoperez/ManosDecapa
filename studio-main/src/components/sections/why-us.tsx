import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Award, Zap, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-10 h-10 text-accent" />,
    title: 'Experiencia',
    description: 'Avalados por Manos de Hada, con más de 10 años de experiencia en el sector de la restauración.',
  },
  {
    icon: <Zap className="w-10 h-10 text-accent" />,
    title: 'Tecnología Avanzada',
    description: 'Utilizamos un método de decapado profesional por inmersión que no daña la madera.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: 'Resultados Garantizados',
    description: 'Proceso controlado sin químicos agresivos, asegurando la integridad de tus piezas.',
  },
];

export function WhyUsSection() {
  return (
    <Section id="why-us">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">¿Por Qué Elegirnos?</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Compromiso, calidad y pasión por la madera.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center p-6 border border-transparent hover:border-border hover:shadow-lg rounded-lg transition-all duration-300">
            <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
              {reason.icon}
            </div>
            <h3 className="font-headline text-xl font-bold mt-4">{reason.title}</h3>
            <p className="text-muted-foreground mt-2">{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
