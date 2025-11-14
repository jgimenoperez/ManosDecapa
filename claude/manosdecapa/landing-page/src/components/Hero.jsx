import Button from './common/Button'
import ImageWithFallback from './common/ImageWithFallback'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center text-white relative overflow-hidden py-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://via.placeholder.com/1920x1080?text=Mueble+Decapado"
          alt="Mueble decapado profesionalmente"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Manos Decapa
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-accent">
              Decapado Profesional de Muebles en Valencia
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Recuperamos la madera original de tus muebles y piezas antiguas. Nuestro servicio profesional está disponible para particulares y profesionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                className="text-white hover:bg-accent"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Conoce Nuestro Trabajo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>20+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Proceso profesional garantizado</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <ImageWithFallback
              src="https://via.placeholder.com/500x400?text=Mueble+Antes+y+Después"
              alt="Ejemplo de mueble decapado - antes y después"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl hover-lift"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
