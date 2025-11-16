import { Resend } from 'resend';

interface EmailParams {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  imageUrls: string[];
  adminEmail: string;
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
    <div style="margin: 20px 0; text-align: center;">
      <img src="${url}" alt="Imagen del contacto" style="max-width: 100%; height: auto; border-radius: 8px; max-height: 400px;">
    </div>
  `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
          }
          .header {
            background-color: #007bff;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background-color: white;
            padding: 20px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin: 15px 0;
          }
          .label {
            font-weight: bold;
            color: #007bff;
          }
          .value {
            margin-top: 5px;
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 4px;
          }
          .images {
            margin: 20px 0;
            padding-top: 20px;
            border-top: 1px solid #ddd;
          }
          .footer {
            text-align: center;
            color: #666;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Nuevo Contacto Recibido</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Nombre:</span>
              <div class="value">${escapeHTML(nombre)}</div>
            </div>

            <div class="field">
              <span class="label">Email:</span>
              <div class="value"><a href="mailto:${escapeHTML(email)}">${escapeHTML(email)}</a></div>
            </div>

            <div class="field">
              <span class="label">Teléfono:</span>
              <div class="value"><a href="tel:${escapeHTML(telefono)}">${escapeHTML(telefono)}</a></div>
            </div>

            <div class="field">
              <span class="label">Mensaje:</span>
              <div class="value">${escapeHTML(mensaje).replace(/\n/g, '<br>')}</div>
            </div>

            ${imageHTML ? `<div class="images"><span class="label">Imágenes adjuntas:</span>${imageHTML}</div>` : ''}

            <div class="footer">
              <p>Este email fue enviado desde tu formulario de contacto de Manos De Capa</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Construye el HTML del email de confirmación para el usuario
 */
function buildConfirmationEmailHTML(nombre: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
          }
          .header {
            background-color: #28a745;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .content {
            background-color: white;
            padding: 20px;
            border-radius: 0 0 8px 8px;
            text-align: center;
          }
          .content h2 {
            color: #28a745;
          }
          .footer {
            text-align: center;
            color: #666;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Mensaje Recibido</h1>
          </div>
          <div class="content">
            <h2>¡Hola ${escapeHTML(nombre)}!</h2>
            <p>Hemos recibido tu mensaje correctamente.</p>
            <p>Nos pondremos en contacto contigo pronto.</p>
            <p>Gracias por contactarnos.</p>
            <div class="footer">
              <p>Manos De Capa</p>
            </div>
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
    const response = await resend.emails.send({
      from: `${params.fromName} <${params.fromEmail}>`,
      to: params.adminEmail,
      subject: `📧 Nuevo contacto de ${params.nombre}`,
      html,
    });

    if (!response.data?.id) {
      throw new Error('No se recibió ID de email de Resend');
    }

    console.log(`✅ Email admin enviado: ${response.data.id}`);
    return { id: response.data.id };
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
      subject: '✅ Hemos recibido tu mensaje',
      html,
    });

    if (!response.data?.id) {
      throw new Error('No se recibió ID de email de Resend');
    }

    console.log(`✅ Email confirmación enviado a ${email}: ${response.data.id}`);
    return { id: response.data.id };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error enviando email confirmación: ${errorMessage}`);
    throw new Error(`Error enviando confirmación: ${errorMessage}`);
  }
}
