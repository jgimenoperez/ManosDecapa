'use client';

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Aida Garrido",
    role: "Particular",
    avatar: "/images/avatar-aida.jpg",
    rating: 5,
    text: "Hacen maravillas!!! De unos muebles que tenia pensado tirar los convierten en los más bonitos ! Mucha profesionalidad y sobre todo buenísima atención ! Los recomiendo al 100%!!! Encantada con mis muebles restaurados !!!",
    date: "11 de agosto de 2022"
  },
  {
    name: "Susana Gimenez",
    role: "Particular",
    avatar: "/images/avatar-susana.jpg",
    rating: 5,
    text: "Fiona muy amable, atenta y profesional. Tenía dudas sobre el estilo que quería dar al mueble y en todo momento me aconsejó y me propuso ideas. Un trabajo muy cuidado. Calidad precio, excelente!! Recomiendo 100%",
    date: "23 de marzo de 2022"
  },
  {
    name: "MEGS",
    role: "Particular",
    avatar: "/images/avatar-megs.jpg",
    rating: 5,
    text: "Manos de Hada es un taller de Restauración situado en la población de Puçol (Valencia).Fiona, es la dueña del Taller que junto a su marido,hacen muy fácil... convertir piezas antiguas en auténticas joyas.Creatividad y buen gusto por parte de la Restauradora.Siempre sabe darle, ese toque profesional y de calidad.Es la mejor opción para recuperar y modernizar tus muebles.También se pueden realizar Cursos de Restauración los sábados.",
    date: "29 de marzo de 2022"
  },
  {
    name: "Fernando Palacios Puyalon",
    role: "Anticuario",
    avatar: "/images/avatar-fernando.jpg",
    rating: 5,
    text: "Muy recomendable, excelente profesional, trato exquisito tanto con las personas, cómo con los muebles precios competitivos 😊🎇🎇",
    date: "9 de julio de 2022"
  }
];

const trustIndicators = [
  { number: "500+", label: "Piezas restauradas" },
  { number: "10+", label: "Años de experiencia" },
  { number: "4.9", label: "Valoración media" },
  { number: "98%", label: "Clientes satisfechos" }
];

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Section id="testimonials">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestra mejor carta de presentación
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto mb-16"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote icon */}
                      <Quote className="w-10 h-10 text-accent/30 mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            <Star className="w-5 h-5 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-foreground/90 mb-6 flex-grow italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-primary flex items-center justify-center">
                          {testimonial.avatar ? (
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.textContent = testimonial.name.charAt(0);
                              }}
                            />
                          ) : (
                            <span className="text-white font-semibold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {trustIndicators.map((indicator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-primary font-headline">
              {indicator.number}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {indicator.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
