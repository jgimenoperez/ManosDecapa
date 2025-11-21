'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'footer';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const isFooter = variant === 'footer';

  if (isFooter) {
    // Footer: Logo vertical con texto debajo
    return (
      <Link
        href="#home"
        className={cn(
          'flex flex-col items-center justify-center transition-all duration-300 group',
          className
        )}
      >
        {/* Logo Container */}
        <div className={cn(
          'relative transition-all duration-300 flex items-center justify-center rounded-full',
          'group-hover:scale-105',
          'bg-background/10 rounded-full p-3 group-hover:bg-background/20 group-hover:shadow-lg'
        )}>
          {/* Circle Background with Text */}
          <div className={cn(
            'absolute inset-0 rounded-full flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
            'bg-accent/20'
          )} />

          <Image
            src="/images/tocon.png"
            alt="Manos Decapa logo"
            width={56}
            height={56}
            className={cn(
              'transition-all duration-300 relative z-10',
              'w-12 h-12 sm:w-14 sm:h-14 brightness-150 contrast-125'
            )}
            priority
          />
        </div>

        {/* Text Below Logo */}
        <span
          className={cn(
            'font-light leading-tight tracking-wide transition-all duration-300 mt-2',
            'text-base sm:text-lg lg:text-xl',
            'opacity-100 group-hover:opacity-100',
            'text-background',
            'group-hover:text-accent'
          )}
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          Manos Decapa
        </span>
      </Link>
    );
  }

  // Navbar: Logo horizontal con texto a la derecha
  return (
    <Link
      href="#home"
      className={cn(
        'flex items-center justify-center transition-all duration-300 group gap-2',
        className
      )}
    >
      {/* Logo Container */}
      <div className={cn(
        'relative transition-all duration-300 flex items-center justify-center rounded-full',
        'group-hover:scale-105',
        'bg-background/5 group-hover:bg-accent/15 p-2 sm:p-2.5'
      )}>
        {/* Circle Background */}
        <div className={cn(
          'absolute inset-0 rounded-full flex items-center justify-center',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          'bg-accent/15'
        )} />

        <Image
          src="/images/tocon.png"
          alt="Manos Decapa logo"
          width={56}
          height={56}
          className={cn(
            'transition-all duration-300 relative z-10',
            'w-10 h-10 sm:w-12 sm:h-12'
          )}
          priority
        />
      </div>

      {/* Text to the right of logo */}
      <span
        className={cn(
          'font-light leading-tight tracking-wide transition-all duration-300',
          'text-lg sm:text-xl lg:text-2xl',
          'opacity-100 group-hover:opacity-100',
          'text-primary',
          'group-hover:text-accent',
          'hidden sm:inline'
        )}
        style={{ fontFamily: 'var(--font-great-vibes)' }}
      >
        Manos Decapa
      </span>
    </Link>
  );
}
