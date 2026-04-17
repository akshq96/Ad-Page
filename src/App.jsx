import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Features from './components/Features'
import TrainingGallery from './components/TrainingGallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import EnquiryForm from './components/EnquiryForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-svh bg-military-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Features />
        <TrainingGallery />
        <Testimonials />
        <FAQ />
        <EnquiryForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
