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
            background: linear-gradient(135deg, #F4A460 0%, #D2691E 100%);
            color: white;
            padding: 12px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 700;
            margin-top: 16px;
            border: 2px solid #F4A460;
            cursor: pointer;
            font-size: 14px;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease;
            box-shadow: 0 3px 10px rgba(244, 164, 96, 0.3);
            letter-spacing: 0.3px;
            text-transform: uppercase;
          }
          .cta-button:hover {
            box-shadow: 0 5px 15px rgba(244, 164, 96, 0.5);
            transform: translateY(-2px);
            background: linear-gradient(135deg, #F4A460 0%, #8B4513 100%);
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
            padding: 32px;
            text-align: center;
            border-bottom: 4px solid #F4A460;
          }
          .header-branding {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
          }
          .header-logo {
            width: 52px;
            height: 52px;
          }
          .header-brand-name {
            font-family: 'Great Vibes', cursive;
            font-size: 32px;
            font-weight: 400;
            margin: 0;
            letter-spacing: 2px;
            color: white;
          }
          .header-icon {
            font-size: 56px;
            margin-bottom: 12px;
            display: block;
            animation: pulse 2s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.5px;
          }
          .header-subtitle {
            font-size: 13px;
            opacity: 0.92;
            margin-top: 6px;
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
            background: linear-gradient(135deg, #F4A460 0%, #D2691E 100%);
            color: white;
            padding: 16px 48px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease;
            border: 2px solid #F4A460;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(244, 164, 96, 0.3);
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .cta-button:hover {
            box-shadow: 0 6px 20px rgba(244, 164, 96, 0.5);
            transform: translateY(-3px);
            background: linear-gradient(135deg, #F4A460 0%, #8B4513 100%);
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
            <div class="header-branding">
              <img src="data:image/png;base64,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" alt="Manos Decapa" class="header-logo">
              <h2 class="header-brand-name">Manos Decapa</h2>
            </div>
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
