'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LocationPageSchema } from '@/components/schema/location-page-schema';

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

export default function UbicacionPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <LocationPageSchema />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent/10 to-background py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
                Nuestra Ubicación en Valencia
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ubicado en Puçol, Valencia. Centro de operaciones principal para servicio rápido en el área metropolitana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Information Cards */}
        <Section className="bg-background">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Dirección */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-3">Dirección</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>Carrer Rafelbunyol, 31 bajo 3</strong>
                        </p>
                        <p>46530 Puçol</p>
                        <p>Valencia, España</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-3">Contacto</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Teléfono</p>
                          <a
                            href="tel:+34654496960"
                            className="text-accent hover:underline font-semibold text-lg"
                          >
                            +34 654 49 69 60
                          </a>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href="mailto:fiona@manosdehada.es"
                            className="text-accent hover:underline font-semibold"
                          >
                            fiona@manosdehada.es
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Horarios */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold font-headline mb-3">Horarios</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Lunes - Viernes:</span>
                          <span className="font-semibold text-foreground">09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sábado:</span>
                          <span className="font-semibold text-foreground">10:00 - 14:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Domingo:</span>
                          <span className="font-semibold text-foreground">Cerrado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Servicios en Ubicación */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Car className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-3">Servicios</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          Recogida en domicilio
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          Presupuestos sin compromiso
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          Entrega del trabajo
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          Consultas personalizadas
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* Mapa */}
        <Section className="bg-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">Ubicación en Mapa</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7123456789!2d-0.3122398!3d39.6164524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f3e3e3e3e3e3%3A0x1234567890!2sCarrer%20Rafelbunyol%2C%2031%2C%2046530%20Puçol%2C%20Valencia!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Haz clic en el mapa para ver ubicación completa en Google Maps
            </p>
          </motion.div>
        </Section>

        {/* Cómo Llegar */}
        <Section className="bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold font-headline mb-8 text-center">Cómo Llegar</h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {/* En Coche */}
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Car className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-bold font-headline">En Coche</h3>
                      </div>
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <p className="font-semibold text-foreground mb-2">Desde Valencia Centro</p>
                          <p className="text-sm">
                            Aproximadamente 15-20 minutos. Dirígete hacia el norte por la N-340 en dirección a Sagunto. Nuestro taller está bien señalizado.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-2">Estacionamiento</p>
                          <p className="text-sm">
                            Disponemos de estacionamiento gratuito en la zona. Fácil acceso con vehículos grandes.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* En Transporte Público */}
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Train className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-bold font-headline">Transporte Público</h3>
                      </div>
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <p className="font-semibold text-foreground mb-2">Autobús</p>
                          <p className="text-sm">
                            Líneas de autobús disponibles desde Valencia. Consulta con la EMT Valencia para la mejor ruta según tu ubicación.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-2">Tren</p>
                          <p className="text-sm">
                            Estación de Tren de Puçol disponible. Desde ahí, un corto desplazamiento a pie o en taxi hasta el taller.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Zona Servida */}
        <Section className="bg-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">Zona de Servicio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { city: 'Valencia', time: 'Estándar' },
                { city: 'Puçol', time: '2-3 días' },
                { city: 'Sagunto', time: 'Estándar' },
                { city: 'Paterna', time: 'Estándar' },
                { city: 'Burjassot', time: 'Estándar' },
                { city: 'Moncada', time: 'Estándar' },
              ].map((location, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={location.city === 'Puçol' ? 'border-accent bg-accent/5' : ''}>
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold mb-1">{location.city}</p>
                      <p className="text-sm text-muted-foreground">{location.time}</p>
                      {location.city === 'Puçol' && (
                        <p className="text-xs text-accent font-semibold mt-2">★ Principal</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* CTA */}
        <Section className="bg-background">
          <motion.div
            className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 text-center max-w-2xl mx-auto border border-accent/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-headline mb-4">¿Necesitas presupuesto?</h2>
            <p className="text-muted-foreground mb-6">
              Contáctanos hoy mismo para solicitar un presupuesto sin compromiso en 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34654496960"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/34654496960"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
