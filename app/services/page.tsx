import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Workflow, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { getAllServices } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "AI onboarding, software development, and the Agentic SDLC framework.",
};

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
  workflow: <Workflow className="h-6 w-6" />,
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            What We <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From hands-on AI enablement to full-stack development, every engagement is powered by our agentic methodology.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.frontmatter.slug}>
              <Link href={`/services/${service.frontmatter.slug}`}>
                <Card className="group h-full border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {iconMap[service.frontmatter.icon] ?? <Code className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-lg">{service.frontmatter.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {service.frontmatter.excerpt}
                    </CardDescription>
                    <div className="pt-2 text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
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
