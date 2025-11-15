import { useState } from 'react'
import { useContactForm } from '../hooks/useContactForm'
import Button from './common/Button'
import { contactFormSchema } from '../utils/validation'

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, reset } = useContactForm()
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data) => {
    try {
      setSubmitStatus(null)
      setSubmitMessage('')

      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const result = await response.json()

      setSubmitStatus('success')
      setSubmitMessage('¡Presupuesto solicitado! Nos pondremos en contacto pronto.')
      reset()

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('Error al enviar el formulario. Por favor, intenta de nuevo.')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Solicita tu Presupuesto
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y nos pondremos en contacto para ofrecerte un presupuesto sin compromiso
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8 fade-in">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {submitMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {submitMessage}
              </div>
            )}

            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('fullName')}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                placeholder="+34  654 49 69 60"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Client Type */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Quién eres? *
              </label>
              <select
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.clientType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('clientType')}
              >
                <option value="">Selecciona una opción</option>
                <option value="particular">Particular</option>
                <option value="profesional">Profesional</option>
              </select>
              {errors.clientType && (
                <p className="text-red-500 text-sm mt-1">{errors.clientType.message}</p>
              )}
            </div>

            {/* Item Type */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Tipo de Mueble *
              </label>
              <select
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.itemType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('itemType')}
              >
                <option value="">Selecciona una opción</option>
                <option value="silla">Silla</option>
                <option value="pequeño">Mueble Pequeño</option>
                <option value="gabinete">Gabinete</option>
                <option value="puerta">Puerta</option>
                <option value="otro">Otro</option>
              </select>
              {errors.itemType && (
                <p className="text-red-500 text-sm mt-1">{errors.itemType.message}</p>
              )}
            </div>

            {/* Item Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Descripción del Mueble *
              </label>
              <textarea
                placeholder="Describe tu mueble, material, estado actual, etc."
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.itemDescription ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('itemDescription')}
              />
              {errors.itemDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.itemDescription.message}</p>
              )}
            </div>

            {/* Additional Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Mensaje Adicional
              </label>
              <textarea
                placeholder="Información adicional que consideres importante..."
                rows="3"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('message')}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Fotos (máximo 5)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.photos ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                {...register('photos')}
              />
              {errors.photos && (
                <p className="text-red-500 text-sm mt-1">{errors.photos.message}</p>
              )}
              <p className="text-gray-500 text-sm mt-1">
                Puedes añadir fotos de tu mueble para ayudarnos a darte un presupuesto más preciso
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Presupuesto'}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => {
                  reset()
                  setSubmitStatus(null)
                  setSubmitMessage('')
                }}
                disabled={isSubmitting}
              >
                Limpiar
              </Button>
            </div>

            {/* Privacy Notice */}
            <p className="text-gray-500 text-sm text-center mt-6">
              Al enviar este formulario aceptas nuestra política de privacidad y términos de servicio.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
