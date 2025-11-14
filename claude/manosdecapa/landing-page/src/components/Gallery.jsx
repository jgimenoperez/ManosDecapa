import { useState } from 'react'
import { portfolioItems } from '../utils/constants'
import Card from './common/Card'
import ImageWithFallback from './common/ImageWithFallback'

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  const toggleHover = (id) => {
    setHoveredId(hoveredId === id ? null : id)
  }

  const handleItemClick = (id) => {
    setSelectedId(selectedId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Galería de proyectos realizados: antes y después de nuestro servicio de decapado profesional
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="hover-lift fade-in cursor-pointer overflow-hidden"
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => toggleHover(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg bg-gray-200">
                {/* Before Image (shown by default) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredId === item.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <ImageWithFallback
                    src={item.beforeImage}
                    alt={`${item.title} - Antes`}
                    width="100%"
                    height="100%"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded">
                      ANTES
                    </span>
                  </div>
                </div>

                {/* After Image (shown on hover) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ImageWithFallback
                    src={item.afterImage}
                    alt={`${item.title} - Después`}
                    width="100%"
                    height="100%"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded">
                      DESPUÉS
                    </span>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 hover:opacity-100 transition-opacity">
                  Hover para ver después
                </div>
              </div>

              {/* Item Info */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-background text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary">
                    {item.category}
                  </span>
                  <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    {item.material}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-12 bg-white rounded-lg shadow-lg fade-in">
          <h3 className="text-3xl font-bold text-primary mb-4">
            ¿Te gustaría ver más trabajos?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contáctanos para ver nuestro portafolio completo y recibir un presupuesto sin compromiso para tu mueble
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-secondary hover:bg-primary text-white font-bold rounded-lg transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}
