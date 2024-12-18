import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const BlogPreview = () => {
  const posts = [
    {
      title: "5 Design Trends Boosting Amazon Sales in 2024",
      category: "Design Trends",
      preview: "Discover the latest design strategies that are helping sellers stand out...",
      date: "Mar 15, 2024",
      slug: "design-trends-2024"
    },
    {
      title: "Optimizing Your Product Images for Amazon Search",
      category: "Amazon Selling Tips",
      preview: "Learn how to create images that rank higher in Amazon search results...",
      date: "Mar 12, 2024",
      slug: "optimizing-product-images"
    },
    {
      title: "The Impact of A+ Content on Conversion Rates",
      category: "Insights",
      preview: "Real data showing how A+ Content affects buying decisions...",
      date: "Mar 10, 2024",
      slug: "impact-of-a-plus-content"
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Latest Resources
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights to help you succeed on Amazon
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Card key={post.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-sm text-accent mb-2">{post.category}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.preview}</p>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/90">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};