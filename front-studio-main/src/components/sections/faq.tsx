'use client'

import { Section } from '@/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, DollarSign, Leaf, Truck, Clock, Hammer, Package, MapPin, FileText, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
  icon: React.ReactNode
  category: string
}

const faqsByCategory: Record<string, FAQ[]> = {
  'Servicio': [
    {
      question: '¿Qué es el decapado de muebles?',
      answer:
        'El decapado es el proceso de eliminar capas de pintura, barniz o laca de un mueble para dejar la madera en su estado natural, lista para un nuevo acabado. En Manos Decapa utilizamos técnicas profesionales sin químicos agresivos.',
      icon: <HelpCircle className="w-5 h-5" />,
      category: 'Servicio',
    },
    {
      question: '¿Qué diferencia hay entre decapado y restauración?',
      answer:
        'El decapado es el proceso de eliminar acabados antiguos dejando la madera limpia. La restauración completa incluye decapado + reparaciones + nuevo acabado. Si necesitas restauración integral, visita nuestra empresa hermana Manos de Hada (www.manosdehada.es).',
      icon: <Hammer className="w-5 h-5" />,
      category: 'Servicio',
    },
    {
      question: '¿Decapan todo tipo de muebles y materiales?',
      answer:
        'Sí, trabajamos con muebles de madera (sillas, cómodas, mesas), puertas y ventanas antiguas, y elementos metálicos decorativos como rejas y barandillas. Cada material requiere técnicas específicas que dominamos.',
      icon: <Package className="w-5 h-5" />,
      category: 'Servicio',
    },
  ],
  'Precios y Presupuesto': [
    {
      question: '¿Cuánto cuesta decapar un mueble en Valencia?',
      answer:
        'El precio del decapado varía según el tipo y tamaño del mueble. Nuestras tarifas orientativas: silla desde 35€, mesita desde 50€, cómoda desde 120€, puerta desde 80€. Ofrecemos presupuesto gratuito sin compromiso en 24 horas.',
      icon: <DollarSign className="w-5 h-5" />,
      category: 'Precios y Presupuesto',
    },
    {
      question: '¿Cómo solicito un presupuesto?',
      answer:
        'Puedes solicitar presupuesto de tres formas: rellenando el formulario de contacto en nuestra web, llamando al +34 654 49 69 60, o enviando un email a fiona@manosdehada.es con fotos de tu mueble.',
      icon: <FileText className="w-5 h-5" />,
      category: 'Precios y Presupuesto',
    },
  ],
  'Proceso y Sostenibilidad': [
    {
      question: '¿Utilizan químicos agresivos en el decapado?',
      answer:
        'No, en Manos Decapa utilizamos un método profesional de decapado que no utiliza químicos agresivos, respetando la integridad de la madera original y garantizando un resultado seguro tanto para la pieza como para el medio ambiente.',
      icon: <Leaf className="w-5 h-5" />,
      category: 'Proceso y Sostenibilidad',
    },
    {
      question: '¿Cuánto tiempo tarda el proceso de decapado?',
      answer:
        'El tiempo de decapado varía según la complejidad de la pieza, pero generalmente entregamos en 1-2 semanas. Te informaremos del plazo exacto en tu presupuesto personalizado.',
      icon: <Clock className="w-5 h-5" />,
      category: 'Proceso y Sostenibilidad',
    },
    {
      question: '¿Qué garantía ofrecen en el decapado?',
      answer:
        'Garantizamos un trabajo de calidad profesional. La madera queda lista para un nuevo acabado (pintura, barniz, tinte). No incluimos el acabado final a menos que lo solicites específicamente.',
      icon: <Shield className="w-5 h-5" />,
      category: 'Proceso y Sostenibilidad',
    },
  ],
  'Entrega y Ubicación': [
    {
      question: '¿Ofrecen servicio de recogida y entrega en Valencia?',
      answer:
        'Sí, ofrecemos servicio de recogida y entrega en Valencia y área metropolitana (Puçol, Sagunto, Paterna, etc.) según las medidas y peso de la pieza. Consulta disponibilidad en tu presupuesto personalizado.',
      icon: <Truck className="w-5 h-5" />,
      category: 'Entrega y Ubicación',
    },
    {
      question: '¿Dónde están ubicados en Valencia?',
      answer:
        'Nos encontramos en Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia. Atendemos a toda el área metropolitana de Valencia incluyendo Sagunto, Paterna, y zonas cercanas.',
      icon: <MapPin className="w-5 h-5" />,
      category: 'Entrega y Ubicación',
    },
  ],
}

export function FAQSection() {
  const categories = Object.entries(faqsByCategory)

  return (
    <Section id="faq" className="bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold font-headline md:text-5xl">
          Preguntas Frecuentes
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Resolvemos tus dudas sobre el decapado profesional de muebles en Valencia
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12">
        {categories.map(([categoryName, faqItems], categoryIndex) => (
          <motion.div
            key={categoryName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-headline text-foreground mb-1">
                {categoryName}
              </h3>
              <div className="h-1 w-16 bg-accent rounded-full"></div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={`${categoryName}-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`${categoryName}-${index}`}
                    className="border border-border/50 rounded-lg px-4 hover:border-primary/50 hover:bg-accent/5 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-4 gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="text-primary flex-shrink-0">
                          {faq.icon}
                        </div>
                        <span className="text-base md:text-lg">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pl-8 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground mb-6 text-lg">
          ¿No encuentras respuesta a tu pregunta?
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Contacta con nosotros
        </a>
      </motion.div>
    </Section>
  )
}
