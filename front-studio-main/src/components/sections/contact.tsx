'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Upload, X, Camera, User, Mail, Clock, ShieldCheck, Send, Image as ImageIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/section';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  phone: z.string().optional(),
  clientType: z.enum(['particular', 'profesional']),
  pieceType: z.string().min(2, { message: 'Por favor, describe la pieza.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  attachment: z.any().optional(),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      clientType: 'particular',
      pieceType: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Preparar FormData para enviar al Worker
      const formData = new FormData();
      formData.append('nombre', values.fullName);
      formData.append('email', values.email);
      formData.append('telefono', values.phone || '');
      formData.append('mensaje', `Tipo de cliente: ${values.clientType}\nPieza: ${values.pieceType}\n\n${values.message}`);

      // Agregar imágenes
      uploadedFiles.forEach((file) => {
        formData.append('imagenes', file);
      });

      // Enviar al Worker de Cloudflare
      const response = await fetch(
        'https://manos-decapa-contact-worker-production.manosdevtroll.workers.dev/contact',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: "¡Presupuesto solicitado!",
          description: "Te responderemos en menos de 24 horas. Gracias por confiar en Manos Decapa.",
          duration: 5000,
        });
        form.reset();
        setUploadedFiles([]);
      } else {
        toast({
          title: "Error al enviar",
          description: data.error || "Ocurrió un error al procesar tu solicitud. Intenta nuevamente.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      toast({
        title: "Error de conexión",
        description: "No pudimos conectar con el servidor. Verifica tu conexión e intenta de nuevo.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Section id="contact">
      {/* Header con beneficios */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-headline"
        >
          Solicita Tu Presupuesto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mt-2 max-w-2xl mx-auto"
        >
          Rellena el formulario y adjunta fotos de tu pieza para una valoración precisa.
        </motion.p>

        {/* Garantías visibles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-6 flex-wrap"
        >
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-medium">100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-medium">Respuesta en 24h</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="font-medium">Sin compromiso</span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg border-none">
            <CardContent className="pt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nombre y Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            Nombre completo
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre y apellidos"
                              {...field}
                              className="transition-all focus:ring-2 focus:ring-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="tu@email.com"
                              type="email"
                              {...field}
                              className="transition-all focus:ring-2 focus:ring-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Teléfono y Tipo de Cliente */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono (Opcional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu número de teléfono"
                              {...field}
                              className="transition-all focus:ring-2 focus:ring-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de cliente</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="transition-all focus:ring-2 focus:ring-accent">
                                <SelectValue placeholder="Selecciona una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="particular">Particular</SelectItem>
                              <SelectItem value="profesional">Profesional</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Tipo de Pieza */}
                  <FormField
                    control={form.control}
                    name="pieceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de pieza a decapar</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: Cómoda, 4 sillas, puerta de entrada..."
                            {...field}
                            className="transition-all focus:ring-2 focus:ring-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mensaje */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje / Descripción</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe la pieza, sus medidas aproximadas y cualquier detalle que consideres importante."
                            className="resize-y min-h-[120px] transition-all focus:ring-2 focus:ring-accent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Upload de archivos mejorado */}
                  <FormField
                    control={form.control}
                    name="attachment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Camera className="w-4 h-4 text-muted-foreground" />
                          Fotos de tu pieza
                          <span className="text-xs text-muted-foreground ml-2">(Opcional pero recomendado)</span>
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-3">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-semibold">Haz clic para subir</span> o arrastra archivos
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  PNG, JPG hasta 10MB
                                </p>
                              </div>
                              <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileUpload}
                              />
                            </label>

                            {/* Preview de archivos subidos */}
                            <AnimatePresence>
                              {uploadedFiles.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="space-y-2"
                                >
                                  {uploadedFiles.map((file, index) => (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border"
                                    >
                                      <div className="flex items-center gap-3">
                                        <ImageIcon className="w-5 h-5 text-accent flex-shrink-0" />
                                        <div className="flex-1">
                                          <span className="text-sm font-medium truncate max-w-[200px] block">
                                            {file.name}
                                          </span>
                                          <span className="text-xs text-muted-foreground">
                                            {(file.size / 1024).toFixed(1)} KB
                                          </span>
                                        </div>
                                      </div>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeFile(index)}
                                        className="h-8 w-8 hover:bg-destructive/20"
                                      >
                                        <X className="w-4 h-4" />
                                      </Button>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Botón de envío mejorado */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando presupuesto...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Solicitar Presupuesto Gratuito
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Trust badges debajo del botón */}
                  <p className="text-xs text-center text-muted-foreground">
                    Al enviar el formulario, aceptas nuestra política de privacidad.
                    Tus datos están seguros y no serán compartidos con terceros.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
