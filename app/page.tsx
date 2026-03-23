import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SdlcShowcase } from "@/components/sections/sdlc-showcase";
import { CaseStudyHighlight } from "@/components/sections/case-study-highlight";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";
import { getFeaturedServices, getFeaturedCaseStudy } from "@/lib/mdx";
import { testimonials } from "@/content/testimonials";

export default function HomePage() {
  const services = getFeaturedServices();
  const caseStudy = getFeaturedCaseStudy();

  return (
    <>
      <Hero />
      <ServicesPreview services={services} />
      <HowItWorks />
      <SdlcShowcase />
      <CaseStudyHighlight caseStudy={caseStudy} />
      <Testimonials testimonials={testimonials} />
      <CtaSection />
    </>
  );
}
