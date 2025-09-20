"use client"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Hani Trading Company</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner in exporting premium fresh fruits and vegetables from Pakistan to markets worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Services
              </button>
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Products
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>Office #205, Shamim Square</p>
              <p>Gulberg II, Lahore, Pakistan</p>
              <p>+92 309-2598071</p>
              <p>info@hanitrading.com</p>
            </div>
          </div>
        </div>

        <div className="section-divider my-8"></div>

        <div className="text-center text-sm opacity-60">
          <p>&copy; 2024 Hani Trading Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
