export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Sobre Nosotros
          </h2>

          <div className="bg-background rounded-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Manos Decapa</strong> nace de la experiencia de <strong>Manos de Hada</strong>, taller de restauración con más de 10 años devolviendo la vida a muebles antiguos en Valencia.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ahora ofrecemos nuestro servicio especializado de decapado para quienes necesitan recuperar la madera original sin restauración completa. Nos apasiona dar nueva vida a tus piezas respetando su esencia original.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Con un proceso profesional, tecnología avanzada y más de dos décadas de experiencia, garantizamos resultados excepcionales en cada proyecto.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
              <p className="text-gray-800 font-semibold mb-2">
                ¿Necesitas restauración integral?
              </p>
              <a
                href="https://www.manosdehada.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:text-secondary font-bold transition-colors group"
              >
                Visita Manos de Hada
                <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center fade-in">
              <div className="text-5xl font-bold text-secondary mb-2">20+</div>
              <p className="text-gray-700">Años de Experiencia</p>
            </div>
            <div className="text-center fade-in">
              <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-gray-700">Muebles Restaurados</p>
            </div>
            <div className="text-center fade-in">
              <div className="text-5xl font-bold text-secondary mb-2">100%</div>
              <p className="text-gray-700">Satisfacción Garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
