import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { getAllServices, getServiceBySlug, getAllCaseStudies } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({ slug: s.frontmatter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.frontmatter.title,
    description: service.frontmatter.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const caseStudies = getAllCaseStudies().slice(0, 2);

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> All Services
          </Link>

          <Badge variant="outline" className="mb-4">Service</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {service.frontmatter.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            {service.frontmatter.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="prose-custom">
              <MDXRemote source={service.content} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                <h3 className="font-semibold mb-4">Related Case Studies</h3>
                <div className="space-y-3">
                  {caseStudies.map((cs) => (
                    <Link
                      key={cs.frontmatter.slug}
                      href={`/case-studies/${cs.frontmatter.slug}`}
                      className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <p className="text-sm font-medium">{cs.frontmatter.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cs.frontmatter.outcome}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-semibold mb-2">Interested?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let&apos;s discuss how this service can help your team.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
