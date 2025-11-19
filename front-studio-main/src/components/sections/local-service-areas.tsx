'use client';

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Truck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Ciudades y áreas servidas
const serviceAreas = [
  {
    city: 'Valencia (Capital)',
    description: 'Zona Centro, Barrio del Carmen, Turia, Ensanche',
    icon: MapPin,
  },
  {
    city: 'Puçol',
    description: 'Nuestra ubicación principal - Servicio prioritario',
    icon: MapPin,
    highlight: true,
  },
  {
    city: 'Sagunto',
    description: 'Zona norte del área metropolitana',
    icon: MapPin,
  },
  {
    city: 'Paterna',
    description: 'Zona oeste de Valencia',
    icon: MapPin,
  },
  {
    city: 'Burjassot',
    description: 'Zona noroeste',
    icon: MapPin,
  },
  {
    city: 'Moncada',
    description: 'Zona norte próxima',
    icon: MapPin,
  },
];

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

export function LocalServiceAreasSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="service-areas" className="bg-background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Servicio en Valencia y Alrededores
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Disponemos de servicio de decapado profesional en toda el área metropolitana de Valencia.
          Recogida y entrega incluidas.
        </p>
      </motion.div>

      {/* Grid de ciudades servidas */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {serviceAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full transition-all duration-300 ${
                  area.highlight
                    ? 'border-accent bg-accent/5 shadow-md'
                    : 'hover:shadow-md'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon
                      className={`w-6 h-6 mt-1 flex-shrink-0 ${
                        area.highlight ? 'text-accent' : 'text-primary'
                      }`}
                    />
                    <div className="flex-grow">
                      <h3 className="font-headline font-bold text-lg">
                        {area.city}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {area.description}
                      </p>
                      {area.highlight && (
                        <p className="text-accent text-xs font-semibold mt-2">
                          ★ Ubicación principal
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Información de servicio */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Recogida y entrega */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Truck className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-headline font-bold text-lg mb-2">
                Recogida y Entrega
              </h3>
              <p className="text-muted-foreground text-sm">
                Nos encargamos de recoger y entregar tu mueble en tu domicilio.
                Según medidas y pesos permitidos.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Presupuesto sin compromiso */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 text-accent mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">€</span>
              </div>
              <h3 className="font-headline font-bold text-lg mb-2">
                Presupuesto Gratis
              </h3>
              <p className="text-muted-foreground text-sm">
                Presupuesto sin compromiso en 24 horas. Consulta nuestros precios
                por metro cuadrado de decapado.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Atención personalizada */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-headline font-bold text-lg mb-2">
                Atención Rápida
              </h3>
              <p className="text-muted-foreground text-sm">
                Tiempo de ejecución de 2-7 días según el trabajo. Garantía de
                calidad en todos nuestros trabajos.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Nota SEO local */}
      <motion.div
        className="mt-12 p-6 bg-muted rounded-lg border border-border"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-sm text-muted-foreground text-center">
          <strong>Servicio en toda el área metropolitana de Valencia:</strong> Puçol,
          Valencia, Sagunto, Paterna, Burjassot, Moncada y alrededores.{' '}
          <strong>Decapado profesional sin químicos agresivos.</strong> Contacta con
          nosotros para presupuesto personalizado.
        </p>
      </motion.div>
    </Section>
  );
}
