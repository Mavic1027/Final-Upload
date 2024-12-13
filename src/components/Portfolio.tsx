import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Portfolio = () => {
  const portfolioItems = [
    {
      category: "Product Photography",
      title: "Kitchen Essentials Transformation",
      improvement: "+45% CTR",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
    {
      category: "A+ Content",
      title: "Tech Accessories Redesign",
      improvement: "+60% Conversion",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
    {
      category: "Storefront Design",
      title: "Beauty Brand Makeover",
      improvement: "+35% Engagement",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from our data-driven design approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Before</p>
                      <img
                        src={item.beforeImage}
                        alt="Before"
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">After</p>
                      <img
                        src={item.afterImage}
                        alt="After"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-accent font-semibold">{item.improvement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};