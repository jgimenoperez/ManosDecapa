import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../../../src/components/About'

describe('About Component', () => {
  it('should render about section heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Sobre Nosotros')
  })

  it('should render company name in content', () => {
    render(<About />)
    const companyName = screen.getByText(/Manos Decapa/)
    expect(companyName).toBeInTheDocument()
  })

  it('should render first paragraph about origin from Manos de Hada', () => {
    render(<About />)
    const originText = screen.getByText(/nace de la experiencia/)
    expect(originText).toBeInTheDocument()
  })

  it('should render paragraph about service specialization', () => {
    render(<About />)
    const serviceText = screen.getByText(/servicio especializado de decapado/)
    expect(serviceText).toBeInTheDocument()
  })

  it('should render paragraph about process and experience', () => {
    render(<About />)
    const processText = screen.getByText(/Con un proceso profesional/)
    expect(processText).toBeInTheDocument()
  })

  it('should render Manos de Hada link in callout box', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /Visita Manos de Hada/ })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.manosdehada.es')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should render stats section with 3 stat items', () => {
    const { container } = render(<About />)
    const statsGrids = container.querySelectorAll('.md\\:grid-cols-3')
    expect(statsGrids.length).toBeGreaterThan(0)
  })

  it('should display experience stat', () => {
    render(<About />)
    const experienceStat = screen.getByText(/Años de Experiencia/)
    expect(experienceStat).toBeInTheDocument()
  })

  it('should display furniture restoration stat', () => {
    render(<About />)
    const restorationStat = screen.getByText(/Muebles Restaurados/)
    expect(restorationStat).toBeInTheDocument()
  })

  it('should display satisfaction guarantee stat', () => {
    render(<About />)
    const satisfactionStat = screen.getByText(/Satisfacción Garantizada/)
    expect(satisfactionStat).toBeInTheDocument()
  })

  it('should have white background section', () => {
    const { container } = render(<About />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-white')
  })

  it('should have accent colored callout box', () => {
    const { container } = render(<About />)
    const calloutBox = container.querySelector('[class*="bg-accent"]')
    expect(calloutBox).toBeInTheDocument()
  })

  it('should have left border on callout box', () => {
    const { container } = render(<About />)
    const calloutBox = container.querySelector('.border-l-4')
    expect(calloutBox).toBeInTheDocument()
  })

  it('should render callout question heading', () => {
    render(<About />)
    const questionHeading = screen.getByText(/¿Necesitas restauración integral?/)
    expect(questionHeading).toBeInTheDocument()
  })

  it('should apply fade-in animation classes', () => {
    const { container } = render(<About />)
    const fadeInElements = container.querySelectorAll('.fade-in')
    expect(fadeInElements.length).toBeGreaterThan(0)
  })

  it('should have responsive padding on content box', () => {
    const { container } = render(<About />)
    const contentBox = container.querySelector('[class*="bg-background"]')
    expect(contentBox.className).toContain('p-8')
  })

  it('should have proper spacing between paragraphs', () => {
    const { container } = render(<About />)
    const paragraphs = container.querySelectorAll('.leading-relaxed')
    expect(paragraphs.length).toBeGreaterThan(2)
  })

  it('should have stat numbers in bold', () => {
    const { container } = render(<About />)
    const numbers = container.querySelectorAll('.text-5xl')
    expect(numbers.length).toBe(3)
  })

  it('should have container with proper responsive padding', () => {
    const { container } = render(<About />)
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toHaveClass('mx-auto')
    expect(containerDiv).toHaveClass('px-4')
  })
})
