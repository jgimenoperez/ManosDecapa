import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import ForWhom from './components/ForWhom'
import ContactForm from './components/ContactForm'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background">
      {/* Hero Section - User Story 1: Service Discovery */}
      <Hero />

      {/* Services Section - User Story 1 */}
      <Services />

      {/* Why Choose Us Section - User Story 1 */}
      <WhyChooseUs />

      {/* About Section - User Story 1 */}
      <About />

      {/* For Whom Section - User Story 2: Lead Generation */}
      <ForWhom />

      {/* Gallery Section - User Story 3: Portfolio Showcase */}
      <Gallery />

      {/* Pricing Section - User Story 3 */}
      <Pricing />

      {/* Process Section - User Story 4: Transparency */}
      <Process />

      {/* Contact Form Section - User Story 2: Lead Generation */}
      <ContactForm />

      {/* Footer - Navigation & Contact Info */}
      <Footer />
    </div>
  )
}
