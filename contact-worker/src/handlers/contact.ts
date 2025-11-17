import { validateContactForm } from '../utils/validation';
import { uploadImagesToR2 } from './upload';
import { sendAdminEmail, sendConfirmationEmail, addContactToResend } from './email';
import { ContactResponse, WorkerEnv } from '../types/index';

/**
 * Procesa el formulario de contacto completo
 * 1. Valida datos
 * 2. Sube imágenes a R2
 * 3. Envía emails
 * 4. Añade contacto a Resend
 * 5. Retorna respuesta
 */
export async function processContactForm(
  formData: FormData,
  env: WorkerEnv
): Promise<ContactResponse> {
  try {
    console.log('🔄 Iniciando procesamiento del formulario de contacto...');

    // Paso 1: Extraer datos del FormData
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const mensaje = formData.get('mensaje') as string;
    const files = formData.getAll('imagenes') as File[];

    // Paso 2: Validar datos
    console.log('✓ Validando datos del formulario...');
    const validation = validateContactForm({
      nombre,
      email,
      telefono,
      mensaje,
      imagenes: files,
    });

    if (!validation.success) {
      console.error('❌ Validación fallida:', validation.errors);
      return {
        success: false,
        error: 'Datos inválidos',
        details: validation.errors as Record<string, string[]>,
      };
    }

    const validatedData = validation.data;
    console.log('✓ Datos validados correctamente');

    // Paso 3: Subir imágenes a R2
    console.log('📤 Subiendo imágenes a R2...');
    console.log('📎 Archivos recibidos:', validatedData.imagenes?.length || 0);

    // Log detalles de cada imagen
    if (validatedData.imagenes && validatedData.imagenes.length > 0) {
      for (let i = 0; i < validatedData.imagenes.length; i++) {
        const img = validatedData.imagenes[i];
        console.log(`  Imagen ${i + 1}: ${(img as any).name || 'sin-nombre'}, Tipo: ${(img as any).type}, Tamaño: ${(img as any).size} bytes`);
      }
    }

    let imageUrls: string[] = [];

    if (validatedData.imagenes && validatedData.imagenes.length > 0) {
      try {
        console.log('🔄 Iniciando upload a R2...');
        console.log('📦 R2_BUCKET:', env.R2_BUCKET ? 'presente' : 'undefined');
        console.log('🔗 R2_PUBLIC_URL:', env.R2_PUBLIC_URL);

        imageUrls = await uploadImagesToR2(
          validatedData.imagenes as File[],
          env.R2_BUCKET,
          env.R2_PUBLIC_URL
        );
        console.log(`✓ ${imageUrls.length} imágenes subidas correctamente`);
        console.log('🔗 URLs generadas:', imageUrls);
      } catch (uploadError) {
        const errorMsg = uploadError instanceof Error ? uploadError.message : 'Error desconocido';
        console.error(`❌ Error subiendo imágenes: ${errorMsg}`);
        console.error('📋 Stack:', uploadError);
        return {
          success: false,
          error: `Error al procesar imágenes: ${errorMsg}`,
        };
      }
    } else {
      console.log('⚠️ No hay imágenes para subir');
    }

    // Paso 4: Enviar emails
    console.log('📧 Enviando emails...');

    try {
      // Email al admin
      await sendAdminEmail(
        {
          nombre: validatedData.nombre,
          email: validatedData.email,
          telefono: validatedData.telefono,
          mensaje: validatedData.mensaje,
          imageUrls,
          adminEmail: env.ADMIN_EMAIL,
          fromEmail: env.FROM_EMAIL,
          fromName: env.FROM_NAME,
        },
        env.RESEND_API_KEY
      );

      // Email de confirmación al usuario
      await sendConfirmationEmail(
        validatedData.nombre,
        validatedData.email,
        env.FROM_EMAIL,
        env.FROM_NAME,
        env.RESEND_API_KEY
      );

      console.log('✓ Emails enviados correctamente');
    } catch (emailError) {
      const errorMsg = emailError instanceof Error ? emailError.message : 'Error desconocido';
      console.error(`❌ Error enviando emails: ${errorMsg}`);
      return {
        success: false,
        error: `Error al enviar emails: ${errorMsg}`,
      };
    }

    // Paso 5: Añadir contacto a Resend (con delay para evitar rate limiting)
    console.log('📋 Añadiendo contacto a la base de datos de Resend...');

    try {
      // Delay de 1 segundo para evitar el rate limit de Resend (2 requests/segundo)
      await new Promise(resolve => setTimeout(resolve, 1000));

      await addContactToResend(
        validatedData.nombre,
        validatedData.email,
        env.RESEND_AUDIENCE_ID,
        env.RESEND_API_KEY
      );
      console.log('✓ Contacto añadido a Resend correctamente');
    } catch (contactError) {
      // No es crítico si falla la adición del contacto, solo lo loggeamos
      const errorMsg = contactError instanceof Error ? contactError.message : 'Error desconocido';
      console.error(`⚠️ Error añadiendo contacto a Resend (no crítico): ${errorMsg}`);
      // Continuamos con el flujo normal
    }

    // Paso 6: Retornar respuesta exitosa
    const contactId = `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    console.log(`✅ Contacto procesado exitosamente: ${contactId}`);

    return {
      success: true,
      message: 'Formulario enviado correctamente. Nos pondremos en contacto pronto.',
      contactId,
    };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error no controlado: ${errorMsg}`);

    return {
      success: false,
      error: `Error al procesar el formulario: ${errorMsg}`,
    };
  }
}
