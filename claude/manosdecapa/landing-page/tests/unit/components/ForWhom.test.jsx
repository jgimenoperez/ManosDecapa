import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ForWhom from '../../../src/components/ForWhom'

describe('ForWhom Component', () => {
  it('should render section heading', () => {
    render(<ForWhom />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('¿Para Quién?')
  })

  it('should render section description', () => {
    render(<ForWhom />)
    const description = screen.getByText(/Ofrecemos servicios adaptados/)
    expect(description).toBeInTheDocument()
  })

  it('should render Particulares section heading', () => {
    render(<ForWhom />)
    const heading = screen.getByRole('heading', { name: /Para Particulares/ })
    expect(heading).toBeInTheDocument()
  })

  it('should render Profesionales section heading', () => {
    render(<ForWhom />)
    const heading = screen.getByRole('heading', { name: /Para Profesionales/ })
    expect(heading).toBeInTheDocument()
  })

  it('should render Particulares description', () => {
    render(<ForWhom />)
    const description = screen.getByText(/mueble antiguo o de valor sentimental/)
    expect(description).toBeInTheDocument()
  })

  it('should render Profesionales description', () => {
    render(<ForWhom />)
    const description = screen.getByText(/restaurador, decorador, anticuario/)
    expect(description).toBeInTheDocument()
  })

  it('should render benefits for Particulares', () => {
    render(<ForWhom />)
    expect(screen.getByText(/Presupuesto sin compromiso/)).toBeInTheDocument()
    expect(screen.getByText(/Recogida y entrega a domicilio/)).toBeInTheDocument()
    expect(screen.getByText(/Trato personalizado/)).toBeInTheDocument()
    expect(screen.getByText(/Garantía de satisfacción/)).toBeInTheDocument()
  })

  it('should render benefits for Profesionales', () => {
    render(<ForWhom />)
    expect(screen.getByText(/Precios especiales para volumen/)).toBeInTheDocument()
    expect(screen.getByText(/Plazos de entrega flexibles/)).toBeInTheDocument()
    expect(screen.getByText(/Transporte a través de nuestros asociados/)).toBeInTheDocument()
    expect(screen.getByText(/Seguimiento de proyectos/)).toBeInTheDocument()
  })

  it('should render contact CTA text', () => {
    render(<ForWhom />)
    const cta = screen.getByText(/¿Eres profesional?/)
    expect(cta).toBeInTheDocument()
  })

  it('should render professional presupuesto link', () => {
    render(<ForWhom />)
    const link = screen.getByRole('link', { name: /Presupuesto Profesional/ })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('should have white background section', () => {
    const { container } = render(<ForWhom />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-white')
  })

  it('should have responsive grid layout with 2 columns on desktop', () => {
    const { container } = render(<ForWhom />)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('md:grid-cols-2')
  })

  it('should have two cards with icons', () => {
    const { container } = render(<ForWhom />)
    const icons = container.querySelectorAll('.text-6xl')
    expect(icons.length).toBe(2)
  })

  it('should have hover effects on cards', () => {
    const { container } = render(<ForWhom />)
    const hoverCards = container.querySelectorAll('.hover-lift')
    expect(hoverCards.length).toBe(2)
  })

  it('should have fade-in animations', () => {
    const { container } = render(<ForWhom />)
    const fadeInElements = container.querySelectorAll('.fade-in')
    expect(fadeInElements.length).toBeGreaterThan(0)
  })

  it('should have checkmarks for all benefits', () => {
    const { container } = render(<ForWhom />)
    const checkmarks = container.querySelectorAll('.text-accent')
    expect(checkmarks.length).toBeGreaterThan(0)
  })

  it('should have container with responsive padding', () => {
    const { container } = render(<ForWhom />)
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toHaveClass('mx-auto')
    expect(containerDiv).toHaveClass('px-4')
  })

  it('should render italic text for each section summary', () => {
    render(<ForWhom />)
    expect(screen.getByText(/Perfecto para recuperar tus piezas favoritas/)).toBeInTheDocument()
    expect(screen.getByText(/Somos tu aliado/)).toBeInTheDocument()
  })
})
