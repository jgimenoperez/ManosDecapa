'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TestimonialsPageSchema } from '@/components/schema/testimonials-page-schema';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { BackToTopButton } from '@/components/back-to-top';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
  projectType: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María García López',
    location: 'Valencia, España',
    rating: 5,
    date: 'Octubre 2024',
    text: 'Excelente servicio. Mi cómoda antigua parecía nueva después del decapado. El equipo fue muy profesional y terminaron en el tiempo estimado. ¡Muy recomendado!',
    projectType: 'Cómoda Antiguia',
    verified: true,
  },
  {
    id: 2,
    name: 'Juan Martínez',
    location: 'Riba-roja, Valencia',
    rating: 5,
    date: 'Septiembre 2024',
    text: 'Increíble transformación de mi mesa de madera. No creía que quedara tan bien. El decapado fue perfecto, sin rayones. ¡Volvería a confiar sin dudarlo!',
    projectType: 'Mesa de Madera',
    verified: true,
  },
  {
    id: 3,
    name: 'Carmen Rodríguez',
    location: 'Puçol, Valencia',
    rating: 5,
    date: 'Agosto 2024',
    text: 'Mi abuela tiene unas sillas antiguas que traté por años de restaurar. Manos Decapa las dejó como nuevas. El trato personal fue impecable.',
    projectType: 'Sillas Clásicas',
    verified: true,
  },
  {
    id: 4,
    name: 'David Sánchez Gómez',
    location: 'Torrent, Valencia',
    rating: 5,
    date: 'Julio 2024',
    text: 'Servicio rápido y eficiente. Decaparon una puerta antigua en menos de una semana. La madera quedó hermosa y conservaron todos los detalles originales.',
    projectType: 'Puerta Antigua',
    verified: true,
  },
  {
    id: 5,
    name: 'Sofía Martínez Pérez',
    location: 'Bétera, Valencia',
    rating: 5,
    date: 'Junio 2024',
    text: 'Mi armario lacado en blanco estaba muy deteriorado. Gracias a Manos Decapa quedó perfecto. ¡Un trabajo de calidad insuperable!',
    projectType: 'Armario Lacado',
    verified: true,
  },
  {
    id: 6,
    name: 'Antonio Ferrer',
    location: 'Requena, Valencia',
    rating: 5,
    date: 'Mayo 2024',
    text: 'Contratación sencilla, presupuesto justo y trabajo excepcional. Decaparon varios muebles de mi casa. Todos quedaron perfectos.',
    projectType: 'Múltiples Muebles',
    verified: true,
  },
  {
    id: 7,
    name: 'Isabel Gómez Ruiz',
    location: 'Buñol, Valencia',
    rating: 5,
    date: 'Abril 2024',
    text: 'El servicio fue rápido y el resultado superó mis expectativas. Mi mesa de comedor brilla como el primer día. ¡Gracias por todo!',
    projectType: 'Mesa de Comedor',
    verified: true,
  },
  {
    id: 8,
    name: 'Miguel Carrasco',
    location: 'Godelleta, Valencia',
    rating: 5,
    date: 'Marzo 2024',
    text: 'Espectacular. Decaparon una puerta de roble que parecía irrecuperable. Ahora es una joya. Profesionales de verdad.',
    projectType: 'Puerta de Roble',
    verified: true,
  },
  {
    id: 9,
    name: 'Rosario Díaz López',
    location: 'Bétera, Valencia',
    rating: 5,
    date: 'Febrero 2024',
    text: 'Contraté a Manos Decapa para restaurar 4 sillas de mi comedor. El trabajo fue impecable y el precio muy competitivo.',
    projectType: '4 Sillas Restauradas',
    verified: true,
  },
  {
    id: 10,
    name: 'Francisco Nuevo',
    location: 'Liria, Valencia',
    rating: 5,
    date: 'Enero 2024',
    text: 'Servicio profesional de principio a fin. Mi cómoda antigua ahora luce como nueva. Recomiendo ampliamente a cualquier persona.',
    projectType: 'Cómoda Restaurada',
    verified: true,
  },
  {
    id: 11,
    name: 'Lourdes Martínez',
    location: 'Valencia, España',
    rating: 5,
    date: 'Diciembre 2023',
    text: 'Excelente trabajo. Decaparon mi tocador antiguo con cuidado especial. Preservaron todos los detalles ornamentales. ¡Perfectos!',
    projectType: 'Tocador Antiguo',
    verified: true,
  },
  {
    id: 12,
    name: 'Enrique López García',
    location: 'Riba-roja, Valencia',
    rating: 5,
    date: 'Noviembre 2023',
    text: 'Profesionales muy atentos y cuidadosos. Mi escritorio de madera maciza quedó impecable. Sin duda volveré a contratar.',
    projectType: 'Escritorio de Madera',
    verified: true,
  },
  {
    id: 13,
    name: 'Montserrat Vila',
    location: 'Puçol, Valencia',
    rating: 5,
    date: 'Octubre 2023',
    text: 'Rápido, eficiente y con resultados excepcionales. Mis sillas de cocina quedaron como nuevas. ¡Recomendado 100%!',
    projectType: 'Sillas de Cocina',
    verified: true,
  },
  {
    id: 14,
    name: 'Gerardo Martínez',
    location: 'Bétera, Valencia',
    rating: 5,
    date: 'Septiembre 2023',
    text: 'Trabajo impecable. Decaparon una mesa de roble macizo que parecía irremediable. Ahora es una pieza hermosa.',
    projectType: 'Mesa de Roble',
    verified: true,
  },
  {
    id: 15,
    name: 'Amparo Ruiz',
    location: 'Torrent, Valencia',
    rating: 5,
    date: 'Agosto 2023',
    text: 'Servicio destacado. El equipo fue atento, puntual y dejó todo impecable. Mi armario antiguo brilla como nunca.',
    projectType: 'Armario Antiguo',
    verified: true,
  },
];

const stats = [
  { label: 'Clientes Satisfechos', value: '100%' },
  { label: 'Reseñas 5 Estrellas', value: '15/15' },
  { label: 'Tiempo Promedio', value: '3-5 días' },
  { label: 'Tasa de Recomendación', value: '98%' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-accent text-accent' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (index % 3) * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            {testimonial.verified && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Verificado
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
          <StarRating rating={testimonial.rating} />
        </div>
        <Quote className="w-5 h-5 text-accent/30 flex-shrink-0" />
      </div>

      <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.text}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
          {testimonial.projectType}
        </span>
        <span className="text-xs text-gray-400">{testimonial.date}</span>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<'all' | 'recent'>('all');

  const displayedTestimonials = filter === 'recent' ? testimonials.slice(0, 6) : testimonials;
  const avgRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);
  const totalReviews = testimonials.length;

  return (
    <>
      <TestimonialsPageSchema testimonials={testimonials} averageRating={parseFloat(avgRating)} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
                Testimonios de Nuestros Clientes
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Miles de personas han confiado en Manos Decapa para restaurar sus muebles. Conoce sus historias de transformación.
              </p>
            </motion.div>

            {/* Rating Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-sm border border-accent/20 mb-12"
            >
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-accent">{avgRating}</span>
                    <span className="text-gray-500">de 5</span>
                  </div>
                  <StarRating rating={Math.round(parseFloat(avgRating))} />
                  <p className="text-sm text-gray-500 mt-2">{totalReviews} reseñas verificadas</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos ({testimonials.length})
              </button>
              <button
                onClick={() => setFilter('recent')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === 'recent'
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Recientes (6)
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </motion.div>

            {/* Load More / View All */}
            {filter === 'recent' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button
                  onClick={() => setFilter('all')}
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Ver Todos los Testimonios ({testimonials.length})
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Testimonial Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">
              ¿Por Qué Nos Eligen?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="text-3xl text-accent flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold mb-2">Garantía de Calidad</h3>
                  <p className="text-gray-600">
                    Todos nuestros trabajos cuentan con garantía y supervisión continua de calidad.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="text-3xl text-accent flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold mb-2">Profesionales Certificados</h3>
                  <p className="text-gray-600">
                    Equipo con 10+ años de experiencia en decapado y restauración.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="text-3xl text-accent flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold mb-2">Transformación Garantizada</h3>
                  <p className="text-gray-600">
                    Devolvemos vida a tus muebles con técnicas especializadas y cuidadosas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="text-3xl text-accent flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold mb-2">Presupuestos Sin Compromiso</h3>
                  <p className="text-gray-600">
                    Contáctanos para obtener un presupuesto gratuito y sin obligación de compra.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                ¿Listo para Transformar Tus Muebles?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Únete a miles de clientes satisfechos. Solicita tu presupuesto gratuito hoy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/#contact">Solicitar Presupuesto</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/proyectos">Ver Nuestros Proyectos</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTopButton />
      </div>
    </>
  );
}
