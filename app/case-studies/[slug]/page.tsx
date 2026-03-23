import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((s) => ({ slug: s.frontmatter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.frontmatter.title,
    description: `${cs.frontmatter.outcome} — ${cs.frontmatter.client}`,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link href="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> All Case Studies
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <Badge>{cs.frontmatter.industry}</Badge>
            <span className="text-sm text-muted-foreground">{cs.frontmatter.client}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {cs.frontmatter.title}
          </h1>

          <div className="text-3xl font-bold gradient-text mb-8">
            {cs.frontmatter.outcome}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose-custom mb-12">
            <MDXRemote source={cs.content} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-xl border border-border/50 bg-card/50 p-8">
            <Quote className="h-8 w-8 text-primary/20 mb-4" />
            <blockquote className="text-xl italic text-foreground/90 leading-relaxed mb-4">
              &ldquo;{cs.frontmatter.testimonial}&rdquo;
            </blockquote>
            <p className="font-medium">
              {cs.frontmatter.testimonialAuthor}, {cs.frontmatter.client}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Start Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}
