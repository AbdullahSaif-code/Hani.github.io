"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/fresh-fruits-and-vegetables-farm-landscape-pakista.jpg" alt="Fresh produce landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
          Premium Fresh Produce
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 opacity-90">From Pakistan to the World</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 text-pretty max-w-2xl mx-auto leading-relaxed">
          Your trusted partner in exporting the finest fruits and vegetables, connecting Pakistani farms to global
          markets with quality and reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-medium px-8"
            onClick={scrollToContact}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 bg-transparent"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
