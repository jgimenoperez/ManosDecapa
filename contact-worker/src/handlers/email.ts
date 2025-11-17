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
 */
function buildConfirmationEmailHTML(nombre: string): string {
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
            font-size: 64px;
            margin-bottom: 16px;
            display: block;
            animation: pulse 2s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          .header h1 {
            margin: 0;
            font-size: 32px;
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
            text-align: center;
          }
          .greeting {
            font-size: 20px;
            color: #8B4513;
            margin-bottom: 20px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
          }
          .message {
            font-size: 16px;
            color: #2C1810;
            line-height: 1.8;
            margin-bottom: 16px;
          }
          .highlight {
            color: #D2691E;
            font-weight: 600;
          }
          .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent, #F4A460, transparent);
            margin: 32px 0;
          }
          .info-box {
            background-color: #FFF8DC;
            border-left: 4px solid #F4A460;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .info-box h3 {
            color: #8B4513;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .info-box p {
            color: #2C1810;
            font-size: 14px;
          }
          .cta-section {
            margin: 32px 0;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            padding: 14px 40px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            transition: opacity 0.3s ease, transform 0.3s ease;
            border: none;
            cursor: pointer;
          }
          .cta-button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
          }
          .features {
            display: flex;
            justify-content: space-around;
            margin: 28px 0;
            padding: 20px;
            background-color: #FFF8DC;
            border-radius: 8px;
            flex-wrap: wrap;
          }
          .feature {
            text-align: center;
            flex: 1;
            min-width: 120px;
            padding: 10px;
          }
          .feature-icon {
            font-size: 32px;
            margin-bottom: 8px;
          }
          .feature-text {
            font-size: 12px;
            color: #8B4513;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }
          .footer {
            background-color: #2C1810;
            color: #FFF8DC;
            padding: 28px 32px;
            text-align: center;
            font-size: 12px;
            line-height: 1.8;
          }
          .footer-brand {
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 8px;
            font-family: 'Poppins', sans-serif;
          }
          .footer-tagline {
            opacity: 0.8;
            font-size: 12px;
            font-style: italic;
          }
          .social-links {
            margin-top: 12px;
            font-size: 12px;
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
              padding: 28px 24px;
            }
            .header h1 {
              font-size: 28px;
            }
            .greeting {
              font-size: 18px;
            }
            .features {
              flex-direction: row;
              gap: 8px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="header-icon">✅</span>
            <h1>¡Presupuesto Solicitado!</h1>
            <p class="header-subtitle">Hemos recibido tu solicitud correctamente</p>
          </div>

          <div class="content">
            <div class="greeting">¡Hola ${escapeHTML(nombre)}!</div>

            <div class="message">
              Gracias por confiar en <span class="highlight">Manos Decapa</span>. Hemos recibido tu solicitud de presupuesto correctamente.
            </div>

            <div class="info-box">
              <h3>⏱️ ¿Cuánto tiempo tardamos?</h3>
              <p>Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en menos de <span class="highlight">24 horas</span> con un presupuesto personalizado.</p>
            </div>

            <div class="features">
              <div class="feature">
                <div class="feature-icon">💰</div>
                <div class="feature-text">100% Gratuito</div>
              </div>
              <div class="feature">
                <div class="feature-icon">📋</div>
                <div class="feature-text">Sin Compromiso</div>
              </div>
              <div class="feature">
                <div class="feature-icon">🎨</div>
                <div class="feature-text">Personalizado</div>
              </div>
            </div>

            <div class="divider"></div>

            <div class="message" style="margin-top: 20px;">
              Si necesitas añadir más información o cambiar algo de tu solicitud, no dudes en <span class="highlight">responder a este email</span>.
            </div>

            <div class="cta-section">
              <p style="font-size: 12px; color: #8B4513; margin-bottom: 16px;">EXPLORA NUESTROS SERVICIOS</p>
              <a href="https://manosdecapa.es" class="cta-button">Visita Nuestra Web</a>
            </div>
          </div>

          <div class="footer">
            <div class="footer-brand">✨ Manos De Capa ✨</div>
            <div class="footer-tagline">Devolvemos la vida a la madera</div>
            <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(255, 248, 220, 0.2);">
              <p style="font-size: 11px; opacity: 0.7;">Este es un email automatizado. Por favor, no respondas datos sensibles.</p>
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
