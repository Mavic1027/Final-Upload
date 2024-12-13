import { Zap, Shield, Clock } from "lucide-react";

export const ValueProposition = () => {
  const features = [
    {
      icon: Zap,
      title: "Conversion-Driven Design",
      description: "Data-backed designs that drive more clicks and sales on Amazon",
    },
    {
      icon: Shield,
      title: "Amazon-Specific Guidelines",
      description: "Designs that meet all Amazon's requirements and best practices",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose After Hours Creative?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine design expertise with marketplace data to create listings that convert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};