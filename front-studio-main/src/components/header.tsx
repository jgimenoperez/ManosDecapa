'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/ubicacion', label: 'Ubicación' },
  { href: '/#gallery', label: 'Galería' },
  { href: '/#pricing', label: 'Precios' },
  { href: '/#about', label: 'Sobre Nosotros' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);

      // Detectar sección activa
      const scrollPosition = window.scrollY + 100;

      // Si estamos en el top, marcar como home
      if (scrollPosition < 100) {
        setActiveSection('');
        return;
      }

      // Buscar en los navLinks qué sección está activa
      for (const link of navLinks) {
        const sectionId = link.href.replace('/#', '').replace('/', '');
        if (sectionId === '' || sectionId === 'services' || sectionId === 'process' || sectionId === 'gallery' || sectionId === 'pricing' || sectionId === 'about') {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar clics en navegación móvil
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      hasScrolled
        ? "border-border/80 bg-background/95 backdrop-blur-lg shadow-md"
        : "border-border/40 bg-background/60 backdrop-blur-sm"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo className="h-full" />

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('/#', '').replace('/', '');
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-200 relative",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/#contact">Solicitar Presupuesto</Link>
          </Button>
        </div>

        {/* Menú Móvil */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </div>

      {/* Panel Móvil Desplegable */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t bg-background/95 backdrop-blur-sm"
        >
          <nav className="flex flex-col py-4 px-4 space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '').replace('/', '');
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={cn(
                    "block px-4 py-3 rounded-md transition-all duration-200 font-medium text-sm",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t mt-4">
              <Button
                asChild
                size="sm"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/#contact" onClick={handleNavClick}>
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
