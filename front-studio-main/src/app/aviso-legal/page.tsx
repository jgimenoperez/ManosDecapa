'use client';

import { Section } from '@/components/section';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Section id="aviso-legal" className="py-12 md:py-20">
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
            Aviso Legal
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">
            Información legal y condiciones de uso de Manos Decapa
          </p>

          {/* Contenido */}
          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            {/* Sección 1: Introducción */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                1. Información Legal
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  <strong>Denominación comercial:</strong> Manos Decapa
                </p>
                <p>
                  <strong>Titular del servicio:</strong> Fiona Ziel Pouchet
                </p>
                <p>
                  <strong>Documento de identidad:</strong> 45630827T
                </p>
                <p>
                  <strong>Domicilio social:</strong> Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia, España
                </p>
                <p>
                  <strong>Teléfono:</strong> +34 654 49 69 60
                </p>
                <p>
                  <strong>Correo electrónico:</strong> fiona@manosdehada.es
                </p>
                <p>
                  <strong>Sitio web relacionado:</strong>{' '}
                  <a href="https://www.manosdehada.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    www.manosdehada.es
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic pt-4">
                Manos Decapa es un servicio especializado proporcionado bajo Manos de Hada, con más de 10 años de experiencia en restauración y decapado profesional de muebles.
              </p>
            </section>

            {/* Sección 2: Derechos de Propiedad Intelectual */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                2. Derechos de Propiedad Intelectual e Industrial
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  El sitio web, incluyendo su programación, edición, compilación, diseños, logotipos, textos y gráficos, son propiedad de Manos Decapa o, en su caso, dispone de licencia o autorización expresa por parte de los autores.
                </p>
                <p>
                  Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial.
                </p>
                <p>
                  La reproducción total o parcial, uso, explotación, distribución y comercialización de cualquier contenido requiere autorización escrita previa por parte del titular. Cualquier uso no autorizado se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial.
                </p>
                <p>
                  Los diseños, logotipos, textos y gráficos ajenos al titular y que aparezcan en el sitio web pertenecen a sus respectivos propietarios, siendo ellos los responsables de cualquier controversia que pudiera suscitarse respecto a los mismos.
                </p>
                <p>
                  Para observaciones respecto a posibles incumplimientos de derechos de propiedad intelectual o industrial, puede contactar a través del correo electrónico: <strong>fiona@manosdehada.es</strong>
                </p>
              </div>
            </section>

            {/* Sección 3: Exención de Responsabilidades */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                3. Exención de Responsabilidades
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <h3 className="text-lg font-semibold text-foreground">3.1 Disponibilidad del sitio web</h3>
                <p>
                  Este sitio web ha sido revisado y probado para funcionar correctamente. Se garantiza el correcto funcionamiento en principio 24 horas al día, aunque Manos Decapa no descarta la posibilidad de errores de programación o causas de fuerza mayor que hagan imposible el acceso temporal a la página web.
                </p>

                <h3 className="text-lg font-semibold text-foreground">3.2 Contenido de terceros</h3>
                <p>
                  Desde el sitio web es posible redireccionar a contenidos de terceros. Manos Decapa no asume responsabilidad respecto a dichos contenidos. Procederá a la retirada inmediata de cualquier contenido que contravenga la legislación nacional o internacional, la moral o el orden público.
                </p>

                <h3 className="text-lg font-semibold text-foreground">3.3 Cookies</h3>
                <p>
                  Este sitio web puede utilizar cookies técnicas para llevar a cabo funciones imprescindibles para su correcto funcionamiento. Estas cookies tienen carácter temporal y desaparecen al terminar la sesión del usuario.
                </p>
                <p>
                  El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies e impedir su instalación. Consulte las instrucciones de su navegador para más información.
                </p>

                <h3 className="text-lg font-semibold text-foreground">3.4 Direcciones IP</h3>
                <p>
                  Los servidores del sitio web pueden detectar automáticamente la dirección IP y nombre de dominio utilizados. Esta información se registra en ficheros de actividad para obtener mediciones estadísticas que permitan conocer el número de visitas, impresiones de páginas y otros parámetros de tráfico.
                </p>
              </div>
            </section>

            {/* Sección 4: Uso responsable */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                4. Uso Responsable
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  El usuario se compromete a usar este sitio web de acuerdo con la ley y estas condiciones, sin infringir derechos de terceros ni violando normas legales.
                </p>
                <p>
                  Está prohibido:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Reproducir, copiar o distribuir contenidos sin autorización</li>
                  <li>Transmitir virus, malware u otro código dañino</li>
                  <li>Realizar ataques que interrumpan el servicio</li>
                  <li>Acceder sin autorización a sistemas o datos</li>
                  <li>Difamar, intimidar o acosar a otros usuarios</li>
                </ul>
              </div>
            </section>

            {/* Sección 5: Política de enlaces */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                5. Política de Enlaces
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Se autoriza expresamente que terceros redireccionen a los contenidos concretos del sitio web de Manos Decapa. Se permite enlazar al sitio web principal sin necesidad de solicitud previa.
                </p>
                <p>
                  Manos Decapa no controla siempre los contenidos introducidos por terceros en sus sitios web vinculados, por lo que no asume responsabilidad respecto a dichos contenidos externos.
                </p>
              </div>
            </section>

            {/* Sección 6: Ley aplicable y jurisdicción */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                6. Ley Aplicable y Jurisdicción
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Para la resolución de todas las controversias o cuestiones relacionadas con este sitio web o las actividades en él desarrolladas, será de aplicación la legislación española.
                </p>
                <p>
                  Las partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales del domicilio del usuario o el lugar del cumplimiento de la obligación, de conformidad con las normas de competencia territorial aplicables.
                </p>
              </div>
            </section>

            {/* Sección 7: Modificaciones */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                7. Modificaciones
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Manos Decapa se reserva el derecho de modificar cualquier información que pudiera aparecer en el sitio web, sin obligación de preavisar. La publicación en el sitio web se considera suficiente notificación de cambios.
                </p>
              </div>
            </section>

            {/* Sección 8: Contacto */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                8. Contacto
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Para cualquier pregunta respecto a este aviso legal o el sitio web, puede ponerse en contacto con:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20">
                  <p><strong>Manos Decapa</strong></p>
                  <p>Teléfono: <a href="tel:+34654496960" className="text-accent hover:underline">+34 654 49 69 60</a></p>
                  <p>Email: <a href="mailto:fiona@manosdehada.es" className="text-accent hover:underline">fiona@manosdehada.es</a></p>
                  <p>Dirección: Carrer Rafelbunyol, 31 bajo 3, 46530 Puçol, Valencia, España</p>
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