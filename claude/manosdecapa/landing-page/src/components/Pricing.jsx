import { pricingTiers } from '../utils/constants'
import Card from './common/Card'
import Button from './common/Button'

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Precios competitivos y transparentes para servicios de decapado profesional
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.id}
              className={`fade-in hover-lift transition-all ${
                index === 1 ? 'ring-2 ring-accent scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Featured Badge */}
                {index === 1 && (
                  <div className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                    MÁS POPULAR
                  </div>
                )}

                {/* Furniture Type */}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-secondary">
                    {tier.price}€
                  </span>
                  <span className="text-gray-500 block mt-2">
                    por unidad
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700 text-sm">Decapado profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700 text-sm">Proceso químico seguro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700 text-sm">Acabado profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700 text-sm">Garantía de satisfacción</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button
                  variant={index === 1 ? 'secondary' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {index === 1 ? 'Solicitar Ahora' : 'Más Información'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-background rounded-lg p-8 md:p-12 fade-in mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Preguntas sobre Precios
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-3">¿Incluye recogida y entrega?</h4>
              <p className="text-gray-700">
                Los precios mostrados son para servicio de decapado. Consulta con nosotros sobre opciones de recogida y entrega a domicilio con coste adicional.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">¿Hay descuentos por volumen?</h4>
              <p className="text-gray-700">
                Sí, ofrecemos precios especiales para profesionales y volúmenes grandes. Contacta con nosotros para presupuestos personalizados.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">¿Cuál es el tiempo de entrega?</h4>
              <p className="text-gray-700">
                Típicamente 2-3 semanas desde la recogida. Los plazos pueden variar según la carga de trabajo. Consulta fechas específicas en tu presupuesto.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">¿Qué métodos de pago aceptan?</h4>
              <p className="text-gray-700">
                Aceptamos transferencia bancaria, PayPal y efectivo. Se requiere depósito del 50% al confirmar el trabajo.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-in">
          <p className="text-lg text-gray-700 mb-6">
            ¿Tienes un mueble que necesita decapado? Solicita tu presupuesto sin compromiso
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-secondary text-white font-bold rounded-lg transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}
