import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '../utils/validation'

export function useContactForm(onSubmit) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      clientType: 'Particular',
      itemType: '',
      itemDescription: '',
      message: '',
      photos: []
    }
  })

  const watchedFields = watch()

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    watch: watchedFields,
    onSubmit: handleSubmit(onSubmit)
  }
}
