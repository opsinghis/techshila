import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-16 text-center overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Delivery?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s talk about how agentic workflows can accelerate your team&apos;s
              software delivery.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
