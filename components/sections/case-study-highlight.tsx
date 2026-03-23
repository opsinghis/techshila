import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import type { CaseStudyFrontmatter } from "@/lib/types";

interface CaseStudyHighlightProps {
  caseStudy: { frontmatter: CaseStudyFrontmatter } | undefined;
}

export function CaseStudyHighlight({ caseStudy }: CaseStudyHighlightProps) {
  if (!caseStudy) return null;
  const { frontmatter } = caseStudy;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 md:p-12">
            <Badge variant="outline" className="mb-6">Featured Case Study</Badge>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{frontmatter.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{frontmatter.industry}</Badge>
                  <span className="text-sm text-muted-foreground">{frontmatter.client}</span>
                </div>
                <div className="text-4xl font-bold gradient-text mb-6">{frontmatter.outcome}</div>
                <Button asChild>
                  <Link href={`/case-studies/${frontmatter.slug}`}>
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                  &ldquo;{frontmatter.testimonial}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-medium">{frontmatter.testimonialAuthor}, {frontmatter.client}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
