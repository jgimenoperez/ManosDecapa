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
    id: 20220012,
    name: 'Aida Garrido',
    location: 'Valencia, España',
    rating: 5,
    date: 'En la última semana',
    text: 'Hacen maravillas!!! De unos muebles que tenia pensado tirar los convierten en los más bonitos ! Mucha profesionalidad y sobre todo buenísima atención ! Los recomiendo al 100%!!! Encantada con mis muebles restaurados !!!',
    projectType: 'Restauración de Muebles',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucopCK0LzjuiAP4M0rVt18ZWPZuVHL71ovcAd6YM=s128-c0x00000000-cc-rp-mo',
  },
  {
    id: 20220001,
    name: 'Susana Gimenez',
    location: 'Valencia, España',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'Fiona muy amable, atenta y profesional. Tenía dudas sobre el estilo que quería dar al mueble y en todo momento me aconsejó y me propuso ideas. Un trabajo muy cuidado. Calidad precio, excelente!! Recomiendo 100%',
    projectType: 'Restauración Personalizada',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a/AItbvmkrargNLc9FHLfgToxEJrzgVHPxEPiVLKYlg3DC=s128-c0x00000000-cc-rp-mo',
  },
  {
    id: 20220002,
    name: 'MEGS',
    location: 'Puçol, Valencia',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'Manos de Hada es un taller de Restauración situado en la población de Puçol (Valencia).Fiona, es la dueña del Taller que junto a su marido,hacen muy fácil... convertir piezas antiguas en auténticas joyas.Creatividad y buen gusto por parte de la Restauradora.Siempre sabe darle, ese toque profesional y de calidad.Es la mejor opción para recuperar y modernizar tus muebles.También se pueden realizar Cursos de Restauración los sábados.',
    projectType: 'Restauración Profesional',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucrlZBSxHpksdn0oGwN5wPu2PEh9wGGNezrbdxPjZOE=s128-c0x00000000-cc-rp-mo-ba5',
  },
  {
    id: 20220003,
    name: 'Fernando Palacios Puyalon',
    location: 'Valencia, España',
    rating: 5,
    date: 'En la última semana',
    text: 'Muy recomendable, excelente profesional, trato exquisito tanto con las personas, cómo con los muebles precios competitivos 😊',
    projectType: 'Decapado Profesional',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a/AItbvmlvFKUd7ZGyBpDvGNHmpiyDVJAbT9MASoFIJJYJ=s128-c0x00000000-cc-rp-mo',
  },
  {
    id: 20220004,
    name: 'Esther Mora',
    location: 'Valencia, España',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Fiona, gran persona y gran profesional. Decidi datle un aire nuevo a mi comedor y ahi estaba ella. Aconsejandome y escuchando mi romance con toda la paciencia del mundo. Lo q yo queria no podia ser y ella me propuso otra solucion la cual acepte. Precioso todo. El colir acertadisimo, sus cnsejos maravilosos. Mi comedor parece otro. Encantadisima. Tengo mas proyectos en mente. Fi sera mi primera y unica opcion. Simpatica, trabajadora, rapida, limpia, moderna, imaginativa.... la recomiendo 100x100. De hecho alguna d mis amigas la va a llamar en breve. Y le encantaron mis perros. Q mas se ouede pedir??? Precio correcto....',
    projectType: 'Muebles para Comedor',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucpV1VY4mUxYqDSfOfRGr5Eb65iNzghBixYgyfOT=s128-c0x00000000-cc-rp-mo',
  },
  {
    id: 20220005,
    name: 'Jose Antonio Porcar Jove',
    location: 'Valencia, España',
    rating: 4,
    date: 'Hace un año',
    text: 'Muy amables. Buena relación calidad precio.',
    projectType: 'Restauración General',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucr52FjKFYveyQPmSQZ9ohMaFQIE-E0NX-vLz6a-Mw=w60-h60-p-rp-mo-ba5-br100',
  },
  {
    id: 20220006,
    name: 'N Alex',
    location: 'Valencia, España',
    rating: 5,
    date: 'Diciembre 2020',
    text: 'Me encanta los artículos que tiene. He comprado varias cosas, incluida una mesilla de noche antigua restaurada, y todas chulisimas. La atención excelente y también la creatividad y el gusto. Todo un descubrimiento.',
    projectType: 'Mesilla de Noche',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a/AItbvmmonNe2oZfBP6zvZBPadWZO5KbXwLSCvkMrOJdv=w60-h60-p-rp-mo-br100',
  },
  {
    id: 20220007,
    name: 'Andrea C. (Andie)',
    location: 'Valencia, España',
    rating: 5,
    date: 'Junio 2020',
    text: 'Nos mudamos a casa de los abuelos y después de la reforma nos sabía mal tirar los muebles viejos que habían pero tampoco quedaban bien con lo que ya teníamos. Así que por recomendación de una amiga me puse en sus manos y al final recuperamos más muebles de los que pensábamos! no solo son unos artistas sino que además te aconsejan que puede quedar mejor y que no vale la pena. También me han hecho un perchero a conjunto con un mueble de zapatos (restaurado por ellos) y hasta una cajita de infusiones personalizada! Un 10!',
    projectType: 'Múltiples Piezas',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucqDigWN2yhIYXqgg0WERH90R-3gTT6AcPk0QYjQ0U8=w60-h60-p-rp-mo-ba2-br100',
  },
  {
    id: 20220008,
    name: 'Marla Hernández',
    location: 'Valencia, España',
    rating: 5,
    date: 'Junio 2020',
    text: 'Fiona me ha restaurado varios muebles y le he encargado otros a medida, siempre muy profesional, trabajo muy cuidado y con mucho mimo. La recomiendo 100%',
    projectType: 'Restauración a Medida',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucoEY6fIAS8xnmFeUf2Cuo2CuwRcBYkLVxIfbQkVikA=w60-h60-p-rp-mo-ba3-br100',
  },
  {
    id: 20220009,
    name: 'Beatriz Bazataqui',
    location: 'Valencia, España',
    rating: 5,
    date: 'En la última semana',
    text: 'Fiona es una excelente profesora y profesional.Llevo con ella un año y desde el primer momento pude apreciar que le encanta su trabajo, transmitiendo sus conocimientos en restauración de muebles,que no son pocos. Minuciosa y rigurosa con cada detalle en el proceso de restauración de cada mueble que tocan sus manos. Si quieres aprender rigurosamente el arte de la restauración o si tienes un mueble que recuperar o restaurar,sin duda alguna, recomiendo totalmente a Fiona y al gran equipo de Manos de Hada.',
    projectType: 'Cursos y Restauración',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a/AItbvmk1m4AJe9ICipPXqaCwQPIsPSJRNgAeSVKxnIw4=s128-c0x00000000-cc-rp-mo',
  },
  {
    id: 20220010,
    name: 'Mariajose Fraga Agues',
    location: 'Valencia, España',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'Excelente trabajo en restauración de muebles antiguos. Profesionalidad y calidad garantizadas.',
    projectType: 'Muebles Antiguos',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a-/AFdZucpGJpQM3j03qUqV5MLOa9sWFORYD-cHVQEVPQC8sBE=w60-h60-p-rp-mo-ba4-br100',
  },
  {
    id: 20220011,
    name: 'Jaime',
    location: 'Valencia, España',
    rating: 5,
    date: 'En la última semana',
    text: 'Le lleve a restaurar un butacon y estoy muy satisfecho con el trabajo realizado, ha sabido captar lo que quería y el resultado supero las espectativas.\nUn trato muy amable. Recomendable al 100%.',
    projectType: 'Butacón Restaurado',
    verified: true,
    image: 'https://lh3.googleusercontent.com/a/AItbvmmT_gd6w_L6B8L56KNwUX_y7tAHtIifN_qeAhy7=s128-c0x00000000-cc-rp-mo',
  },
];

const stats = [
  { label: 'Clientes Satisfechos', value: '100%' },
  { label: 'Reseñas 5 Estrellas', value: '11/12' },
  { label: 'Tiempo Promedio', value: '3-5 días' },
  { label: 'Tasa de Recomendación', value: '99%' },
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
                  <a
                    href="https://www.google.com/search?sca_esv=7d1a3a81f8f84a2e&hl=es-ES&gl=es&sxsrf=AE3TifPVDyP0EnnkXQpGmjzifTD1EfCKCg:1764231495862&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyG_SUrSBOV5sWBnsZBRl6vQHHOP5l24Guh_pvJ1Qs_vfSIAFaRMRqm_NUiVXPmaPhfTn91eQfCMxlynZEwbdjE1sz-h&q=Manos+de+hada+Rese%C3%B1as&sa=X&ved=2ahUKEwi_5vK88pGRAxVXWEEAHdIqOkoQ0bkNegQIJxAE&biw=1912&bih=954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Ver reseñas en Google
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
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
                Solicita tu presupuesto gratuito hoy.
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
                  className="bg-white text-primary hover:bg-gray-100 font-semibold"
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
