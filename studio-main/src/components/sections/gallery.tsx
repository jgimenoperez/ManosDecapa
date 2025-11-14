'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const galleryPairs = [
  { beforeId: 'gallery-1-before', afterId: 'gallery-1-after' },
  { beforeId: 'gallery-2-before', afterId: 'gallery-2-after' },
  { beforeId: 'gallery-3-before', afterId: 'gallery-3-after' },
  { beforeId: 'gallery-4-before', afterId: 'gallery-4-after' },
  { beforeId: 'gallery-5-before', afterId: 'gallery-5-after' },
  { beforeId: 'gallery-6-before', afterId: 'gallery-6-after' },
];

export function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = galleryPairs.map(pair => ({
    before: PlaceHolderImages.find(img => img.id === pair.beforeId),
    after: PlaceHolderImages.find(img => img.id === pair.afterId),
  }));

  return (
    <Section id="gallery" className="bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Galería Antes y Después</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Pasa el ratón sobre las imágenes para ver la magia. Haz clic para ampliar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {images.map((pair, index) => {
          if (!pair.before || !pair.after) return null;

          return (
            <Card key={index} className="overflow-hidden group cursor-pointer" onClick={() => setLightboxImage(pair.after?.imageUrl || null)}>
              <CardContent className="p-0">
                <AspectRatio ratio={3 / 2}>
                  <div className="relative w-full h-full">
                    <Image
                      src={pair.after.imageUrl}
                      alt={pair.after.description}
                      data-ai-hint={pair.after.imageHint}
                      fill
                      className="object-cover transition-opacity duration-500 ease-in-out"
                    />
                    <Image
                      src={pair.before.imageUrl}
                      alt={pair.before.description}
                      data-ai-hint={pair.before.imageHint}
                      fill
                      className="object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-4">
                      <div className="text-white transform-gpu translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <span className="bg-black/50 px-2 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">Antes</span>
                      </div>
                       <div className="text-white absolute bottom-4 left-4">
                        <span className="bg-black/50 px-2 py-1 rounded-sm text-xs font-bold uppercase tracking-wider opacity-100 group-hover:opacity-0 transition-opacity duration-300">Después</span>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-2">
            {lightboxImage && <img src={lightboxImage} alt="Vista ampliada" className="max-h-[80vh] w-auto rounded-md" />}
        </DialogContent>
      </Dialog>

    </Section>
  );
}
