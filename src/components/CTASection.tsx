import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Amazon Listings?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join successful Amazon sellers who've increased their sales with our
            data-driven design services.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
          >
            Start Your Design Journey
          </Button>
        </div>
      </div>
    </section>
  );
};