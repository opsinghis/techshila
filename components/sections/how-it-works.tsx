import { Badge } from "@/components/ui/badge";
import { Search, Download, Rocket } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Assess",
    description: "We audit your current development lifecycle, identify bottlenecks, and map where AI agents can have the highest impact.",
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Install",
    description: "We deploy customised agentic workflows — tailored to your tech stack, team structure, and delivery process.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Deliver",
    description: "Your team ships faster with AI-powered workflows. We measure impact and iterate until the results speak for themselves.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Three Steps to <span className="gradient-text">Faster Delivery</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <StaggerItem key={step.title} className="text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {step.icon}
              </div>
              <div className="text-xs font-medium text-primary mb-2">Step {i + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
