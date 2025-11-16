import { z } from 'zod';

// Validación para campos de texto
const textSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),

  email: z
    .string()
    .email('Email inválido')
    .max(100, 'El email no puede exceder 100 caracteres')
    .toLowerCase(),

  telefono: z
    .string()
    .min(9, 'El teléfono debe tener al menos 9 dígitos')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .regex(/^[+\d\s\-()]+$/, 'El teléfono contiene caracteres inválidos'),

  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(5000, 'El mensaje no puede exceder 5000 caracteres')
    .trim(),
});

// Validación para archivos
const fileSchema = z
  .instanceof(File)
  .refine(
    (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
    'Solo se permiten imágenes JPG, PNG o WebP'
  )
  .refine(
    (file) => file.size <= 5 * 1024 * 1024, // 5MB
    'Las imágenes no pueden exceder 5MB'
  );

// Schema completo del formulario
export const contactFormSchema = textSchema.extend({
  imagenes: z
    .array(fileSchema)
    .max(3, 'Se permite un máximo de 3 imágenes')
    .optional()
    .default([]),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

// Función para validar datos
export function validateContactForm(data: unknown) {
  try {
    return {
      success: true,
      data: contactFormSchema.parse(data),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
      };
    }
    return {
      success: false,
      errors: { general: ['Error desconocido en validación'] },
    };
  }
}

// Función para validar archivos únicamente
export function validateImages(files: unknown) {
  try {
    const schema = z
      .array(fileSchema)
      .max(3, 'Se permite un máximo de 3 imágenes')
      .optional()
      .default([]);

    return {
      success: true,
      data: schema.parse(files),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
      };
    }
    return {
      success: false,
      errors: { general: ['Error en validación de imágenes'] },
    };
  }
}

// Función para validar email únicamente
export function validateEmail(email: unknown) {
  try {
    return {
      success: true,
      data: z.string().email('Email inválido').parse(email),
    };
  } catch (error) {
    return {
      success: false,
      error: 'Email inválido',
    };
  }
}
