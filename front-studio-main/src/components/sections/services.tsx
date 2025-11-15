'use client';

import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: (
      <Image
        src="/images/wood-stripping-primary.svg"
        alt="Decapado de Madera"
        width={56}
        height={56}
        className="w-14 h-14"
      />
    ),
    title: 'Decapado de Muebles de Madera',
    description: 'Eliminamos pintura, barniz y lacas de todo tipo de muebles respetando la madera original.',
  },
  {
    icon: (
      <Image
        src="/images/antique-door-primary.svg"
        alt="Puerta Antigua"
        width={56}
        height={56}
        className="w-14 h-14"
      />
    ),
    title: 'Puertas y Ventanas Antiguas',
    description: 'Recuperamos carpintería antigua dejándola lista para un nuevo acabado.',
  },
  {
    icon: (
      <Image
        src="/images/metal-railing-primary.svg"
        alt="Elementos Metálicos"
        width={56}
        height={56}
        className="w-14 h-14"
      />
    ),
    title: 'Elementos Metálicos Decorativos',
    description: 'Decapado de rejas, barandillas y elementos decorativos de metal para devolverles su esplendor.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Section id="services" className="bg-muted/50">
      <div className="text-center mb-12">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-headline"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mt-2 max-w-2xl mx-auto"
        >
          Descubre cómo podemos transformar tus piezas.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 group h-full">
              <CardHeader>
                <motion.div
                  className="mx-auto bg-primary/20 p-5 rounded-full w-fit"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  {service.icon}
                </motion.div>
                <CardTitle className="font-headline mt-4 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
