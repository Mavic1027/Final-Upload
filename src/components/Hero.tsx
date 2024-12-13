import { Button } from "@/components/ui/button";
import { ChartBar, Image, LayoutGrid } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Data-Driven Design for Amazon Sellers
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Transform your Amazon listings with conversion-focused design backed by
              marketplace insights and competitive analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fadeIn [animation-delay:200ms]">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Image className="w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold mb-2">Product Listings</h3>
              <p className="text-sm text-gray-200">Optimized imagery that converts</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <ChartBar className="w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold mb-2">Data Analysis</h3>
              <p className="text-sm text-gray-200">Conversion-driven insights</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <LayoutGrid className="w-8 h-8 mb-4" />
              <h3 className="font-heading font-semibold mb-2">A+ Content</h3>
              <p className="text-sm text-gray-200">Enhanced brand stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};