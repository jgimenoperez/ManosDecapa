import { cn } from '@/lib/utils';
import React from 'react';

// Display (Hero titles)
export function DisplayLarge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn('text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight tracking-tight', className)}>
      {children}
    </h1>
  );
}

export function DisplaySmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight tracking-tight', className)}>
      {children}
    </h2>
  );
}

// Headings
export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn('text-3xl md:text-4xl font-bold font-headline leading-tight tracking-tight', className)}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('text-2xl md:text-3xl font-bold font-headline leading-tight', className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-xl md:text-2xl font-semibold font-headline leading-tight', className)}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={cn('text-lg md:text-xl font-semibold font-headline leading-snug', className)}>
      {children}
    </h4>
  );
}

export function H5({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h5 className={cn('text-base md:text-lg font-semibold font-headline leading-snug', className)}>
      {children}
    </h5>
  );
}

// Body text
export function BodyLarge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-lg md:text-xl leading-relaxed text-foreground/90', className)}>
      {children}
    </p>
  );
}

export function BodyRegular({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-base md:text-lg leading-relaxed text-foreground/80', className)}>
      {children}
    </p>
  );
}

export function BodySmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-sm md:text-base leading-relaxed text-foreground/70', className)}>
      {children}
    </p>
  );
}

// Labels and captions
export function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <label className={cn('text-sm font-semibold uppercase tracking-wider text-foreground', className)}>
      {children}
    </label>
  );
}

export function Caption({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-xs md:text-sm text-muted-foreground leading-relaxed', className)}>
      {children}
    </p>
  );
}

// Accent text
export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('text-accent font-semibold', className)}>
      {children}
    </span>
  );
}

export function AccentHighlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('bg-accent/20 px-2 py-1 rounded text-accent font-semibold', className)}>
      {children}
    </span>
  );
}

// Quote
export function Quote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <blockquote className={cn('text-lg md:text-xl italic border-l-4 border-accent pl-4 py-2 my-6 text-foreground/80', className)}>
      {children}
    </blockquote>
  );
}

// Code
export function InlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={cn('bg-muted px-2 py-1 rounded font-mono text-sm text-foreground', className)}>
      {children}
    </code>
  );
}

// Hero subtitle
export function Subtitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-lg md:text-2xl leading-relaxed text-foreground/70 font-light', className)}>
      {children}
    </p>
  );
}

// Muted text
export function Muted({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('text-muted-foreground', className)}>
      {children}
    </span>
  );
}
