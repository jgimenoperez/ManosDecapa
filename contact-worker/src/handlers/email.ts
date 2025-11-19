import { Resend } from 'resend';

/**
 * Valida que una URL de imagen sea accesible (sin descargarla)
 */
export async function validateImageUrl(imageUrl: string): Promise<boolean> {
  try {
    const response = await fetch(imageUrl, { method: 'HEAD' });
    const isAccessible = response.ok;
    if (!isAccessible) {
      console.warn(`⚠️ Imagen no accesible: ${imageUrl} (Status: ${response.status})`);
    }
    return isAccessible;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
    console.warn(`⚠️ Error validando imagen ${imageUrl}: ${errorMsg}`);
    return false;
  }
}

interface EmailParams {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  imageUrls: string[];
  adminEmails: string[];
  fromEmail: string;
  fromName: string;
}

/**
 * Construye el HTML del email para el admin
 */
function buildAdminEmailHTML(
  nombre: string,
  email: string,
  telefono: string,
  mensaje: string,
  imageUrls: string[]
): string {
  const imageHTML = imageUrls
    .map(
      (url) => `
    <div style="margin: 24px 0; text-align: center;">
      <img src="${url}" alt="Imagen del contacto" style="max-width: 100%; height: auto; border-radius: 8px; max-height: 400px; display: block; border: 3px solid #e8d4c0;">
    </div>
  `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #2C1810;
            line-height: 1.6;
            background-color: #FFF8DC;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            padding: 40px 32px;
            text-align: center;
            border-bottom: 4px solid #F4A460;
          }
          .header-icon {
            font-size: 48px;
            margin-bottom: 16px;
            display: block;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
          }
          .header-subtitle {
            font-size: 14px;
            opacity: 0.95;
            margin-top: 8px;
            font-weight: 300;
          }
          .content {
            padding: 40px 32px;
          }
          .greeting {
            font-size: 18px;
            color: #8B4513;
            margin-bottom: 24px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
          }
          .field {
            margin: 20px 0;
            padding-bottom: 20px;
            border-bottom: 1px solid #e8d4c0;
          }
          .field:last-of-type {
            border-bottom: none;
          }
          .label {
            font-weight: 600;
            color: #8B4513;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: block;
            margin-bottom: 8px;
          }
          .value {
            padding: 12px 16px;
            background-color: #FFF8DC;
            border-left: 4px solid #F4A460;
            border-radius: 4px;
            word-break: break-word;
            white-space: pre-wrap;
          }
          .value a {
            color: #8B4513;
            text-decoration: none;
            font-weight: 600;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .images-section {
            margin: 32px 0;
            padding: 24px;
            background-color: #FFF8DC;
            border-radius: 8px;
            border: 2px dashed #F4A460;
          }
          .images-title {
            font-weight: 600;
            color: #8B4513;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .images-title-icon {
            font-size: 20px;
          }
          .divider {
            height: 2px;
            background: linear-gradient(90deg, #F4A460 0%, transparent 100%);
            margin: 32px 0;
          }
          .footer {
            background-color: #2C1810;
            color: #FFF8DC;
            padding: 24px 32px;
            text-align: center;
            font-size: 12px;
            line-height: 1.6;
          }
          .footer-brand {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 8px;
            font-family: 'Poppins', sans-serif;
          }
          .footer-text {
            opacity: 0.85;
            font-size: 11px;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            padding: 12px 28px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 16px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: opacity 0.3s ease;
          }
          .cta-button:hover {
            opacity: 0.9;
          }
          @media (max-width: 600px) {
            .container {
              margin: 0;
              border-radius: 0;
            }
            .header {
              padding: 32px 24px;
            }
            .content {
              padding: 24px;
            }
            .header h1 {
              font-size: 24px;
            }
            .images-section {
              padding: 16px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="header-icon">🎨</span>
            <h1>Nuevo Presupuesto Recibido</h1>
            <p class="header-subtitle">Datos del contacto</p>
          </div>

          <div class="content">
            <div class="greeting">¡Hola! Un nuevo cliente solicita presupuesto.</div>

            <div class="field">
              <span class="label">👤 Nombre</span>
              <div class="value">${escapeHTML(nombre)}</div>
            </div>

            <div class="field">
              <span class="label">📧 Email</span>
              <div class="value"><a href="mailto:${escapeHTML(email)}">${escapeHTML(email)}</a></div>
            </div>

            <div class="field">
              <span class="label">📞 Teléfono</span>
              <div class="value"><a href="tel:${escapeHTML(telefono)}">${escapeHTML(telefono) || 'No proporcionado'}</a></div>
            </div>

            <div class="field">
              <span class="label">💬 Mensaje</span>
              <div class="value">${escapeHTML(mensaje).replace(/\n/g, '<br>')}</div>
            </div>

            ${imageHTML ? `
              <div class="divider"></div>
              <div class="images-section">
                <div class="images-title">
                  <span class="images-title-icon">📸</span>
                  <span>Imágenes adjuntas (${imageUrls.length})</span>
                </div>
                ${imageHTML}
              </div>
            ` : ''}
          </div>

          <div class="footer">
            <div class="footer-brand">✨ Manos De Capa ✨</div>
            <div class="footer-text">
              <p>Devolvemos la vida a la madera</p>
              <p style="margin-top: 8px; opacity: 0.7;">Formulario de contacto automático</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Construye el HTML del email de confirmación para el usuario
 * Versión simplificada para evitar spam filters
 */
function buildConfirmationEmailHTML(nombre: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 0;
            background-color: #f9f9f9;
            padding: 20px;
          }
          .header {
            background-color: #8B4513;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background-color: white;
            padding: 20px;
            margin-top: 0;
          }
          .message {
            font-size: 14px;
            color: #333;
            margin: 10px 0;
          }
          .info-box {
            background-color: #f5f5f5;
            border-left: 4px solid #8B4513;
            padding: 15px;
            margin: 15px 0;
          }
          .cta-button {
            display: inline-block;
            background-color: #8B4513;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 15px;
          }
          .footer {
            background-color: #f9f9f9;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #ddd;
            margin-top: 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Solicitud Recibida</h1>
          </div>

          <div class="content">
            <p class="message">Hola ${escapeHTML(nombre)},</p>

            <p class="message">
              Hemos recibido tu solicitud de presupuesto correctamente. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en menos de 24 horas.
            </p>

            <div class="info-box">
              <p style="margin: 0; font-weight: bold;">Siguiente paso</p>
              <p style="margin: 5px 0 0 0;">Nos pondremos en contacto por correo electrónico con un presupuesto personalizado.</p>
            </div>

            <p class="message">
              Si necesitas añadir más información o tienes preguntas, puedes responder directamente a este email.
            </p>

            <center>
              <a href="https://manosdecapa.es" class="cta-button">Visita nuestra web</a>
            </center>
          </div>

          <div class="footer">
            <p>Manos De Capa - Devolvemos la vida a la madera</p>
            <p style="margin-top: 10px; color: #999; font-size: 11px;">Este es un email automatizado. Por favor, no respondas con datos sensibles.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Escapa caracteres especiales HTML
 */
function escapeHTML(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Envía email al admin con los datos del contacto
 * Soporta envío a múltiples direcciones de email
 */
export async function sendAdminEmail(
  params: EmailParams,
  apiKey: string
): Promise<{ id: string }> {
  const resend = new Resend(apiKey);

  const html = buildAdminEmailHTML(
    params.nombre,
    params.email,
    params.telefono,
    params.mensaje,
    params.imageUrls
  );

  try {
    // Enviar a cada email de admin de forma secuencial con delays para evitar rate limiting
    const allIds: string[] = [];

    for (let i = 0; i < params.adminEmails.length; i++) {
      const adminEmail = params.adminEmails[i];

      try {
        const response = await resend.emails.send({
          from: `${params.fromName} <${params.fromEmail}>`,
          to: adminEmail,
          subject: `📧 Nuevo contacto de ${params.nombre}`,
          html,
        });

        if (!response.data?.id) {
          console.error(`⚠️ No se obtuvo ID para email a ${adminEmail}:`, response);
          continue;
        }

        allIds.push(response.data.id);
        console.log(`✅ Email admin enviado a ${adminEmail}: ${response.data.id}`);

        // Delay de 250ms entre envíos para evitar rate limit
        if (i < params.adminEmails.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 250));
        }
      } catch (emailError) {
        const errorMsg = emailError instanceof Error ? emailError.message : 'Error desconocido';
        console.error(`❌ Error enviando email a ${adminEmail}: ${errorMsg}`);
        throw emailError;
      }
    }

    if (allIds.length === 0) {
      throw new Error('No se enviaron emails a ningún destinatario');
    }

    console.log(`✅ Emails admin enviados a ${allIds.length}/${params.adminEmails.length} destinatarios: ${allIds.join(', ')}`);
    return { id: allIds[0] }; // Retornar el primer ID como referencia
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error enviando email admin: ${errorMessage}`);
    throw new Error(`Error enviando email: ${errorMessage}`);
  }
}

/**
 * Envía email de confirmación al usuario
 */
export async function sendConfirmationEmail(
  nombre: string,
  email: string,
  fromEmail: string,
  fromName: string,
  apiKey: string
): Promise<{ id: string }> {
  const resend = new Resend(apiKey);

  const html = buildConfirmationEmailHTML(nombre);

  try {
    const response = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: email,
      subject: 'Confirmación de presupuesto - Manos De Capa',
      html,
      reply_to: 'contacto@manosdecapa.es',
    });

    console.log(`📋 Respuesta Resend confirmación:`, JSON.stringify(response, null, 2));

    if (!response.data?.id) {
      const errorMsg = response.error ? JSON.stringify(response.error) : 'Sin data.id';
      throw new Error(`No se recibió ID de email de Resend: ${errorMsg}`);
    }

    console.log(`✅ Email confirmación enviado a ${email}: ${response.data.id}`);
    return { id: response.data.id };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error enviando email confirmación: ${errorMessage}`);
    console.error(`📋 Error completo:`, error);
    throw new Error(`Error enviando confirmación: ${errorMessage}`);
  }
}

/**
 * Añade un contacto a la base de datos de Resend
 */
export async function addContactToResend(
  nombre: string,
  email: string,
  audienceId: string,
  apiKey: string
): Promise<{ id: string }> {
  const resend = new Resend(apiKey);

  try {
    // Dividir nombre en firstName y lastName
    const nameParts = nombre.trim().split(' ');
    const firstName = nameParts[0] || nombre;
    const lastName = nameParts.slice(1).join(' ') || '';

    console.log(`📋 Intentando crear contacto en Resend:`);
    console.log(`   Email: ${email}`);
    console.log(`   FirstName: ${firstName}`);
    console.log(`   LastName: ${lastName}`);
    console.log(`   AudienceId: ${audienceId}`);
    console.log(`   API Key presente: ${apiKey ? 'Sí' : 'No'}`);

    const response = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: audienceId,
    });

    console.log(`📋 Respuesta de Resend:`, JSON.stringify(response, null, 2));

    if (!response.data?.id) {
      throw new Error('No se recibió ID de contacto de Resend');
    }

    console.log(`✅ Contacto añadido a Resend: ${response.data.id} (${email})`);
    return { id: response.data.id };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error añadiendo contacto a Resend: ${errorMessage}`);
    console.error(`📋 Error completo:`, error);

    // Si el contacto ya existe, no es un error crítico
    if (errorMessage.includes('already exists') || errorMessage.includes('duplicate')) {
      console.log(`⚠️ El contacto ${email} ya existe en la base de datos de Resend`);
      return { id: 'existing-contact' };
    }

    throw new Error(`Error añadiendo contacto: ${errorMessage}`);
  }
}
