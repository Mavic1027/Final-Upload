import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Services } from "@/components/Services";
import { MarketplaceInsights } from "@/components/MarketplaceInsights";
import { Testimonials } from "@/components/Testimonials";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { BlogPreview } from "@/components/BlogPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <MarketplaceInsights />
        <Testimonials />
        <Portfolio />
        <Pricing />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;