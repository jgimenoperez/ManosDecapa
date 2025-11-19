'use client'

import { Section } from '@/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Qué es el decapado de muebles?',
    answer:
      'El decapado es el proceso de eliminar capas de pintura, barniz o laca de un mueble para dejar la madera en su estado natural, lista para un nuevo acabado. En Manos Decapa utilizamos técnicas profesionales sin químicos agresivos.',
  },
  {
    question: '¿Cuánto cuesta decapar un mueble en Valencia?',
    answer:
      'El precio del decapado varía según el tipo y tamaño del mueble. Nuestras tarifas orientativas: silla desde 35€, mesita desde 50€, cómoda desde 120€, puerta desde 80€. Ofrecemos presupuesto gratuito sin compromiso en 24 horas.',
  },
  {
    question: '¿Utilizan químicos agresivos en el decapado?',
    answer:
      'No, en Manos Decapa utilizamos un método profesional de decapado que no utiliza químicos agresivos, respetando la integridad de la madera original y garantizando un resultado seguro tanto para la pieza como para el medio ambiente.',
  },
  {
    question: '¿Ofrecen servicio de recogida y entrega en Valencia?',
    answer:
      'Sí, ofrecemos servicio de recogida y entrega en Valencia y área metropolitana (Puçol, Sagunto, Paterna, etc.) según las medidas y peso de la pieza. Consulta disponibilidad en tu presupuesto personalizado.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de decapado?',
    answer:
      'El tiempo de decapado varía según la complejidad de la pieza, pero generalmente entregamos en 1-2 semanas. Te informaremos del plazo exacto en tu presupuesto personalizado.',
  },
  {
    question: '¿Qué diferencia hay entre decapado y restauración?',
    answer:
      'El decapado es el proceso de eliminar acabados antiguos dejando la madera limpia. La restauración completa incluye decapado + reparaciones + nuevo acabado. Si necesitas restauración integral, visita nuestra empresa hermana Manos de Hada (www.manosdehada.es).',
  },
  {
    question: '¿Decapan todo tipo de muebles y materiales?',
    answer:
      'Sí, trabajamos con muebles de madera (sillas, cómodas, mesas), puertas y ventanas antiguas, y elementos metálicos decorativos como rejas y barandillas. Cada material requiere técnicas específicas que dominamos.',
  },
  {
    question: '¿Dónde están ubicados en Valencia?',
    answer:
      'Nos encontramos en Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia. Atendemos a toda el área metropolitana de Valencia incluyendo Sagunto, Paterna, y zonas cercanas.',
  },
  {
    question: '¿Cómo solicito un presupuesto?',
    answer:
      'Puedes solicitar presupuesto de tres formas: rellenando el formulario de contacto en nuestra web, llamando al +34 654 49 69 60, o enviando un email a fiona@manosdehada.es con fotos de tu mueble.',
  },
  {
    question: '¿Qué garantía ofrecen en el decapado?',
    answer:
      'Garantizamos un trabajo de calidad profesional. La madera queda lista para un nuevo acabado (pintura, barniz, tinte). No incluimos el acabado final a menos que lo solicites específicamente.',
  },
]

export function FAQSection() {
  return (
    <Section id="faq" className="bg-muted/50">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold font-headline md:text-5xl">
          Preguntas Frecuentes
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Resolvemos tus dudas sobre el decapado profesional de muebles en Valencia
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-6">
          ¿No encuentras respuesta a tu pregunta?
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
        >
          Contacta con nosotros
        </a>
      </div>
    </Section>
  )
}
