import { processSteps } from '../utils/constants'

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Te mostramos paso a paso cómo trabajamos para recuperar tus muebles
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="fade-in mb-12 md:mb-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Item */}
              <div className="flex gap-8 mb-12">
                {/* Left side - Step number and icon */}
                <div className="flex flex-col items-center md:w-24">
                  <div className="relative z-10 mb-4">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg hover-lift">
                      {index + 1}
                    </div>
                  </div>

                  {/* Connector line (not on last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-24 bg-accent/30 md:h-32"></div>
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-1 pb-12 md:pb-0">
                  <div className="bg-white rounded-lg p-8 shadow-lg hover-lift transition-all">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details if available */}
                    {step.details && (
                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-accent font-bold">→</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Duration if available */}
                    {step.duration && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>Duración estimada:</strong> {step.duration}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 fade-in">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover-lift">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Proceso Profesional
            </h3>
            <p className="text-gray-700">
              Usamos técnicas químicas seguras y probadas para obtener los mejores resultados
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover-lift">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Protección Garantizada
            </h3>
            <p className="text-gray-700">
              Tus muebles están asegurados y bajo cuidado profesional en todo momento
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover-lift">
            <div className="text-5xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Tiempos Respetados
            </h3>
            <p className="text-gray-700">
              Entregamos en los plazos acordados con la máxima calidad garantizada
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 fade-in">
          <h3 className="text-3xl font-bold text-primary mb-6">
            ¿Listo para comenzar?
          </h3>
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
