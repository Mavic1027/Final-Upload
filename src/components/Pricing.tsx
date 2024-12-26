import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { ContactFormOverlay } from "./ContactFormOverlay";

export const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const plans = [
    {
      name: "Essential",
      price: "499",
      description: "Perfect for new Amazon sellers",
      features: [
        "Product Listing Design",
        "Basic Photo Editing",
        "2 Revision Rounds",
        "5-Day Delivery",
      ],
    },
    {
      name: "Professional",
      price: "999",
      description: "For growing brands",
      features: [
        "Everything in Essential",
        "A+ Content Design",
        "Infographic Creation",
        "3-Day Delivery",
      ],
    },
    {
      name: "Enterprise",
      price: "1999",
      description: "Complete brand solution",
      features: [
        "Everything in Professional",
        "Storefront Design",
        "Brand Strategy",
        "Priority Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your Amazon business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/project</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6 bg-accent hover:bg-accent/90"
                  onClick={() => setIsFormOpen(true)}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactFormOverlay 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};