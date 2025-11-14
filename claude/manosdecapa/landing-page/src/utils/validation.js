import { z } from 'zod'

// Email validation
export const emailValidator = z.string().email('Email inválido')

// Phone validation - flexible international format
export const phoneValidator = z
  .string()
  .regex(
    /^(\+?34)?[6789]\d{8}(?:\s*\d)?$|^(\+?34)?\s?[6789]\d{2}\s?\d{3}\s?\d{3}$/,
    'Teléfono inválido. Usa formato: +34 666 777 888'
  )

// Contact Form Zod Schema
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Nombre debe tener al menos 2 caracteres')
    .max(100, 'Nombre no puede exceder 100 caracteres')
    .regex(/^[a-zA-Záéíóúñ\s'-]+$/, 'Nombre contiene caracteres no válidos'),
  email: emailValidator,
  phone: phoneValidator,
  clientType: z.enum(['Particular', 'Profesional'], {
    errorMap: () => ({ message: 'Selecciona Particular o Profesional' })
  }),
  itemType: z.enum(['Silla', 'Mesa', 'Cómoda', 'Puerta', 'Ventana', 'Metal', 'Otro'], {
    errorMap: () => ({ message: 'Selecciona el tipo de mueble' })
  }),
  itemDescription: z
    .string()
    .min(10, 'Descripción debe tener al menos 10 caracteres')
    .max(1000, 'Descripción no puede exceder 1000 caracteres'),
  message: z
    .string()
    .max(2000, 'Mensaje no puede exceder 2000 caracteres')
    .optional(),
  photos: z
    .array(
      z.object({
        name: z.string(),
        size: z.number().max(5242880, 'Archivo no puede exceder 5MB')
      })
    )
    .max(5, 'Máximo 5 fotos')
    .optional()
})

// Validation helper functions
export const validateEmail = (email) => {
  try {
    emailValidator.parse(email)
    return { valid: true, error: null }
  } catch (error) {
    return { valid: false, error: error.message }
  }
}

export const validatePhone = (phone) => {
  try {
    phoneValidator.parse(phone)
    return { valid: true, error: null }
  } catch (error) {
    return { valid: false, error: error.message }
  }
}

export const validateContactForm = (data) => {
  try {
    const validated = contactFormSchema.parse(data)
    return { valid: true, data: validated, errors: null }
  } catch (error) {
    return {
      valid: false,
      data: null,
      errors: error.errors.map(e => ({
        field: e.path[0],
        message: e.message
      }))
    }
  }
}
