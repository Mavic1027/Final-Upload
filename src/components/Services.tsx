import { Button } from "@/components/ui/button";
import { Image, LayoutGrid, ChartBar, BookOpen } from "lucide-react";

const services = [
  {
    icon: Image,
    title: "Product Listing Graphics",
    description: "Eye-catching main images and infographics that drive clicks and conversions.",
  },
  {
    icon: ChartBar,
    title: "Listing SEO",
    description: "Great visuals aren't enough, your listings need the right keywords to shine.",
  },
  {
    icon: BookOpen,
    title: "A+ Content Design",
    description: "Compelling brand stories and product presentations that boost conversion rates.",
  },
  {
    icon: LayoutGrid,
    title: "Storefront Graphics",
    description: "Cohesive brand experience that keeps customers engaged and buying.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored for Amazon sellers, backed by
            marketplace data and competitive analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};