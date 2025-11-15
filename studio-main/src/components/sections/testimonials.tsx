'use client';

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
    name: "María González",
    role: "Particular",
    avatar: "MG",
    rating: 5,
    text: "Llevé una cómoda heredada de mi abuela que tenía varias capas de pintura. El resultado fue increíble, la madera quedó perfecta y sin ningún daño. Totalmente recomendable.",
    date: "Hace 2 semanas"
  },
  {
    name: "Carlos Martínez",
    role: "Carpintería Martínez",
    avatar: "CM",
    rating: 5,
    text: "Trabajo con ellos regularmente para mis proyectos de restauración. Son profesionales, rápidos y los resultados siempre son impecables. El servicio para profesionales es excelente.",
    date: "Hace 1 mes"
  },
  {
    name: "Ana Rodríguez",
    role: "Particular",
    avatar: "AR",
    rating: 5,
    text: "Compré unas puertas antiguas en un mercadillo y no sabía cómo quitarles toda la pintura. Me recomendaron Manos Decapa y acerté. Precio justo y trabajo impecable.",
    date: "Hace 3 semanas"
  },
  {
    name: "Restauraciones Vintage",
    role: "Anticuario",
    avatar: "RV",
    rating: 5,
    text: "Llevamos años trabajando con ellos. Su método de decapado sin químicos es el mejor que hemos probado, respeta la madera y los acabados son siempre perfectos.",
    date: "Hace 2 meses"
  }
];

const trustIndicators = [
  { number: "500+", label: "Piezas restauradas" },
  { number: "20+", label: "Años de experiencia" },
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
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
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
