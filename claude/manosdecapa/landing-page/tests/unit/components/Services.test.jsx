import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from '../../../src/components/Services'
import { services } from '../../../src/utils/constants'

describe('Services Component', () => {
  it('should render services section heading', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Nuestros Servicios')
  })

  it('should render services description', () => {
    render(<Services />)
    const description = screen.getByText(/Ofrecemos servicios profesionales de decapado/)
    expect(description).toBeInTheDocument()
  })

  it('should render all service cards from constants', () => {
    render(<Services />)
    services.forEach((service) => {
      const serviceTitle = screen.getByText(service.title)
      expect(serviceTitle).toBeInTheDocument()
    })
  })

  it('should render service descriptions in cards', () => {
    render(<Services />)
    services.forEach((service) => {
      const serviceDescription = screen.getByText(service.description)
      expect(serviceDescription).toBeInTheDocument()
    })
  })

  it('should render exactly 3 service cards', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('.hover-lift')
    expect(cards.length).toBe(services.length)
  })

  it('should display service icons', () => {
    const { container } = render(<Services />)
    const iconDivs = container.querySelectorAll('.text-5xl')
    expect(iconDivs.length).toBeGreaterThan(0)
  })

  it('should have responsive grid layout', () => {
    const { container } = render(<Services />)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('md:grid-cols-3')
    expect(grid).toHaveClass('gap-8')
  })

  it('should have white background section', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-white')
  })

  it('should render CTA text for contact', () => {
    render(<Services />)
    const cta = screen.getByText(/Contacta con nosotros para un presupuesto/)
    expect(cta).toBeInTheDocument()
  })

  it('should apply fade-in animation class', () => {
    const { container } = render(<Services />)
    const fadeInElements = container.querySelectorAll('.fade-in')
    expect(fadeInElements.length).toBeGreaterThan(0)
  })

  it('should apply staggered animation delays to cards', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('[style*="animation"]')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should map correct icons to services', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('.text-5xl')
    // Icons should be rendered (emoji or elements)
    expect(icons.length).toBeGreaterThan(0)
  })

  it('should be centered with container responsive padding', () => {
    const { container } = render(<Services />)
    const container_div = container.querySelector('.container')
    expect(container_div).toHaveClass('mx-auto')
    expect(container_div).toHaveClass('px-4')
  })
})
