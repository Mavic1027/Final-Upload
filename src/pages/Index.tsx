import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Services } from "@/components/Services";
import { MarketplaceInsights } from "@/components/MarketplaceInsights";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { BlogPreview } from "@/components/BlogPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { BackgroundRemoverPromo } from "@/components/BackgroundRemoverPromo";

const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ValueProposition />
          <Services />
          <BackgroundRemoverPromo />
          <MarketplaceInsights />
          <Testimonials />
          <Pricing />
          <BlogPreview />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;