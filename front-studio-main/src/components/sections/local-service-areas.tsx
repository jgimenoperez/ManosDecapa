"use client";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Ciudades y áreas servidas
const serviceAreas = [
  {
    city: "Valencia (Capital)",
    description: "Zona Centro, Barrio del Carmen, Turia, Ensanche",
    icon: MapPin,
  },
  {
    city: "Puçol",
    description: "Nuestra ubicación principal - Servicio prioritario",
    icon: MapPin,
    highlight: true,
  },
  {
    city: "Sagunto",
    description: "Zona norte del área metropolitana",
    icon: MapPin,
  },
  {
    city: "Paterna",
    description: "Zona oeste de Valencia",
    icon: MapPin,
  },
  {
    city: "Burjassot",
    description: "Zona noroeste",
    icon: MapPin,
  },
  {
    city: "Moncada",
    description: "Zona norte próxima",
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function LocalServiceAreasSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="service-areas" className="bg-muted/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Servicio en Valencia y Alrededores
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Disponemos de servicio de decapado profesional en toda el área
          metropolitana de Valencia. Recogida y entrega incluidas.
        </p>
      </motion.div>

      {/* Grid de ciudades servidas */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {serviceAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full transition-all duration-300 ${
                  area.highlight
                    ? "border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    : "shadow-md hover:shadow-lg hover:border-primary/30 hover:scale-[1.01]"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 rounded-lg ${
                        area.highlight ? "bg-accent/20" : "bg-primary/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 flex-shrink-0 ${
                          area.highlight ? "text-accent" : "text-primary"
                        }`}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3
                        className={`font-headline font-bold ${
                          area.highlight ? "text-xl" : "text-lg"
                        }`}
                      >
                        {area.city}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                        {area.description}
                      </p>
                      {area.highlight && (
                        <div className="mt-3 inline-flex items-center gap-1.5 bg-accent/15 px-2.5 py-1 rounded-full">
                          <span className="text-accent text-lg leading-none">
                            ★
                          </span>
                          <span className="text-accent text-xs font-bold uppercase tracking-wide">
                            Ubicación principal
                          </span>
                        </div>
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
        animate={inView ? "visible" : "hidden"}
      >
        {/* Recogida y entrega */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/20 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-2xl mb-5">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                Recogida y Entrega
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nos encargamos de recoger y entregar tu mueble en tu domicilio.
                Según medidas y pesos permitidos.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Presupuesto sin compromiso */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-gradient-to-br from-accent/5 to-transparent border-accent/20 shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-accent/10 rounded-2xl mb-5 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">€</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                Presupuesto Gratis
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Presupuesto sin compromiso en 24 horas. Consulta nuestros
                precios por metro cuadrado de decapado.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Atención personalizada */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/20 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-2xl mb-5">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                Atención Rápida
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tiempo de ejecución de 2-7 días según el trabajo. Garantía de
                calidad en todos nuestros trabajos.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Nota SEO local */}



      <motion.div
        className="mt-10 p-8 bg-gradient-to-br from-muted to-muted/50 rounded-xl border-2 border-border/50 mx-auto max-w-4xl shadow-sm text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ textAlign: "center" }}
      >
        <h3
          className="text-lg font-bold font-headline text-foreground mb-3"
          style={{ textAlign: "center" }}
        >
          Servicio en toda el área metropolitana de Valencia
        </h3>
        <div
          className="pt-3 border-t border-border/40 mt-3"
          style={{ textAlign: "center", }}
        >
          <p
            className="text-sm text-muted-foreground leading-relaxed mb-2 full-width"
            style={{ textAlign: "center" }}
          >
            Puçol, Valencia, Sagunto, Paterna, Burjassot, Moncada y alrededores.
          </p>
          <p
            className="text-sm font-semibold text-foreground"
            style={{ textAlign: "center" }}
          >
            Decapado profesional sin químicos agresivos
          </p>
          <p
            className="text-sm text-muted-foreground mt-1"
            style={{ textAlign: "center" }}
          >
            Contacta con nosotros para presupuesto personalizado
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
