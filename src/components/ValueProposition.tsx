import { BarChart2, Brain, Zap } from "lucide-react";

export const ValueProposition = () => {
  const features = [
    {
      icon: BarChart2,
      title: "Conversion-Driven Design",
      description: "Data-backed designs that focus on increasing your conversion rates and sales performance.",
    },
    {
      icon: Brain,
      title: "AI-Powered Research",
      description: "Advanced AI analysis of top performers in your niche to identify winning design patterns and opportunities.",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality. Get your designs when you need them.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center md:text-left">
              <feature.icon className="w-12 h-12 text-accent mx-auto md:mx-0 mb-6" />
              <h3 className="font-mono text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};