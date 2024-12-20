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

          <div className="grid grid-cols-2 gap-16 pt-24">
            <div className="text-left">
              <h2 className="text-3xl font-mono font-bold mb-6">
                The power of creative that converts
              </h2>
            </div>
            <div className="text-right">
              <p className="text-lg md:text-xl font-mono font-normal text-gray-800">
                If you want to grab{" "}
                <span className="bg-accent/20 px-1">attention</span>, {" "}
                <span className="bg-accent/20 px-1">drive clicks</span>, and supercharge your{" "}
                <span className="bg-accent/20 px-1">conversions</span>.
              </p>
              <p className="text-xl font-mono font-bold mt-4">
                You need a Final Upload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};