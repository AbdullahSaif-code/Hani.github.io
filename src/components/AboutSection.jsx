import { CheckCircle, Globe, Clock, Package } from "lucide-react"

const AboutSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "Strict quality control procedures ensure freshness and safety in every shipment.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Fast and reliable logistics to ensure your orders reach destinations on time.",
    },
    {
      icon: Package,
      title: "Custom Solutions",
      description: "Tailored packaging and documentation services to meet your market needs.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to countries across the Middle East, Europe, and Asia.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">About Hani Trading Company</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Hani Trading Company, your trusted partner in the export of fresh fruits and vegetables from
            Pakistan to the world. Founded with a passion for agriculture and international trade, we are committed to
            delivering farm-fresh produce while upholding the highest standards of quality, reliability, and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            With extensive experience in the export industry, we specialize in supplying a wide variety of seasonal
            fruits and vegetables—such as mangoes, kinnows, potatoes, onions, and more—sourced directly from the fertile
            lands of Pakistan. Join us in bringing the best of Pakistan to the world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
