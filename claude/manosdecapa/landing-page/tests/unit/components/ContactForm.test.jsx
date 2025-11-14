import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '../../../src/components/ContactForm'

describe('ContactForm Component', () => {
  it('should render contact form section heading', () => {
    render(<ContactForm />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Solicita tu Presupuesto')
  })

  it('should render form description', () => {
    render(<ContactForm />)
    const description = screen.getByText(/Completa el formulario/)
    expect(description).toBeInTheDocument()
  })

  it('should render all required form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/\+34 600 123 456/)).toBeInTheDocument()
  })

  it('should render client type select field', () => {
    render(<ContactForm />)
    const select = screen.getByDisplayValue('Selecciona una opción')
    expect(select).toBeInTheDocument()
  })

  it('should render item type select with options', () => {
    const { container } = render(<ContactForm />)
    const selects = container.querySelectorAll('select')
    expect(selects.length).toBe(2)
  })

  it('should render description textarea', () => {
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText(/Describe tu mueble/)
    expect(textarea).toBeInTheDocument()
  })

  it('should render file upload field', () => {
    const { container } = render(<ContactForm />)
    const fileInputs = container.querySelectorAll('input[type="file"]')
    expect(fileInputs.length).toBe(1)
  })

  it('should render submit button', () => {
    render(<ContactForm />)
    const submitBtn = screen.getByRole('button', { name: /Solicitar Presupuesto/ })
    expect(submitBtn).toBeInTheDocument()
  })

  it('should render clear button', () => {
    render(<ContactForm />)
    const clearBtn = screen.getByRole('button', { name: /Limpiar/ })
    expect(clearBtn).toBeInTheDocument()
  })

  it('should render privacy notice', () => {
    render(<ContactForm />)
    const notice = screen.getByText(/política de privacidad/)
    expect(notice).toBeInTheDocument()
  })

  it('should have contact section with id for anchor linking', () => {
    const { container } = render(<ContactForm />)
    const section = container.querySelector('#contact')
    expect(section).toBeInTheDocument()
  })

  it('should have bg-background class for styling', () => {
    const { container } = render(<ContactForm />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-background')
  })

  it('should have form inputs with proper attributes', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText('Tu nombre')
    const emailInput = screen.getByPlaceholderText('tu@email.com')
    const phoneInput = screen.getByPlaceholderText(/\+34 600 123 456/)

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
  })

  it('should support typing in name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText('Tu nombre')
    await user.type(nameInput, 'John Doe')

    expect(nameInput.value).toBe('John Doe')
  })

  it('should support typing in email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const emailInput = screen.getByPlaceholderText('tu@email.com')
    await user.type(emailInput, 'john@example.com')

    expect(emailInput.value).toBe('john@example.com')
  })

  it('should have form styling classes', () => {
    const { container } = render(<ContactForm />)
    const form = container.querySelector('form')
    expect(form.className).toContain('bg-white')
    expect(form.className).toContain('rounded-lg')
    expect(form.className).toContain('shadow-lg')
  })

  it('should have fade-in animations', () => {
    const { container } = render(<ContactForm />)
    const fadeInElements = container.querySelectorAll('.fade-in')
    expect(fadeInElements.length).toBeGreaterThan(0)
  })

  it('should display labels for all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByText(/Nombre Completo/)).toBeInTheDocument()
    expect(screen.getByText(/Teléfono/)).toBeInTheDocument()
    expect(screen.getByText(/¿Quién eres?/)).toBeInTheDocument()
    expect(screen.getByText(/Tipo de Mueble/)).toBeInTheDocument()
    expect(screen.getByText(/Descripción del Mueble/)).toBeInTheDocument()
  })
})
