import { Logo } from './logo';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Logo variant="footer" className="text-accent" />
            <p>Servicio de decapado profesional en Valencia. Devolvemos la vida a la madera.</p>
            <div className="flex space-x-4 mt-4">
              <Button asChild variant="outline" size="icon" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <a href="https://www.instagram.com/manosdhada/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <a href="https://www.facebook.com/manosdehadarestaura/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold text-background">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-accent" /> <span>+34 654 49 69 60</span></li>
              <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-accent" /> <span>fiona@manosdehada.es</span></li>
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-accent" /> <span>Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia</span></li>
            </ul>
             <div className="pt-4">
                <h4 className='font-bold text-background'>Restauración completa:</h4>
                <a href="https://www.manosdehada.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.manosdehada.es</a>
             </div>
          </div>
          <div className="overflow-hidden rounded-lg">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.477447297713!2d-0.312239823628126!3d39.616452403957275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60413b1ee496e9%3A0xa818d88b0054f79f!2sManos%20de%20hada!5e0!3m2!1ses!2ses!4v1763105725777!5m2!1ses!2ses" width="100%" height="250" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="mt-12 py-6 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm mb-6 flex-wrap">
            <Link href="/aviso-legal" className="text-accent hover:underline">
              Aviso Legal
            </Link>
            <span className="hidden sm:inline text-background/40">•</span>
            <Link href="/politica-privacidad" className="text-accent hover:underline">
              Política de Privacidad
            </Link>
            <span className="hidden sm:inline text-background/40">•</span>
            <Link href="/politica-cookies" className="text-accent hover:underline">
              Política de Cookies
            </Link>
            <span className="hidden sm:inline text-background/40">•</span>
            <Link href="/#contact" className="text-accent hover:underline">
              Contacto
            </Link>
            <span className="hidden sm:inline text-background/40">•</span>
            <a href="https://www.manosdehada.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Restauración Completa
            </a>
          </div>
          <div className="text-center text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Manos Decapa. Todos los derechos reservados.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-background/20 flex flex-col items-center justify-center gap-2">
            <p className="text-background/60 text-xs">Desarrollado por</p>
            <a href="https://naranjait.es/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://naranjait.es/images/naranja-it-logo-v5.svg" alt="Naranaja IT" className="h-6 w-auto" />
              <span className="text-accent hover:underline text-sm font-medium">Naranaja IT</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
