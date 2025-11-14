import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, CheckCircle, Truck, ChevronDown, Sparkles, Shield, Clock } from 'lucide-react';

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
        <div className="space-y-6">
          {/* Badge de experiencia */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30 w-fit">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">+20 años de experiencia</span>
          </div>

          {/* Título más corto y potente */}
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            Devolvemos la
            <span className="block text-accent mt-2">Vida a la Madera</span>
          </h1>

          {/* Subtítulo más enfocado en beneficios */}
          <p className="text-xl md:text-2xl max-w-xl text-gray-200">
            Decapado profesional que recupera la belleza natural de tus muebles antiguos.
            <span className="block mt-2 text-accent font-semibold">Sin dañar la madera original.</span>
          </p>

          {/* CTAs con jerarquía clara */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Link href="#contact" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Presupuesto Gratuito
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
              <Link href="#gallery">Ver Transformaciones</Link>
            </Button>
          </div>

          {/* Social proof en hero */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Recogida y entrega en Valencia</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Garantía de calidad</span>
            </div>
          </div>
        </div>

        {/* Lado derecho - Elemento visual de confianza */}
        <div className="hidden lg:block">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 shadow-2xl">
            <CardContent className="space-y-6 p-0">
              <h3 className="text-2xl font-headline font-bold text-white">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Proceso seguro sin químicos agresivos" },
                  { icon: Clock, text: "Entrega rápida garantizada" },
                  { icon: Award, text: "Avalados por Manos de Hada" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-white text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
