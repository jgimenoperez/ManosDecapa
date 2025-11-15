'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#home"
      className={cn(
        'text-primary flex items-center h-full transition-all duration-300 hover:opacity-80 px-2',
        'text-[28px] sm:text-[32px] lg:text-[42px]',
        'font-light leading-none tracking-wide',
        className
      )}
      style={{ fontFamily: 'Great Vibes' }}
    >
      Manos Decapa
    </Link>
  );
}
