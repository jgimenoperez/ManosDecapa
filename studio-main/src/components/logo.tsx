import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#home"
      className={cn(
        'text-2xl md:text-3xl font-bold font-headline text-primary tracking-tight',
        className
      )}
    >
      Manos Decapa
    </Link>
  );
}
