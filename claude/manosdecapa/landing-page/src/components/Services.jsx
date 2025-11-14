import { services } from '../utils/constants'
import Card from './common/Card'

export default function Services() {
  const getIcon = (iconName) => {
    const icons = {
      'wood-grain': '🪵',
      'door': '🚪',
      'metal': '🔗'
    }
    return icons[iconName] || '✨'
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios profesionales de decapado para todo tipo de muebles y materiales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="hover-lift h-full fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{getIcon(service.icon)}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in">
          <p className="text-lg text-gray-700 mb-6">
            ¿Tienes un mueble que necesita decapado? Contacta con nosotros para un presupuesto sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
