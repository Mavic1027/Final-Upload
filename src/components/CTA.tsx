import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Amazon Listings?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get started with data-driven design that converts browsers into buyers.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};