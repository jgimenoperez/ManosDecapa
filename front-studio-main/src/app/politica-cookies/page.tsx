'use client';

import { Section } from '@/components/section';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Section id="politica-cookies" className="py-12 md:py-20">
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
            Política de Cookies
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">
            Información sobre el uso de cookies en nuestro sitio web
          </p>

          {/* Contenido */}
          <div className="prose prose-invert max-w-none space-y-8 text-foreground">
            {/* Sección 1: Información sobre cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                ¿Qué son las Cookies?
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.
                </p>
                <p>
                  Mediante el uso de estos dispositivos se permite al servidor web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas, nombre y contraseña, productos que más le interesan, etc.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Cumplimos con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
                </p>
              </div>
            </section>

            {/* Sección 2: Cookies afectadas */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Cookies Afectadas por la Normativa
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Según la directiva de la UE, las cookies que requieren consentimiento informado por parte del usuario son:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Cookies de analítica:</strong> para analizar el comportamiento de usuarios</li>
                  <li><strong>Cookies publicitarias:</strong> para mostrar publicidad personalizada</li>
                  <li><strong>Cookies de afiliación:</strong> para seguimiento de afiliados</li>
                </ul>
                <p>
                  <strong>Quedan exceptuadas:</strong> las cookies de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.
                </p>
              </div>
            </section>

            {/* Sección 3: Tipos de cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Tipos de Cookies
              </h2>

              <div className="space-y-6">
                {/* Por finalidad */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Según la Finalidad
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      <strong>Cookies técnicas y funcionales:</strong> Permiten la navegación a través de nuestro sitio web y la utilización de las diferentes opciones o servicios que en él existen.
                    </li>
                    <li>
                      <strong>Cookies analíticas:</strong> Permiten el seguimiento y análisis del comportamiento de los usuarios. La información se utiliza para medir la actividad del sitio web y elaborar perfiles de navegación, con el fin de introducir mejoras.
                    </li>
                    <li>
                      <strong>Cookies publicitarias:</strong> Permiten la gestión eficaz de los espacios publicitarios, en función del contenido editado o la frecuencia de visualización de anuncios.
                    </li>
                    <li>
                      <strong>Cookies de publicidad comportamental:</strong> Recogen información sobre las preferencias y elecciones personales del usuario (retargeting) para personalizar anuncios.
                    </li>
                    <li>
                      <strong>Cookies sociales:</strong> Establecidas por plataformas de redes sociales para permitir compartir contenido. Las redes sociales pueden rastrear tu actividad en línea fuera de nuestros servicios.
                    </li>
                    <li>
                      <strong>Cookies de seguridad:</strong> Almacenan información cifrada para evitar que los datos sean vulnerables a ataques maliciosos.
                    </li>
                  </ul>
                </div>

                {/* Por propiedad */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Según la Propiedad
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      <strong>Cookies propias:</strong> Se envían desde un equipo o dominio gestionado por Manos Decapa y desde el que se presta el servicio solicitado.
                    </li>
                    <li>
                      <strong>Cookies de terceros:</strong> Se envían desde un equipo o dominio que no es gestionado por Manos Decapa, sino por otra entidad que trata los datos obtenidos a través de las cookies.
                    </li>
                  </ul>
                </div>

                {/* Por plazo */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Según el Plazo de Conservación
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      <strong>Cookies de sesión:</strong> Diseñadas para recabar y almacenar datos mientras el usuario accede a nuestro sitio web.
                    </li>
                    <li>
                      <strong>Cookies persistentes:</strong> Los datos siguen almacenados en el terminal y pueden ser accedidos durante un período definido, que puede ir de unos minutos a varios años.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sección 4: Tratamiento de datos */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Tratamiento de Datos Personales
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20 space-y-2">
                  <p><strong>Responsable del tratamiento:</strong> Manos Decapa</p>
                  <p><strong>Titular:</strong> Fiona Ziel Pouchet</p>
                  <p><strong>DNI:</strong> 45630827T</p>
                  <p><strong>Email:</strong> <a href="mailto:fiona@manosdehada.es" className="text-accent hover:underline">fiona@manosdehada.es</a></p>
                </div>

                <p>
                  Manos Decapa es el responsable del tratamiento de datos personales obtenidos a través de cookies. Estos datos serán tratados conforme al RGPD y LOPDGDD.
                </p>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Fines del tratamiento
                  </h3>
                  <p>
                    Según se especifica en el apartado de cookies que se utilizan en este sitio web.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Legitimación del tratamiento
                  </h3>
                  <p>
                    Salvo en los casos en los que resulte necesario para la navegación por la web, por consentimiento del usuario (art. 6.1.a RGPD).
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Criterios de conservación de datos
                  </h3>
                  <p>
                    Según se especifica en el apartado de cookies utilizadas en la web.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Comunicación de datos
                  </h3>
                  <p>
                    No se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Derechos que te asisten
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Derecho a retirar el consentimiento en cualquier momento</li>
                    <li>Derecho de acceso, rectificación, portabilidad y supresión de tus datos</li>
                    <li>Derecho de limitación u oposición al tratamiento</li>
                    <li>Derecho a presentar una reclamación ante la Autoridad de Control (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.aepd.es</a>) si consideras que el tratamiento no se ajusta a la normativa vigente</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sección 5: Cookies utilizadas */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Cookies Utilizadas en Este Sitio Web
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Cookies Técnicas y Funcionales (Necesarias)
                  </h3>
                  <p className="text-sm mb-3 text-muted-foreground">
                    Estas cookies son necesarias para el funcionamiento correcto del sitio web y NO requieren consentimiento.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-muted-foreground/20">
                          <th className="text-left py-2 px-2">Proveedor</th>
                          <th className="text-left py-2 px-2">Nombre</th>
                          <th className="text-left py-2 px-2">Plazo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-muted-foreground/20">
                        <tr>
                          <td className="py-2 px-2">Manos Decapa</td>
                          <td className="py-2 px-2">Preferencias de navegación</td>
                          <td className="py-2 px-2">Sesión</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2">Manos Decapa</td>
                          <td className="py-2 px-2">Autenticación</td>
                          <td className="py-2 px-2">Sesión</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Cookies Analíticas (Google Analytics)
                  </h3>
                  <p className="text-sm mb-3 text-muted-foreground">
                    Estas cookies requieren consentimiento previo del usuario.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-muted-foreground/20">
                          <th className="text-left py-2 px-2">Proveedor</th>
                          <th className="text-left py-2 px-2">Nombre</th>
                          <th className="text-left py-2 px-2">Finalidad</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-muted-foreground/20">
                        <tr>
                          <td className="py-2 px-2">Google</td>
                          <td className="py-2 px-2">_ga</td>
                          <td className="py-2 px-2">Identificar usuarios únicos</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2">Google</td>
                          <td className="py-2 px-2">_gat</td>
                          <td className="py-2 px-2">Limitar tasa de solicitudes</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2">Google</td>
                          <td className="py-2 px-2">_gid</td>
                          <td className="py-2 px-2">Diferenciar usuarios</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Cookies de Terceros
                  </h3>
                  <p className="text-sm mb-3 text-muted-foreground">
                    Los servicios de terceros son ajenos al control de Manos Decapa. Los proveedores pueden modificar sus condiciones de servicio en cualquier momento.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">Google Analytics</p>
                      <p className="text-sm">
                        <a href="https://privacy.google.com/take-control.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                          Política de privacidad de Google
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Google Ads</p>
                      <p className="text-sm">
                        <a href="https://safety.google/privacy/privacy-controls/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                          Controles de privacidad
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección 6: Gestión de cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Cómo Gestionar las Cookies
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Eliminar cookies del dispositivo
                  </h3>
                  <p>
                    Las cookies que ya están en tu dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Nota: Esto puede afectar a información guardada como datos de inicio de sesión o preferencias de sitios web.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Gestionar cookies específicas del sitio
                  </h3>
                  <p>
                    Para un control más preciso, puedes ajustar tu configuración de privacidad y cookies en el navegador.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Bloquear cookies
                  </h3>
                  <p>
                    Aunque la mayoría de navegadores modernos se pueden configurar para evitar que se instalen cookies, esto puede obligarte a ajustar preferencias manualmente cada vez que visites un sitio.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Nota: Algunos servicios y características pueden no funcionar correctamente (por ejemplo, inicios de sesión con perfil).
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 7: Navegadores */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Eliminar Cookies en Navegadores Comunes
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <div className="bg-muted/50 p-4 rounded-lg border border-muted-foreground/20 space-y-2">
                  <p>
                    <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                      Google Chrome
                    </a>
                  </p>
                  <p>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                      Microsoft Edge
                    </a>
                  </p>
                  <p>
                    <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                      Mozilla Firefox
                    </a>
                  </p>
                  <p>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                      Apple Safari
                    </a>
                  </p>
                  <p>
                    <a href="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                      Opera
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 8: Contacto */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">
                Contacto
              </h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>
                  Para más información sobre cómo tratamos las cookies, contacta con nosotros:
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
