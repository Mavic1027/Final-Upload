import { Card, CardContent } from "@/components/ui/card";

export const Portfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We're not just about making your listings look good—we're about making them perform. 
                By leveraging advanced third-party tools and AI, we compare your images against competitors 
                to ensure your creative stands out. Our data-driven approach identifies the winning visuals 
                that captivate shoppers and maximize your product's potential, setting you up for a successful 
                and profitable listing.
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/1c80fcad-7208-4f70-b68e-522aa68f82f1.png" 
                  alt="Performance analytics showing voting results for different options"
                  className="w-full rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};