import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { getAllCaseStudies } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how Techshila has helped teams transform their software delivery.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Case Studies</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Real <span className="gradient-text">Results</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we&apos;ve helped engineering teams deliver faster with agentic workflows.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.frontmatter.slug}>
              <Link href={`/case-studies/${cs.frontmatter.slug}`}>
                <Card className="group h-full border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{cs.frontmatter.industry}</Badge>
                      <span className="text-xs text-muted-foreground">{cs.frontmatter.client}</span>
                    </div>
                    <CardTitle className="text-xl">{cs.frontmatter.title}</CardTitle>
                    <div className="text-2xl font-bold gradient-text mt-2">
                      {cs.frontmatter.outcome}
                    </div>
                    <CardDescription className="mt-2 italic line-clamp-2">
                      &ldquo;{cs.frontmatter.testimonial}&rdquo;
                    </CardDescription>
                    <div className="pt-3 text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read case study <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
