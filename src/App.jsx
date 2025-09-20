import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import ProductsSection from "./components/ProductsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
