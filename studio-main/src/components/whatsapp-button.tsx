import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg z-50"
      aria-label="Contactar por WhatsApp"
    >
      <a href="https://wa.me/34000000000" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-8 w-8" />
      </a>
    </Button>
  );
}
