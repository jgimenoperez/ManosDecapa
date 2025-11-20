'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Zap, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServicesPageSchema } from '@/components/schema/services-page-schema';
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

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  price: string;
  priceNote: string;
  features: string[];
  timeframe: string;
  beforeAfter: {
    description: string;
  };
}

const services: Service[] = [
  {
    id: 'muebles',
    title: 'Decapado de Muebles',
    description: 'Eliminamos pintura, barniz y lacas respetando la madera original',
    longDescription:
      'Nuestro servicio especializado en decapado de muebles recupera la belleza natural de la madera. Ya sea una silla, cómoda, mesa o cualquier mueble de madera, eliminamos todas las capas de pintura, barniz y lacas sin dañar la estructura original.',
    icon: Sparkles,
    price: 'Desde 35€',
    priceNote: 'Por metro cuadrado',
    features: [
      'Métodos profesionales sin químicos agresivos',
      'Conservación de la madera original',
      'Acabado listo para barniz o pintura',
      'Recogida y entrega incluidas',
    ],
    timeframe: '2-7 días según tamaño',
    beforeAfter: {
      description: 'Muebles restaurados a su estado original',
    },
  },
  {
    id: 'puertas',
    title: 'Decapado de Puertas y Ventanas',
    description: 'Recuperamos carpintería antigua con garantía de calidad',
    longDescription:
      'Especializados en la restauración de puertas y ventanas antiguas. Recuperamos el acabado original de maderas nobles y elementos históricos. Perfecto para casas antiguas, viviendas tradicionales y restauraciones.',
    icon: CheckCircle,
    price: 'Desde 80€',
    priceNote: 'Por unidad',
    features: [
      'Especialistas en maderas nobles',
      'Preservación de elementos originales',
      'Restauración de bisagras y herrajes antiguos',
      'Garantía de calidad en trabajos antiguos',
    ],
    timeframe: '3-7 días',
    beforeAfter: {
      description: 'Puertas y ventanas restauradas a su esplendor original',
    },
  },
  {
    id: 'metalicos',
    title: 'Decapado de Elementos Metálicos',
    description: 'Rejas, barandillas y elementos decorativos de metal',
    longDescription:
      'Servicio completo para elementos metálicos decorativos. Eliminamos óxido, pintura vieja y capas de suciedad. Ideal para rejas de ventana, barandillas, puertas de metal, elementos ornamentales y estructuras antiguas.',
    icon: Shield,
    price: 'Desde 50€',
    priceNote: 'Por metro cuadrado',
    features: [
      'Eliminación de óxido y corrosión',
      'Métodos seguros para estructuras',
      'Preservación de detalles decorativos',
      'Preparación para nuevo acabado',
    ],
    timeframe: '2-5 días',
    beforeAfter: {
      description: 'Elementos metálicos restaurados y listos para pintar',
    },
  },
];

export default function ServiciosPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <ServicesPageSchema />
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
                Nuestros Servicios de <span className="text-accent">Decapado Profesional</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Especializados en la recuperación de madera original en Valencia. Muebles, puertas, ventanas y
                elementos metálicos. Métodos profesionales sin químicos agresivos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Row */}
        <Section className="bg-muted">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">Entrega Rápida</h3>
              <p className="text-muted-foreground">2-7 días según el trabajo. Garantizamos calidad sin prisa.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">Sin Químicos Agresivos</h3>
              <p className="text-muted-foreground">
                Métodos profesionales seguros para la madera y el medio ambiente.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">Garantía de Calidad</h3>
              <p className="text-muted-foreground">+10 años de experiencia en restauración de muebles.</p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Main Services */}
        <Section className="bg-background">
          <h2 className="text-4xl font-bold font-headline text-center mb-12">Servicios Principales</h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-8 h-8 text-accent" />
                        <h3 className="text-2xl font-bold font-headline">{service.title}</h3>
                      </div>

                      <p className="text-muted-foreground mb-6 flex-grow">{service.longDescription}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-6 border-t border-border pt-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Timeframe */}
                      <div className="space-y-2 mb-6 bg-accent/5 p-4 rounded-lg border border-accent/20">
                        <div>
                          <p className="text-sm text-muted-foreground">Precio</p>
                          <p className="text-xl font-bold text-accent">{service.price}</p>
                          <p className="text-xs text-muted-foreground">{service.priceNote}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Plazo</p>
                          <p className="text-sm font-semibold">{service.timeframe}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button asChild className="w-full bg-accent hover:bg-accent/90">
                        <Link href="#contact">
                          Solicitar Presupuesto
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Process Section */}
        <Section className="bg-muted">
          <h2 className="text-4xl font-bold font-headline text-center mb-12">Cómo Funciona Nuestro Servicio</h2>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              {
                step: 1,
                title: 'Contacto y Presupuesto',
                description: 'Contacta con nosotros vía teléfono, WhatsApp o email. Envía fotos de tu mueble y recibirás presupuesto sin compromiso en 24 horas.',
              },
              {
                step: 2,
                title: 'Recogida',
                description: 'Si aceptas el presupuesto, nos encargamos de recoger tu mueble en tu domicilio (según medidas y peso permitidos).',
              },
              {
                step: 3,
                title: 'Decapado Profesional',
                description: 'Nuestro equipo realiza el decapado con métodos profesionales y sin químicos agresivos. Tiempo: 2-7 días según complejidad.',
              },
              {
                step: 4,
                title: 'Entrega',
                description: 'Te devolvemos tu mueble restaurado y listo para barnizar o pintar. Incluimos asesoramiento sobre acabados.',
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="mb-8 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Extra Services */}
        <Section className="bg-background">
          <h2 className="text-4xl font-bold font-headline text-center mb-12">Servicios Adicionales</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              {
                title: 'Asesoramiento en Acabados',
                description: 'Recomendaciones personalizadas sobre barnices, pinturas y colores para tu mueble restaurado.',
              },
              {
                title: 'Reparación de Pequeños Daños',
                description: 'Arreglamos grietas, tablillas sueltas y pequeños daños durante el decapado.',
              },
              {
                title: 'Limpieza Profunda',
                description: 'Limpieza exhaustiva de la madera antes del acabado final para mejor resultado.',
              },
              {
                title: 'Consultas Personalizadas',
                description: 'Asesoramiento sobre cuidado de la madera y mantenimiento después del decapado.',
              },
            ].map((service, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold font-headline mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-muted">
          <h2 className="text-4xl font-bold font-headline text-center mb-12">Preguntas Frecuentes</h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              {
                q: '¿Qué tipos de muebles podéis decapar?',
                a: 'Decapamos todo tipo de muebles de madera: sillas, mesas, cómodas, armarios, puertas, ventanas y elementos metálicos. Contacta para casos específicos.',
              },
              {
                q: '¿Cuánto tiempo tarda el decapado?',
                a: 'El plazo depende de la complejidad y tamaño del trabajo. Normalmente entre 2-7 días. Te confirmaremos el tiempo exacto al presupuestar.',
              },
              {
                q: '¿Es seguro el proceso para la madera?',
                a: 'Sí, utilizamos métodos profesionales sin químicos agresivos. Nuestra técnica respeta la estructura original de la madera.',
              },
              {
                q: '¿Incluye la entrega en el precio?',
                a: 'Sí, recogida y entrega están incluidas en el presupuesto (según medidas y pesos permitidos). Consulta condiciones.',
              },
              {
                q: '¿Hacéis trabajos muy complejos?',
                a: 'Sí, contamos con +10 años de experiencia en trabajos complejos. Describenos tu proyecto y te asesoremos.',
              },
              {
                q: '¿Podéis recomendarme un acabado?',
                a: 'Por supuesto, ofrecemos asesoramiento personalizado sobre barnices, pinturas y colores para tu mueble.',
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold font-headline mb-2 text-foreground">{item.q}</h4>
                    <p className="text-muted-foreground text-sm">{item.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Solicita tu presupuesto personalizado sin compromiso. Respuesta en 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/#contact">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Presupuesto Gratuito
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+34654496960">
                  Llamar: +34 654 49 69 60
                </a>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
