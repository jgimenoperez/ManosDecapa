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
  phone: z.string().regex(/^(\+34[\s-]?)?[0-9\s\-]{8,12}$/, {
    message: 'Por favor, introduce un teléfono válido (Ej: 912345678, +34912345678 o +34 912345678).'
  }).transform(val => val.replace(/[\s\-]/g, '')),
  clientType: z.enum(['particular', 'profesional']),
  businessName: z.string().optional(),
  pieceType: z.string().min(2, { message: 'Por favor, describe la pieza.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  attachment: z.any().optional(),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ nombre: string; email: string; fotos: number } | null>(null);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      clientType: 'particular',
      businessName: '',
      pieceType: '',
      message: '',
    },
  });

  // Real-time email validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    form.setValue('email', email);
  };

  // Real-time phone validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhoneValid(/^(\+34[\s-]?)?[0-9\s\-]{8,12}$/.test(phone));
    form.setValue('phone', phone);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Preparar FormData para enviar al Worker
      const formData = new FormData();
      formData.append('nombre', values.fullName);
      formData.append('email', values.email);
      formData.append('telefono', values.phone || '');

      // Construir mensaje incluyendo empresa si es profesional
      let messageContent = `Tipo de cliente: ${values.clientType}`;
      if (values.clientType === 'profesional' && values.businessName) {
        messageContent += `\nEmpresa: ${values.businessName}`;
      }
      messageContent += `\nPieza: ${values.pieceType}\n\n${values.message}`;

      formData.append('mensaje', messageContent);

      // Agregar imágenes
      uploadedFiles.forEach((file) => {
        formData.append('imagenes', file);
      });

      // Enviar al Worker de Cloudflare
      const response = await fetch(
        'https://api.manosdecapa.es/contact',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        // Store submitted data for confirmation
        setSubmittedData({
          nombre: values.fullName,
          email: values.email,
          fotos: uploadedFiles.length,
        });
        setShowSuccess(true);

        toast({
          title: "¡Presupuesto solicitado!",
          description: "Te responderemos en menos de 24 horas. Gracias por confiar en Manos Decapa.",
          duration: 8000,
        });

        // Mostrar aviso adicional sobre spam después de 1 segundo
        setTimeout(() => {
          toast({
            title: "Revisa tu email",
            description: "Si no ves el email de confirmación en los próximos minutos, revisa tu carpeta de SPAM. A veces nuestros emails se clasifican erróneamente.",
            duration: 8000,
          });
        }, 1000);
        form.reset();
        setUploadedFiles([]);
        setEmailValid(false);
        setPhoneValid(false);

        // Ocultar el card de confirmación después de 10 segundos
        setTimeout(() => {
          setShowSuccess(false);
          setSubmittedData(null);
        }, 10000);
      } else {
        toast({
          title: "Error al enviar",
          description: data.error || "Ocurrió un error al procesar tu solicitud. Intenta nuevamente.",
          variant: "destructive",
          duration: 8000,
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

  const MAX_IMAGES = 5;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const totalFiles = uploadedFiles.length + newFiles.length;

      if (totalFiles > MAX_IMAGES) {
        toast({
          title: "Límite de imágenes alcanzado",
          description: `Solo puedes subir un máximo de ${MAX_IMAGES} imágenes. Ya tienes ${uploadedFiles.length} imagen(es) cargada(s).`,
          variant: "destructive",
          duration: 4000,
        });
        // Limitar a solo las imágenes que caben
        const availableSlots = MAX_IMAGES - uploadedFiles.length;
        setUploadedFiles([...uploadedFiles, ...newFiles.slice(0, availableSlots)]);
      } else {
        setUploadedFiles([...uploadedFiles, ...newFiles]);
      }
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Section id="contact">
      {/* Success Confirmation Card */}
      <AnimatePresence>
        {showSuccess && submittedData && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-accent/20 to-accent/10 border-accent/40">
              <CardContent className="pt-6 px-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2">¡Presupuesto recibido!</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><strong>De:</strong> {submittedData.nombre}</p>
                      <p><strong>Email:</strong> {submittedData.email}</p>
                      <p><strong>Fotos adjuntas:</strong> {submittedData.fotos}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Recibirás confirmación en tu email. Si no la ves, revisa SPAM.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

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
          <Card className="shadow-xl border-0 bg-gradient-to-br from-background via-background to-primary/5">
            <CardContent className="pt-8 px-8">
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
                            Nombre completo <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre y apellidos"
                              {...field}
                              className="h-11 transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background"
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
                            Email <span className="text-destructive">*</span>
                            {emailValid && <CheckCircle2 className="w-4 h-4 text-accent" />}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="tu@email.com"
                              type="email"
                              value={field.value}
                              onChange={handleEmailChange}
                              className="h-11 transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background"
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
                          <FormLabel className="flex items-center gap-2">
                            Teléfono <span className="text-destructive">*</span>
                            {phoneValid && <CheckCircle2 className="w-4 h-4 text-accent" />}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ej: 912345678 o +34 912345678"
                              value={field.value}
                              onChange={handlePhoneChange}
                              className="h-11 transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background"
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
                          <FormLabel>Tipo de cliente <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-11 transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background">
                                <SelectValue placeholder="Selecciona una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="particular">Particular</SelectItem>
                              <SelectItem value="profesional">Profesional / Empresa</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Nombre de Empresa - Conditional field for professionals */}
                  {form.watch('clientType') === 'profesional' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              Nombre de empresa / negocio
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Nombre de tu empresa"
                                {...field}
                                className="h-11 transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}


                  {/* Tipo de Pieza */}
                  <FormField
                    control={form.control}
                    name="pieceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de pieza a decapar <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: Cómoda, 4 sillas, puerta de entrada..."
                            {...field}
                            className="h-11 transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background"
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
                        <FormLabel>Mensaje / Descripción <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe la pieza, sus medidas aproximadas y cualquier detalle que consideres importante."
                            className="resize-y min-h-[120px] transition-all focus:ring-2 focus:ring-accent bg-muted/40 border-border/60 hover:border-border hover:bg-muted/60 focus:bg-background"
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
                            <label className={`flex flex-col items-center justify-center w-full md:h-40 h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                              uploadedFiles.length >= MAX_IMAGES
                                ? 'border-destructive/40 bg-destructive/8 hover:bg-destructive/12 opacity-50 cursor-not-allowed'
                                : 'border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50'
                            }`}>
                              <div className="flex flex-col items-center justify-center pt-6 pb-8">
                                <div className="p-3 bg-primary/15 rounded-full mb-4">
                                  <Upload className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-sm text-foreground font-medium">
                                  <span className="text-primary">Haz clic para subir</span> o arrastra archivos
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  PNG, JPG, hasta 5MB cada una
                                </p>
                              </div>
                              <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileUpload}
                                disabled={uploadedFiles.length >= MAX_IMAGES}
                              />
                            </label>

                            {/* Información del límite de imágenes y seguridad */}
                            <div className="bg-primary/8 border border-primary/20 rounded-lg p-4 text-sm space-y-3">
                              <p className="text-foreground font-medium flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-primary" />
                                Límite de imágenes: <strong>hasta 5 fotos</strong>
                              </p>
                              <div className="flex items-center justify-between">
                                <p className="text-muted-foreground text-xs">
                                  Cargadas: <strong className="text-foreground">{uploadedFiles.length}</strong> / {MAX_IMAGES}
                                </p>
                                <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-primary transition-all duration-300"
                                    style={{ width: `${(uploadedFiles.length / MAX_IMAGES) * 100}%` }}
                                  />
                                </div>
                              </div>
                              {uploadedFiles.length >= MAX_IMAGES && (
                                <p className="text-amber-700 dark:text-amber-300 text-xs font-medium flex items-center gap-2">
                                  <span>⚠️</span> Límite alcanzado. Elimina alguna para añadir más.
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground flex items-center gap-2 pt-2 border-t border-primary/20">
                                <ShieldCheck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                                Tus fotos solo se usan para tu presupuesto. No serán compartidas.
                              </p>
                            </div>

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
                                      className="flex items-center justify-between p-4 bg-primary/8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-primary/8 border border-primary/20 rounded-lg p-4"
                  >
                    <p className="text-xs text-center text-muted-foreground leading-relaxed">
                      <span className="flex items-center justify-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                        <strong>Seguridad de tus datos</strong>
                      </span>
                      Al enviar el formulario, aceptas nuestra política de privacidad. Tus datos están encriptados y no serán compartidos con terceros. Solo los usaremos para tu presupuesto.
                    </p>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
