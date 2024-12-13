import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-mono text-4xl md:text-6xl font-bold leading-tight">
            We make{" "}
            <span className="text-accent">boring</span>
            <br />
            Amazon listings
            <br />
            <span className="text-accent">exciting</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Data-driven design that converts browsers into buyers. No fluff, just results.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 font-mono">
            <Sparkles className="mr-2 h-4 w-4" /> Make My Listings Pop
          </Button>

          <div className="grid grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-accent mb-2">127%</div>
              <div className="text-sm text-gray-600">Average CTR Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-accent mb-2">3.2x</div>
              <div className="text-sm text-gray-600">Conversion Rate Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-accent mb-2">48h</div>
              <div className="text-sm text-gray-600">Average Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};