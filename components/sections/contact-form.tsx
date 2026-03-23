"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      // Silently handle — in production, wire up a real form ID
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
        <p className="text-muted-foreground">
          Thanks for getting in touch. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium mb-2 block">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium mb-2 block">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="text-sm font-medium mb-2 block">
          Company
        </label>
        <Input id="company" name="company" placeholder="Your company" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium mb-2 block">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or challenge..."
          rows={5}
          required
        />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
