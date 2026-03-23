import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Techshila</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              AI-powered software delivery. We help engineering teams adopt structured agentic
              workflows that transform how they build software.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li>omsingh.is@gmail.com</li>
              <li>Northwood, England</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="text-xs text-muted-foreground/70 mb-4">
          <p>Techshila Ltd is registered in England &amp; Wales. Company No. 17107536.</p>
          <p>Registered office: 37 Cygnet Close, Northwood, England, HA6 2TA.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Techshila Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
