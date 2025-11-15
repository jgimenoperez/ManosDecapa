import { footer } from '../utils/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/20">
          {/* Company Info */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">Manos Decapa</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Servicio profesional de decapado de muebles en Valencia. Con más de 10 años de experiencia, devolvemos la vida a tus piezas antiguas respetando su esencia original.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in">
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in">
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              {footer.phone && (
                <div className="flex gap-3">
                  <span className="text-accent">📱</span>
                  <a
                    href={`tel:${footer.phone}`}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {footer.phone}
                  </a>
                </div>
              )}
              {footer.email && (
                <div className="flex gap-3">
                  <span className="text-accent">✉️</span>
                  <a
                    href={`mailto:${footer.email}`}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {footer.email}
                  </a>
                </div>
              )}
              {footer.address && (
                <div className="flex gap-3">
                  <span className="text-accent">📍</span>
                  <p className="text-white/80">{footer.address}</p>
                </div>
              )}
              {footer.city && (
                <p className="text-white/80 text-sm">
                  {footer.city}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm gap-4">
          <p>
            &copy; {currentYear} Manos Decapa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${(footer.whatsapp || '34600000000').replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40"
          aria-label="Chat with us on WhatsApp"
          title="Contacto por WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>
    </footer>
  )
}
