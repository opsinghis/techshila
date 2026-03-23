import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Users, Zap } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Techshila Ltd — transforming software delivery with AI-powered workflows.",
};

const values = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Impact First",
    description: "Every engagement is measured by outcomes, not hours. We succeed when your team ships faster.",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Structured Innovation",
    description: "We bring methodology to AI adoption. No vibe coding — just structured, repeatable workflows.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Enablement",
    description: "We build capabilities, not dependencies. Your team owns the workflows when we leave.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Continuous Learning",
    description: "Every project makes us better. We capture learnings and feed them back into our methodology.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mb-20">
          <Badge variant="outline" className="mb-4">About Techshila</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            We Transform How Teams{" "}
            <span className="gradient-text">Build Software</span>
          </h1>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Techshila was founded on a simple observation: most teams using AI for software
              development are doing it wrong. They&apos;re generating code without structure,
              review, or quality assurance — and calling it productivity.
            </p>
            <p>
              We saw a better way. By combining deep software engineering experience with
              structured AI workflows, we help teams achieve genuine transformation — not just
              faster code generation, but faster, higher-quality software delivery.
            </p>
            <p>
              Based in the United Kingdom, we work with engineering teams across industries — from
              startups shipping their first MVP to enterprises with hundreds of developers.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Our Values</h2>
          <p className="text-muted-foreground mb-10">The principles that guide everything we do.</p>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you&apos;re exploring AI for your team or ready to transform your delivery
              pipeline, we&apos;d love to hear from you.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
