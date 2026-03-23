"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { ExternalLink, Play, BookOpen } from "lucide-react";

export function SdlcShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Interactive Demo</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            See the <span className="gradient-text">SDLC Reimagined</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Bolting AI agents onto a broken process only gives you faster broken software.
            Real transformation means reimagining the entire lifecycle — not just automating
            the parts that were already failing.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative rounded-xl border border-border/50 bg-card/50 overflow-hidden shadow-lg shadow-primary/5">
            {/* Browser chrome mockup */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-muted/50 rounded-md px-3 py-1 text-xs text-muted-foreground text-center truncate">
                  sdlc-reimagined.vercel.app
                </div>
              </div>
            </div>

            {/* Embed area */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center">
              <div className="text-center space-y-6 px-4">
                <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">SDLC Reimagined</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    An interactive walkthrough of how a purpose-built agentic SDLC replaces
                    the traditional waterfall-to-agile patchwork — rethinking requirements,
                    design, development, testing, and deployment from first principles.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button asChild size="lg">
                    <Link
                      href="https://sdlc-reimagined.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Interactive Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link
                      href="https://www.linkedin.com/pulse/applying-agenting-broken-sdlc-process-only-gives-you-faster-om-singh-maczf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read the Article
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key insights from the article */}
        <AnimatedSection delay={0.3} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Fix the Process First",
              desc: "Applying agenting to a broken SDLC just accelerates the dysfunction. The process itself needs to be redesigned around how AI agents actually work.",
            },
            {
              title: "Agents, Not Copilots",
              desc: "Move beyond autocomplete. Purpose-built agentic workflows own entire stages of the lifecycle — from requirement decomposition to deployment validation.",
            },
            {
              title: "Compound Quality Gains",
              desc: "When every phase is reimagined — not just patched — quality improvements compound across the lifecycle, delivering exponentially better outcomes.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2">
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
