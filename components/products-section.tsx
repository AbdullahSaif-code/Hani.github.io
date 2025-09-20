import { Card, CardContent } from "@/components/ui/card"

export function ProductsSection() {
  const products = [
    {
      name: "Fresh Mangoes",
      image: "/fresh-ripe-pakistani-mangoes.jpg",
    },
    {
      name: "Organic Oranges",
      image: "/fresh-organic-oranges-citrus.jpg",
    },
    {
      name: "Fresh Carrots",
      image: "/fresh-orange-carrots-vegetables.jpg",
    },
    {
      name: "Long Gourds",
      image: "/fresh-long-bottle-gourds-vegetables.jpg",
    },
    {
      name: "Bitter Gourds",
      image: "/fresh-bitter-gourds-green-vegetables.jpg",
    },
    {
      name: "Green Chilies",
      image: "/fresh-green-chilies-peppers.jpg",
    },
    {
      name: "Fresh Sugarcane",
      image: "/fresh-sugarcane-stalks.jpg",
    },
    {
      name: "Red Onions",
      image: "/fresh-red-onions-vegetables.jpg",
    },
  ]

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">Our Premium Products</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our wide selection of fresh fruits and vegetables, carefully sourced from the fertile lands of
            Pakistan and prepared for international export.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-center">{product.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
