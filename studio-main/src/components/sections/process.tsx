import { Section } from '@/components/section';

const steps = [
  {
    number: 1,
    title: 'Valoración',
    description: 'Envíanos fotos de tu pieza y te damos presupuesto sin compromiso.',
  },
  {
    number: 2,
    title: 'Recogida',
    description: 'Opcionalmente, recogemos en Valencia y área metropolitana.',
  },
  {
    number: 3,
    title: 'Decapado',
    description: 'Proceso profesional por inmersión que respeta la madera original.',
  },
  {
    number: 4,
    title: 'Entrega',
    description: 'Tu pieza lista para restaurar o darle el acabado que prefieras.',
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestro Proceso</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Sencillo, rápido y con resultados espectaculares en solo 4 pasos.
        </p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" aria-hidden="true" />
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold text-2xl font-headline">
                  {step.number}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
