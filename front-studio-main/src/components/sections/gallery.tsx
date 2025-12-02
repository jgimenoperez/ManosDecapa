'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Section } from '@/components/section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: string;
  name: string;
  beforeUrl: string;
  beforeAlt: string;
  afterUrl: string;
  afterAlt: string;
}

interface GallerySectionProps {
  galleryData?: GalleryImage[];
}

export function GallerySection({ galleryData }: GallerySectionProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsMobile('ontouchstart' in window);
  }, []);

  // Usar datos de Prismic si están disponibles, si no usar placeholder
  const images = galleryData && galleryData.length > 0
    ? galleryData.map(item => ({
        before: {
          imageUrl: item.beforeUrl,
          description: item.beforeAlt,
          imageHint: `${item.name} - antes del decapado`,
        },
        after: {
          imageUrl: item.afterUrl,
          description: item.afterAlt,
          imageHint: `${item.name} - después del decapado`,
        },
      }))
    : (() => {
        const galleryPairs = [
          { beforeId: 'gallery-1-before', afterId: 'gallery-1-after' },
          { beforeId: 'gallery-2-before', afterId: 'gallery-2-after' },
          { beforeId: 'gallery-3-before', afterId: 'gallery-3-after' },
          { beforeId: 'gallery-4-before', afterId: 'gallery-4-after' },
          { beforeId: 'gallery-5-before', afterId: 'gallery-5-after' },
          { beforeId: 'gallery-6-before', afterId: 'gallery-6-after' },
        ];
        return galleryPairs.map(pair => ({
          before: PlaceHolderImages.find(img => img.id === pair.beforeId),
          after: PlaceHolderImages.find(img => img.id === pair.afterId),
        }));
      })();

  const toggleReveal = (index: number) => {
    if (!isMobile) return;

    setRevealedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <Section id="gallery" className="bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Galería Antes y Después</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {isMobile
            ? "Toca las imágenes para ver el antes y después."
            : "Haz clic en las imágenes para ampliar y ver toda la magia."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {images.map((pair, index) => {
          if (!pair.before || !pair.after) return null;

          const isRevealed = revealedImages.has(index);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="overflow-hidden group cursor-pointer relative h-full hover:shadow-xl transition-shadow duration-300"
                onClick={(e) => {
                  if (isMobile) {
                    toggleReveal(index);
                  } else {
                    // En desktop, abrir el lightbox con la imagen de después
                    setLightboxImage(pair.after?.imageUrl || null);
                  }
                }}
              >
                <CardContent className="p-0">
                  <AspectRatio ratio={3 / 2}>
                    <div className="relative w-full h-full">
                      {/* Imagen DESPUÉS */}
                      <Image
                        src={pair.after.imageUrl}
                        alt={pair.after.description}
                        data-ai-hint={pair.after.imageHint}
                        fill
                        className="object-cover transition-opacity duration-500 ease-in-out"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                      />

                      {/* Imagen ANTES */}
                      <Image
                        src={pair.before.imageUrl}
                        alt={pair.before.description}
                        data-ai-hint={pair.before.imageHint}
                        fill
                        className={cn(
                          "object-cover transition-opacity duration-500 ease-in-out",
                          isMobile
                            ? (isRevealed ? "opacity-0" : "opacity-100")
                            : "opacity-100 group-hover:opacity-0"
                        )}
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                      />

                      {/* Overlay con etiquetas */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-4">
                        {/* Etiqueta ANTES */}
                        <motion.div
                          className={cn(
                            "text-white transition-all duration-300",
                            isMobile
                              ? (isRevealed ? "opacity-0" : "opacity-100")
                              : "opacity-100 group-hover:opacity-0"
                          )}
                          initial={false}
                        >
                          <span className="bg-black/70 px-3 py-1.5 rounded-md text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                            Antes
                          </span>
                        </motion.div>

                        {/* Etiqueta DESPUÉS */}
                        <motion.div
                          className={cn(
                            "text-white transition-all duration-300",
                            isMobile
                              ? (isRevealed ? "opacity-100" : "opacity-0")
                              : "opacity-0 group-hover:opacity-100"
                          )}
                          initial={false}
                        >
                          <span className="bg-accent/90 px-3 py-1.5 rounded-md text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                            Después
                          </span>
                        </motion.div>
                      </div>


                      {/* Indicador de tap en mobile */}
                      {isMobile && !isRevealed && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.div
                            className="bg-white/90 px-4 py-2 rounded-full text-foreground font-medium text-sm shadow-lg"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Toca para revelar
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox mejorado */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-0 [&_button]:w-10 [&_button]:h-10 [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button_svg]:w-6 [&_button_svg]:h-6 [&_button]:bg-white/30 [&_button]:hover:bg-white/50">
          <DialogTitle className="sr-only">Imagen ampliada de la galería</DialogTitle>
          <div className="relative w-full max-h-[85vh] flex items-center justify-center">
            {lightboxImage && (
              <Image
                src={lightboxImage}
                alt="Vista ampliada de galería"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[85vh] object-contain"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1920px) 90vw, 1200px"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
