'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Droplets,
  Wind,
  Sparkles,
  CheckCircle,
  Shield,
  Leaf,
  ArrowRight,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProcessPageSchema } from '@/components/schema/process-page-schema';
import { BreadcrumbSchema } from '@/components/schema/breadcrumb-schema';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Evaluación e Inspección',
    duration: 'Inicial',
    description:
      'Analizamos el mueble para determinar el estado de la madera, tipo de pintura, y posibles daños.',
    details: [
      'Inspección visual completa',
      'Evaluación del tipo de madera',
      'Análisis de capas de pintura y barniz',
      'Identificación de daños o grietas',
      'Determinación de método óptimo',
    ],
    icon: Shield,
  },
  {
    step: 2,
    title: 'Preparación del Mueble',
    duration: '1-2 horas',
    description: 'Desmontamos partes móviles, limpiamos y protegemos áreas sensibles.',
    details: [
      'Desmontaje de bisagras y herrajes',
      'Protección de zonas sensibles',
      'Limpieza profunda de polvo y suciedad',
      'Preparación del espacio de trabajo',
      'Colocación de tela protectora',
    ],
    icon: Sparkles,
  },
  {
    step: 3,
    title: 'Decapado Profesional',
    duration: '2-5 días',
    description: 'Aplicamos métodos profesionales para eliminar capas sin dañar la madera.',
    details: [
      'Aplicación de decapante profesional sin químicos agresivos',
      'Técnicas de remoción cuidadosa',
      'Múltiples pasadas según necesidad',
      'Control de calidad en cada etapa',
      'Monitoreo de conservación de madera',
    ],
    icon: Droplets,
  },
  {
    step: 4,
    title: 'Limpieza y Neutralización',
    duration: '6-12 horas',
    description: 'Eliminamos residuos de decapante y neutralizamos la madera.',
    details: [
      'Lavado completo con agua',
      'Aplicación de neutralizante (si aplica)',
      'Limpieza de poros de la madera',
      'Secado natural controlado',
      'Inspección para residuos',
    ],
    icon: Wind,
  },
  {
    step: 5,
    title: 'Acabado y Lijado',
    duration: '1-2 días',
    description: 'Preparamos la madera para su acabado final con lijado suave.',
    details: [
      'Lijado fino de la superficie',
      'Eliminación de asperezas',
      'Igualación de tonalidades',
      'Limpieza de polvo de lija',
      'Inspección final de superficie',
    ],
    icon: Zap,
  },
  {
    step: 6,
    title: 'Ensamblaje y Entrega',
    duration: '2-4 horas',
    description: 'Reensamblamos el mueble y lo preparamos para entrega.',
    details: [
      'Recolocación de herrajes y bisagras',
      'Ensamblaje de piezas desmontadas',
      'Control de calidad final',
      'Empaquetado seguro',
      'Entrega a domicilio con asesoramiento',
    ],
    icon: CheckCircle,
  },
];

const benefits = [
  {
    title: 'Sin Químicos Agresivos',
    description: 'Utilizamos decapantes profesionales respetuosos con el medio ambiente',
    icon: Leaf,
  },
  {
    title: 'Madera Original Preservada',
    description: 'Mantenemos la integridad y belleza natural de la madera',
    icon: Sparkles,
  },
  {
    title: 'Garantía de Calidad',
    description: 'Control de calidad en cada etapa del proceso',
    icon: Shield,
  },
  {
    title: 'Entrega Rápida',
    description: 'Tiempo total de 2-7 días según complejidad',
    icon: Zap,
  },
];

export default function ProcesoPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <ProcessPageSchema />
      <BreadcrumbSchema items={[
        { name: 'Inicio', url: 'https://www.manosdecapa.es' },
        { name: 'Proceso', url: 'https://www.manosdecapa.es/proceso' },
      ]} />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent/10 to-background py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6">
                Nuestro Proceso de <span className="text-accent">Decapado Profesional</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre paso a paso cómo realizamos el decapado profesional de muebles. Un proceso meticuloso
                diseñado para recuperar la belleza original de la madera sin dañarla.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Preview */}
        <Section className="bg-muted">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-bold font-headline mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Process Steps */}
        <Section className="bg-background">
          <h2 className="text-4xl font-bold font-headline text-center mb-16">
            6 Pasos del Proceso de Decapado
          </h2>

          <motion.div
            className="space-y-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div key={step.step} variants={itemVariants}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                        {/* Contenido */}
                        <div className={`p-8 ${!isEven ? 'md:col-start-2' : ''}`}>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                              {step.step}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold font-headline">{step.title}</h3>
                              <p className="text-sm text-accent font-semibold">{step.duration}</p>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-6">{step.description}</p>

                          <div className="space-y-2 border-t border-border pt-6">
                            {step.details.map((detail, detailIdx) => (
                              <div key={detailIdx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Icon */}
                        <div className={`flex items-center justify-center p-8 bg-accent/5 ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                          <div className="bg-accent/10 rounded-full p-12 flex items-center justify-center">
                            <Icon className="w-16 h-16 text-accent" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Timeline Summary */}
        <Section className="bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-headline text-center mb-12">Cronograma Típico</h2>

            <motion.div
              className="bg-white dark:bg-slate-900 rounded-lg p-8 border-l-4 border-accent"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-semibold">Recepción y Evaluación</span>
                  <span className="text-accent font-bold">Día 1 (Inicial)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-semibold">Preparación del Mueble</span>
                  <span className="text-accent font-bold">Día 1 (1-2 horas)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-semibold">Decapado Profesional</span>
                  <span className="text-accent font-bold">Días 2-5 (2-5 días)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-semibold">Limpieza y Neutralización</span>
                  <span className="text-accent font-bold">Días 3-6 (6-12 horas)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-semibold">Acabado y Lijado</span>
                  <span className="text-accent font-bold">Días 5-7 (1-2 días)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Ensamblaje y Entrega</span>
                  <span className="text-accent font-bold">Día 7 (2-4 horas)</span>
                </div>

                <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm">
                    <strong>Tiempo total típico: 2-7 días</strong> desde recepción hasta entrega final.
                    El tiempo exacto depende de la complejidad del trabajo y el tamaño del mueble.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Method Advantages */}
        <Section className="bg-background">
          <h2 className="text-4xl font-bold font-headline text-center mb-12">
            Ventajas de Nuestro Método
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              {
                title: 'Seguridad Ambiental',
                description: 'Utilizamos decapantes profesionales que respetan el medio ambiente y la salud.',
              },
              {
                title: 'Preservación de Madera',
                description: 'Nuestro proceso mantiene la integridad y belleza natural de la madera original.',
              },
              {
                title: 'Acabado Perfecto',
                description: 'Dejamos la madera lista para cualquier tipo de acabado: barniz, pintura o tinte.',
              },
              {
                title: 'Exactitud Profesional',
                description: 'Control de calidad en cada etapa garantiza resultados excepcionales.',
              },
              {
                title: 'Velocidad Eficiente',
                description: 'Proceso optimizado sin sacrificar calidad.',
              },
              {
                title: 'Atención Personalizada',
                description: 'Asesoramiento experto en cada paso del proceso y después de la entrega.',
              },
            ].map((advantage, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold font-headline mb-3">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Important Notes */}
        <Section className="bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-headline text-center mb-12">Información Importante</h2>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.div variants={itemVariants}>
                <Card className="border-accent/50 bg-accent/5">
                  <CardContent className="p-6 flex gap-4">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold font-headline mb-2">¿Qué sucede después del decapado?</h4>
                      <p className="text-muted-foreground text-sm">
                        El mueble se entrega listo para barnizar o pintar. Ofrecemos asesoramiento sobre el
                        acabado más adecuado para tu mueble. La madera requiere un acabado para protegerse.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-accent/50 bg-accent/5">
                  <CardContent className="p-6 flex gap-4">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold font-headline mb-2">¿Puede haber sorpresas?</h4>
                      <p className="text-muted-foreground text-sm">
                        Ocasionalmente descubrimos daños que no eran visibles antes del decapado (grietas,
                        tablillas sueltas). Estos se incluyen en el presupuesto inicial o se notifican inmediatamente.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-accent/50 bg-accent/5">
                  <CardContent className="p-6 flex gap-4">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold font-headline mb-2">¿Cuándo entrego el mueble?</h4>
                      <p className="text-muted-foreground text-sm">
                        Recogemos el mueble en tu domicilio (según medidas y peso permitidos). Si prefieres
                        traerlo, contacta para coordinar.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* CTA Final */}
        <Section className="bg-gradient-to-r from-accent/10 to-accent/5">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              ¿Listo para Restaurar tu Mueble?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ahora que conoces nuestro proceso, solicita un presupuesto personalizado sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/#contact">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Presupuesto Gratuito
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/servicios">
                  Ver Servicios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
