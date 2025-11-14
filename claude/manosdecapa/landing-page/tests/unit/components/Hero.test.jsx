import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from '../../../src/components/Hero'

describe('Hero Component', () => {
  it('should render hero section with main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Manos Decapa')
  })

  it('should render hero section with subtitle', () => {
    render(<Hero />)
    const subtitle = screen.getByRole('heading', { level: 2 })
    expect(subtitle).toHaveTextContent('Decapado Profesional de Muebles en Valencia')
  })

  it('should render hero description paragraph', () => {
    render(<Hero />)
    const description = screen.getByText(/Recuperamos la madera original/)
    expect(description).toBeInTheDocument()
  })

  it('should render CTA buttons', () => {
    render(<Hero />)
    const presupuestoBtn = screen.getByRole('button', { name: /Solicitar Presupuesto/ })
    const conocerBtn = screen.getByRole('button', { name: /Conoce Nuestro Trabajo/ })
    expect(presupuestoBtn).toBeInTheDocument()
    expect(conocerBtn).toBeInTheDocument()
  })

  it('should scroll to contact section when presupuesto button is clicked', async () => {
    const user = userEvent.setup()

    // Create a mock contact element
    const contactDiv = document.createElement('div')
    contactDiv.id = 'contact'
    document.body.appendChild(contactDiv)

    const scrollIntoViewMock = vi.fn()
    contactDiv.scrollIntoView = scrollIntoViewMock

    render(<Hero />)
    const presupuestoBtn = screen.getByRole('button', { name: /Solicitar Presupuesto/ })

    await user.click(presupuestoBtn)

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })

    document.body.removeChild(contactDiv)
  })

  it('should render trust indicators', () => {
    render(<Hero />)
    const experienceText = screen.getByText(/20\+ años de experiencia/)
    const processText = screen.getByText(/Proceso profesional garantizado/)
    expect(experienceText).toBeInTheDocument()
    expect(processText).toBeInTheDocument()
  })

  it('should have fade-in animation class', () => {
    const { container } = render(<Hero />)
    const fadeInElement = container.querySelector('.fade-in')
    expect(fadeInElement).toBeInTheDocument()
  })

  it('should render background gradient section', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-gradient-to-r')
    expect(section.className).toContain('from-primary')
    expect(section.className).toContain('to-secondary')
  })

  it('should render hero with responsive grid layout', () => {
    const { container } = render(<Hero />)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('md:grid-cols-2')
    expect(grid).toHaveClass('gap-12')
  })

  it('should render text in white color for contrast on gradient', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('text-white')
  })
})
