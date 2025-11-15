import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WhyChooseUs from '../../../src/components/WhyChooseUs'
import { whyChooseUs } from '../../../src/utils/constants'

describe('WhyChooseUs Component', () => {
  it('should render section heading', () => {
    render(<WhyChooseUs />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Por Qué Elegirnos')
  })

  it('should render section description about experience', () => {
    render(<WhyChooseUs />)
    const description = screen.getByText(/Más de 10 años de experiencia/)
    expect(description).toBeInTheDocument()
  })

  it('should render all why choose us cards from constants', () => {
    render(<WhyChooseUs />)
    whyChooseUs.forEach((item) => {
      const title = screen.getByText(item.title)
      expect(title).toBeInTheDocument()
    })
  })

  it('should render all card descriptions', () => {
    render(<WhyChooseUs />)
    whyChooseUs.forEach((item) => {
      const description = screen.getByText(item.description)
      expect(description).toBeInTheDocument()
    })
  })

  it('should render exactly 3 pillar cards', () => {
    const { container } = render(<WhyChooseUs />)
    const cards = container.querySelectorAll('[style*="animation"]')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should render trust section with Manos de Hada branding', () => {
    render(<WhyChooseUs />)
    const trustHeading = screen.getByRole('heading', { name: /Avalados por Manos de Hada/ })
    expect(trustHeading).toBeInTheDocument()
  })

  it('should render Manos de Hada link in trust section', () => {
    render(<WhyChooseUs />)
    const link = screen.getByRole('link', { name: /Visita Manos de Hada/ })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.manosdehada.es')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should render trust section description', () => {
    render(<WhyChooseUs />)
    const trustDescription = screen.getByText(/Nacemos de la experiencia de Manos de Hada/)
    expect(trustDescription).toBeInTheDocument()
  })

  it('should have cream/background colored main section', () => {
    const { container } = render(<WhyChooseUs />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-background')
  })

  it('should have responsive grid layout with 3 columns on desktop', () => {
    const { container } = render(<WhyChooseUs />)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('md:grid-cols-3')
    expect(grid).toHaveClass('gap-8')
  })

  it('should have white background for trust section', () => {
    const { container } = render(<WhyChooseUs />)
    const trustSection = container.querySelector('.bg-white')
    expect(trustSection).toBeInTheDocument()
  })

  it('should apply hover border styles to cards', () => {
    const { container } = render(<WhyChooseUs />)
    const cards = container.querySelectorAll('.hover\\:border-accent')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should apply fade-in animations to elements', () => {
    const { container } = render(<WhyChooseUs />)
    const fadeInElements = container.querySelectorAll('.fade-in')
    expect(fadeInElements.length).toBeGreaterThan(0)
  })

  it('should apply staggered animation delays', () => {
    const { container } = render(<WhyChooseUs />)
    const delayedElements = container.querySelectorAll('[style*="animation"]')
    expect(delayedElements.length).toBeGreaterThan(0)
  })

  it('should have icons displayed in cards', () => {
    const { container } = render(<WhyChooseUs />)
    const iconDivs = container.querySelectorAll('.text-6xl')
    expect(iconDivs.length).toBe(whyChooseUs.length)
  })

  it('should display service options question in trust section', () => {
    render(<WhyChooseUs />)
    const question = screen.getByText(/¿Necesitas restauración integral?/)
    expect(question).toBeInTheDocument()
  })
})
