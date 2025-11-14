import Card from './common/Card'

export default function ForWhom() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ¿Para Quién?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios adaptados tanto para particulares como para profesionales
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Particulares */}
          <Card className="hover-lift fade-in border-2 border-transparent hover:border-accent transition-all">
            <div className="text-6xl mb-6 text-center">👤</div>
            <h3 className="text-3xl font-bold text-primary mb-4 text-center">
              Para Particulares
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si tienes un mueble antiguo o de valor sentimental que deseas recuperar, nosotros nos encargamos del decapado profesional para devolverle su aspecto original.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span className="text-gray-700">Presupuesto sin compromiso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span className="text-gray-700">Recogida y entrega a domicilio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span className="text-gray-700">Trato personalizado y cuidado del mueble</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span className="text-gray-700">Garantía de satisfacción</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              Perfecto para recuperar tus piezas favoritas de la manera profesional.
            </p>
          </Card>

          {/* Profesionales */}
          <Card className="hover-lift fade-in border-2 border-transparent hover:border-secondary transition-all">
            <div className="text-6xl mb-6 text-center">🏢</div>
            <h3 className="text-3xl font-bold text-secondary mb-4 text-center">
              Para Profesionales
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si eres restaurador, decorador, anticuario o tienda de muebles, ofrecemos soluciones de decapado a medida con precios especiales para volumen.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Precios especiales para volumen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Plazos de entrega flexibles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Transporte a través de nuestros asociados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Seguimiento de proyectos personalizados</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              Somos tu aliado para ofrecer servicios de decapado de calidad a tus clientes.
            </p>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-gray-700 mb-6">
            ¿Eres profesional? Contacta con nosotros para conocer nuestras ofertas especiales
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-secondary text-white font-bold rounded-lg transition-colors"
          >
            Solicitar Presupuesto Profesional
          </a>
        </div>
      </div>
    </section>
  )
}
