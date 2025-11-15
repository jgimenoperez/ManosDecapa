import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'accent' | 'dark';
}

export function Section({ id, className, children, variant = 'default' }: SectionProps) {
  const variants = {
    default: 'bg-background',
    accent: 'bg-muted/50',
    dark: 'bg-foreground text-background'
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32 scroll-mt-16", // Espaciado consistente y mayor
        variants[variant],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// Variante para secciones con separador decorativo
export function SectionWithDivider({ id, className, children, variant = 'default' }: SectionProps) {
  return (
    <>
      <Section id={id} className={className} variant={variant}>
        {children}
      </Section>
      {/* Decorative divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </>
  );
}
