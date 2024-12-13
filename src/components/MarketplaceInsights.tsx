import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MousePointerClick, DollarSign, ArrowLeftRight, TrendingUp } from "lucide-react";

export const MarketplaceInsights = () => {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Increased Visibility",
      description: "Well-optimized images improve the visibility of your products, making them more likely to appear in relevant search results and attract potential buyers."
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-accent" />,
      title: "Higher Click-Through Rates (CTR)",
      description: "Compelling images encourage shoppers to click on your listings, increasing traffic and potential sales."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: "Improved Conversion Rates",
      description: "High-quality, informative images build trust and confidence in potential buyers, ultimately resulting in more sales and fewer abandoned shopping carts."
    },
    {
      icon: <ArrowLeftRight className="w-8 h-8 text-accent" />,
      title: "Reduced Returns",
      description: "Accurate and detailed images reduce the likelihood of product returns, saving sellers time and money."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Competitive Advantage",
      description: "Effective image optimization sets your listings apart from competitors, helping your products stand out in the crowded Amazon marketplace and attract more customers."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Benefits of Image Optimization
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Image optimization offers numerous benefits to Amazon sellers, playing a pivotal role in the success of their product listings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};