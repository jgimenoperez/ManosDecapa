'use client';

import { Section } from '@/components/section';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Section id="politica-privacidad" className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Botón volver */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/#home" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </Button>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2 text-foreground">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">
            Información sobre cómo tratamos tus datos personales
          </p>

          {/* Contenido */}
          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            {/* Sección 1: Información al usuario */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                1. Información al Usuario
              </h2>

              <div className="space-y-6">
                {/* ¿Quién es el responsable? */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    ¿Quién es el responsable del tratamiento de tus datos personales?
                  </h3>
                  <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20 space-y-2">
                    <p><strong>Manos Decapa</strong></p>
                    <p><strong>Titular:</strong> Fiona Ziel Pouchet</p>
                    <p><strong>DNI:</strong> 45630827T</p>
                    <p><strong>Dirección:</strong> Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia, España</p>
                    <p><strong>Email:</strong> <a href="mailto:fiona@manosdehada.es" className="text-accent hover:underline">fiona@manosdehada.es</a></p>
                    <p><strong>Teléfono:</strong> <a href="tel:+34654496960" className="text-accent hover:underline">+34 654 49 69 60</a></p>
                  </div>
                  <p className="text-base leading-relaxed">
                    es la responsable del tratamiento de tus datos personales y te informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
                  </p>
                </div>

                {/* ¿Para qué? */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    ¿Para qué tratamos tus datos personales?
                  </h3>
                  <p>
                    Para mantener una relación comercial contigo. Las operaciones previstas para realizar el tratamiento son:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Remisión de comunicaciones comerciales publicitarias por e-mail, SMS, redes sociales o cualquier otro medio electrónico o físico, relacionadas con nuestros servicios de decapado y restauración de muebles.</li>
                    <li>Realizar estudios de mercado y análisis estadísticos.</li>
                    <li>Tramitar encargos, solicitudes, presupuestos y dar respuesta a las consultas o cualquier tipo de petición que realices a través de nuestras formas de contacto.</li>
                    <li>Remitir información sobre novedades, ofertas y promociones en nuestros servicios.</li>
                    <li>Comunicación relacionada con presupuestos, trabajos y servicio post-venta.</li>
                  </ul>
                </div>

                {/* ¿Por qué? */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    ¿Por qué motivo podemos tratar tus datos personales?
                  </h3>
                  <p>
                    Porque el tratamiento está legitimado por el artículo 6 del RGPD de la siguiente forma:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Con tu consentimiento:</strong> remisión de comunicaciones comerciales e información sobre nuestros servicios.</li>
                    <li><strong>Por interés legítimo:</strong> realizar estudios de mercado, análisis estadísticos, tramitar encargos y solicitudes que realices.</li>
                    <li><strong>Por obligación legal:</strong> cuando sea requerido por la normativa vigente.</li>
                  </ul>
                </div>

                {/* ¿Cuánto tiempo? */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    ¿Durante cuánto tiempo guardaremos tus datos personales?
                  </h3>
                  <p>
                    Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia. Cuando ya no sea necesario, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    En el caso de presupuestos y trabajos, los datos se conservarán durante el tiempo requerido por la normativa fiscal y contable (mínimo 6 años).
                  </p>
                </div>

                {/* ¿A quién facilitamos? */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    ¿A quién facilitamos tus datos personales?
                  </h3>
                  <p>
                    No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Comunicaciones y envío de información (email, SMS)</li>
                    <li>Servicios de almacenamiento en la nube</li>
                    <li>Análisis y estadísticas web</li>
                    <li>Con los cuales tenemos suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.</li>
                  </ul>
                </div>

                {/* Derechos */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    ¿Cuáles son tus derechos?
                  </h3>
                  <p>
                    Los derechos que te asisten como usuario son:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Derecho a retirar el consentimiento</strong> en cualquier momento, sin afectar a la licitud del tratamiento anterior.</li>
                    <li><strong>Derecho de acceso:</strong> obtener información sobre si tus datos están siendo tratados.</li>
                    <li><strong>Derecho de rectificación:</strong> corregir datos inexactos o incompletos.</li>
                    <li><strong>Derecho al olvido (supresión):</strong> solicitar la eliminación de tus datos en determinadas circunstancias.</li>
                    <li><strong>Derecho a la limitación del tratamiento:</strong> restringir cómo se usan tus datos.</li>
                    <li><strong>Derecho a la portabilidad:</strong> recibir tus datos en un formato estructurado.</li>
                    <li><strong>Derecho de oposición:</strong> oponerte al tratamiento de tus datos para fines específicos.</li>
                    <li><strong>Derecho a presentar una reclamación</strong> ante la Autoridad de Control (Agencia Española de Protección de Datos - <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.aepd.es</a>) si consideras que el tratamiento no se ajusta a la normativa vigente.</li>
                  </ul>
                </div>

                {/* Cómo ejercer derechos */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Cómo ejercer tus derechos
                  </h3>
                  <p>
                    Para ejercer cualquiera de tus derechos, puedes contactar con nosotros en:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20 space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:fiona@manosdehada.es" className="text-accent hover:underline">fiona@manosdehada.es</a></p>
                    <p><strong>Teléfono:</strong> <a href="tel:+34654496960" className="text-accent hover:underline">+34 654 49 69 60</a></p>
                    <p><strong>Dirección postal:</strong> Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia, España</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Responderemos a tu solicitud en el plazo máximo de 30 días hábiles desde la recepción de la misma.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 2: Carácter obligatorio */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                2. Carácter Obligatorio o Facultativo de la Información
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Al utilizar nuestros formularios de contacto, presupuesto o descarga, aceptas expresamente y de forma libre e inequívoca que tus datos son necesarios para atender tu petición.
                </p>
                <p>
                  Los campos marcados con un asterisco (<span className="text-accent">*</span>) son <strong>obligatorios</strong>, ya que son necesarios para la prestación óptima de nuestro servicio. Los demás campos son voluntarios.
                </p>
                <p>
                  Si no facilitas los datos obligatorios, no podremos procesar tu solicitud ni garantizar que la información y servicios sean completamente ajustados a tus necesidades.
                </p>
                <p>
                  Garantizas que los datos personales que facilitas son veraces y te haces responsable de comunicar cualquier modificación de los mismos.
                </p>
              </div>
            </section>

            {/* Sección 3: Medidas de seguridad */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                3. Medidas de Seguridad
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  De conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, Manos Decapa está cumpliendo con todas las disposiciones del RGPD y LOPDGDD para el tratamiento de tus datos personales.
                </p>
                <p>
                  Cumplimos con los principios descritos en el artículo 5 del RGPD, por los cuales tus datos son tratados de manera:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Lícita, leal y transparente</strong> en relación contigo</li>
                  <li><strong>Adecuados, pertinentes y limitados</strong> a lo necesario en relación con los fines para los que son tratados</li>
                  <li><strong>Exactos y actualizados</strong></li>
                  <li><strong>Guardados de forma segura</strong></li>
                </ul>
                <p>
                  Hemos implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el RGPD y la LOPDGDD con el fin de proteger tus derechos y libertades, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Encriptación de datos en tránsito (HTTPS)</li>
                  <li>Control de acceso mediante autenticación</li>
                  <li>Copias de seguridad regulares</li>
                  <li>Auditorías de seguridad periódicas</li>
                  <li>Formación de personal sobre protección de datos</li>
                </ul>
              </div>
            </section>

            {/* Sección 4: Cookies y tecnologías de seguimiento */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                4. Cookies y Tecnologías de Seguimiento
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Nuestro sitio web utiliza cookies técnicas para funcionar correctamente. Estas cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Son <strong>necesarias para el funcionamiento</strong> del sitio web</li>
                  <li>Tienen <strong>carácter temporal</strong> y se eliminan al cerrar el navegador</li>
                  <li><strong>No recopilan datos personales</strong> por sí solas</li>
                  <li>No se utilizan para tracking o perfilado</li>
                </ul>
                <p>
                  Puedes configurar tu navegador para rechazar cookies. Consulta las instrucciones de tu navegador para más información. Sin embargo, esto podría afectar al funcionamiento correcto del sitio web.
                </p>
              </div>
            </section>

            {/* Sección 5: Enlaces a terceros */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                5. Enlaces a Sitios de Terceros
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las políticas de privacidad de estos sitios externos.
                </p>
                <p>
                  Te recomendamos que revises la política de privacidad de cualquier sitio externo antes de facilitar tus datos personales.
                </p>
              </div>
            </section>

            {/* Sección 6: Cambios en esta política */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                6. Cambios en esta Política
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web.
                </p>
                <p>
                  Te recomendamos que revises esta política regularmente para estar informado de cualquier cambio.
                </p>
              </div>
            </section>

            {/* Sección 7: Contacto */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                7. Contacto
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Si tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos personales, no dudes en contactarnos:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20 space-y-2">
                  <p><strong>Manos Decapa</strong></p>
                  <p><strong>Titular:</strong> Fiona Ziel Pouchet</p>
                  <p><strong>Email:</strong> <a href="mailto:fiona@manosdehada.es" className="text-accent hover:underline">fiona@manosdehada.es</a></p>
                  <p><strong>Teléfono:</strong> <a href="tel:+34654496960" className="text-accent hover:underline">+34 654 49 69 60</a></p>
                  <p><strong>Dirección:</strong> Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia, España</p>
                </div>
              </div>
            </section>

            {/* Sección 8: Reclamaciones */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                8. Derecho a Presentar Reclamación
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente, tienes derecho a presentar una reclamación ante:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20 space-y-2">
                  <p><strong>Agencia Española de Protección de Datos (AEPD)</strong></p>
                  <p><strong>Sitio web:</strong> <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.aepd.es</a></p>
                  <p><strong>Teléfono:</strong> 901 100 099</p>
                  <p className="text-sm text-muted-foreground">
                    Nota: También puedes presentar una reclamación ante la autoridad de protección de datos de tu país si resides en otro Estado miembro de la UE.
                  </p>
                </div>
              </div>
            </section>

            {/* Pie de página */}
            <section className="pt-8 border-t border-muted-foreground/20">
              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                © {new Date().getFullYear()} Manos Decapa. Todos los derechos reservados.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
