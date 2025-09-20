import { Truck, Shield, Plane, Users, Package } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Fresh Fruit Export",
      description:
        "Premium quality mangoes, oranges, apples, and bananas. Carefully harvested, sorted, and packaged for international standards with seasonal availability planning.",
    },
    {
      icon: Truck,
      title: "Fresh Vegetable Export",
      description:
        "Wide range including potatoes, onions, carrots, tomatoes, and green chilies. Sourced directly from trusted local farms with custom packaging and labeling.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Strict quality checks at every stage with compliance to global food safety standards (GAP, HACCP, ISO) and cold chain logistics for freshness.",
    },
    {
      icon: Plane,
      title: "Logistics & Shipping",
      description:
        "End-to-end export services via air and sea freight with efficient documentation, customs clearance, and real-time tracking support.",
    },
    {
      icon: Users,
      title: "Custom Partnerships",
      description:
        "Tailored solutions for B2B clients and large-scale importers with long-term supply contracts, seasonal planning, and private labeling support.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">Our Export Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated to delivering the finest quality fruits and vegetables from Pakistani farms to markets across the
            globe. Our services are designed to meet the needs of wholesalers, retailers, and food distributors who
            value freshness, quality, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                </div>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Global Reach - Connecting Markets Worldwide
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We export to various countries across the Middle East, Europe, Asia, and North America. Our extensive
              network of logistics partners ensures timely delivery and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
