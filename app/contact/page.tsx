import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/sections/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Techshila to discuss your project.",
};

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell us about your project or challenge. We&apos;ll get back to you within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                <Mail className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:omsingh.is@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  omsingh.is@gmail.com
                </a>
              </div>
              <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                <MapPin className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Northwood, England, UK</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
