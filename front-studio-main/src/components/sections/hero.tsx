'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, CheckCircle, Truck, ChevronDown, Sparkles, Shield, Clock, Zap, Wrench, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      {heroImage && (
        <>
          <div className="absolute inset-0 scale-105">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Gradient overlay más sutil y direccional */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Lado izquierdo - Contenido principal */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge de experiencia */}
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30 w-fit"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">+10 años de experiencia</span>
          </motion.div>

          {/* Título optimizado para SEO local */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-headline leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Decapado Profesional
            <span className="block text-accent mt-2">de Muebles en Valencia</span>
          </motion.h1>

          {/* Subtítulo optimizado con keywords y propuesta de valor */}
          <motion.p
            className="text-xl md:text-2xl max-w-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Recuperamos la madera original de tus muebles antiguos en <span className="font-semibold text-white">Puçol, Valencia</span>.
            <span className="block mt-2 text-accent font-semibold">Sin químicos agresivos • +10 años de experiencia</span>
          </motion.p>

          {/* CTAs con jerarquía clara */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all">
                <Link href="#contact" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Presupuesto Gratuito
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="border-2 border-white bg-white/95 text-foreground hover:bg-white hover:shadow-xl transition-all duration-300 font-semibold">
                <Link href="#gallery">Ver Transformaciones</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social proof en hero */}
          <motion.div
            className="flex flex-col gap-3 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Recogida y entrega en Valencia <span className="text-xs text-white/70">(según medidas y pesos)</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Garantía de calidad</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Lado derecho - Elemento visual de confianza */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 shadow-2xl">
            <CardContent className="space-y-6 p-0">
              <h3 className="text-2xl font-headline font-bold text-white">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                {[
                  { icon: Wrench, text: "Proceso seguro sin químicos agresivos" },
                  { icon: Zap, text: "Entrega rápida garantizada" },
                  { icon: Award, text: "Avalados por Manos de Hada" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  >
                    <item.icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-white text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
