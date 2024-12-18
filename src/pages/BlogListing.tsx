import { Header } from "@/components/Header";
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

const BlogListing = () => {
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
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Latest Resources</h1>
          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-sm text-accent mb-2">{post.category}</div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
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
        </div>
      </main>
    </div>
  );
};

export default BlogListing;