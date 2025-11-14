import { whyChooseUs } from '../utils/constants'
import Card from './common/Card'

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    const icons = {
      'award': '🏆',
      'gear': '⚙️',
      'shield': '🛡️'
    }
    return icons[iconName] || '✨'
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Por Qué Elegirnos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 20 años de experiencia en restauración de muebles antiguos
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {whyChooseUs.map((item, index) => (
            <Card
              key={item.id}
              className="hover-lift h-full fade-in border-2 border-transparent hover:border-accent transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{getIcon(item.icon)}</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center fade-in mt-12">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Avalados por Manos de Hada
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Nacemos de la experiencia de Manos de Hada, taller especializado con más de 20 años devolviendo la vida a muebles antiguos en Valencia.
          </p>
          <p className="text-gray-600">
            Ahora ofrecemos nuestro servicio especializado de decapado para quienes necesitan recuperar la madera original sin restauración completa.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-primary font-semibold mb-2">
              ¿Necesitas restauración integral?
            </p>
            <a
              href="https://www.manosdehada.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondary font-bold text-lg transition-colors"
            >
              Visita Manos de Hada →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
