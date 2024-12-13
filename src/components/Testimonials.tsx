import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote: "The data-driven approach to design helped us increase our conversion rate by 45% in just two months.",
    author: "Sarah Johnson",
    role: "Amazon Seller",
    company: "Wellness Essentials",
  },
  {
    quote: "Their A+ Content design transformed our brand presence on Amazon. Sales are up 60% year over year.",
    author: "Michael Chen",
    role: "E-commerce Director",
    company: "Tech Gear Pro",
  },
  {
    quote: "Professional, responsive, and most importantly, they understand the Amazon marketplace.",
    author: "Lisa Rodriguez",
    role: "Marketing Manager",
    company: "Home & Living Co",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Success stories from Amazon sellers who transformed their listings with
            our design services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <MessageSquare className="w-12 h-12 text-accent mb-6" />
            <blockquote className="text-xl md:text-2xl mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div>
              <cite className="not-italic font-semibold">
                {testimonials[currentIndex].author}
              </cite>
              <p className="text-gray-300">
                {testimonials[currentIndex].role} at{" "}
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="text-white border-white hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="text-white border-white hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};