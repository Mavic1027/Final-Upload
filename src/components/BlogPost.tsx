import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";

export const BlogPost = () => {
  const { slug } = useParams();
  
  // This would typically come from a CMS or database
  const posts = {
    "design-trends-2024": {
      title: "5 Design Trends Boosting Amazon Sales in 2024",
      category: "Design Trends",
      date: "Mar 15, 2024",
      author: "Final Upload Team",
      content: `
        <article>
          <h1>5 Design Trends Boosting Amazon Sales in 2024</h1>
          
          <p>In the ever-evolving landscape of e-commerce, staying ahead of design trends is crucial for Amazon sellers looking to maximize their success. Here are the top 5 design trends that are making a significant impact on Amazon sales in 2024:</p>

          <h2>1. Dynamic Product Photography</h2>
          <p>The rise of 360-degree product views and lifestyle photography has transformed how customers interact with product listings. Sellers implementing these dynamic visual elements are seeing up to 40% higher conversion rates.</p>

          <h2>2. Minimalist A+ Content Design</h2>
          <p>Clean, uncluttered A+ Content pages with ample white space and clear typography are proving more effective at holding customer attention and driving sales.</p>

          <h2>3. Mobile-First Design Approach</h2>
          <p>With over 70% of Amazon purchases now happening on mobile devices, optimizing product images and content for mobile viewing has become essential.</p>

          <h2>4. Sustainable Packaging Showcase</h2>
          <p>Highlighting eco-friendly packaging through design elements resonates with environmentally conscious consumers and can increase brand trust.</p>

          <h2>5. Interactive Size Guides</h2>
          <p>Advanced size comparison tools and visual guides are reducing return rates and improving customer satisfaction.</p>

          <h2>Conclusion</h2>
          <p>Implementing these design trends can significantly impact your Amazon sales performance. Stay ahead of the curve by incorporating these elements into your product listings.</p>
        </article>
      `
    },
    "optimizing-product-images": {
      title: "Optimizing Your Product Images for Amazon Search",
      category: "Amazon Selling Tips",
      date: "Mar 12, 2024",
      author: "Final Upload Team",
      content: `
        <article>
          <h1>Optimizing Your Product Images for Amazon Search</h1>
          
          <p>Product images play a crucial role in Amazon's search algorithm and customer conversion rates. This comprehensive guide will help you optimize your product images for maximum visibility and sales.</p>

          <h2>Image Requirements and Best Practices</h2>
          <p>Understanding Amazon's technical requirements is the first step to optimization. We'll cover resolution, size limits, and format specifications.</p>

          <h2>Keyword Optimization in Image Files</h2>
          <p>Learn how proper image naming and alt text can improve your product's searchability on Amazon.</p>

          <h2>Visual Hierarchy</h2>
          <p>Discover how to structure your product images to highlight key features and benefits effectively.</p>

          <h2>Conclusion</h2>
          <p>Implementing these optimization techniques can significantly improve your product's visibility and conversion rates on Amazon.</p>
        </article>
      `
    },
    "impact-of-a-plus-content": {
      title: "The Impact of A+ Content on Conversion Rates",
      category: "Insights",
      date: "Mar 10, 2024",
      author: "Final Upload Team",
      content: `
        <article>
          <h1>The Impact of A+ Content on Conversion Rates</h1>
          
          <p>A+ Content has become a game-changer for Amazon sellers looking to boost their conversion rates. This data-driven analysis reveals the true impact of enhanced content on buying decisions.</p>

          <h2>Key Findings</h2>
          <p>Our research shows that properly implemented A+ Content can increase conversion rates by 3-10% on average.</p>

          <h2>Best Practices</h2>
          <p>Learn the most effective ways to structure your A+ Content for maximum impact.</p>

          <h2>Case Studies</h2>
          <p>Real-world examples of successful A+ Content implementations and their results.</p>

          <h2>Conclusion</h2>
          <p>A+ Content remains one of the most effective tools for increasing conversion rates on Amazon.</p>
        </article>
      `
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-secondary py-16">
      <div className="container mx-auto px-4">
        <Link to="/#blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
        
        <article className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="text-accent mb-2">{post.category}</div>
            <h1 className="text-4xl font-heading font-bold mb-4">{post.title}</h1>
            <div className="text-gray-600">
              <time dateTime={post.date}>{post.date}</time> • By {post.author}
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Schema.org Blog Post markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Final Upload",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/lovable-uploads/f3a3a9e1-1184-4623-9309-31dee722768b.png"
                }
              },
              "articleSection": post.category,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://finalupload.com/blog/${slug}`
              }
            })}
          </script>
        </article>
      </div>
    </div>
  );
};