import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Techshila — AI-Powered Software Delivery",
    template: "%s | Techshila",
  },
  description:
    "We help engineering teams adopt structured agentic workflows that transform how they build software. AI onboarding, software development, and the Agentic SDLC framework.",
  keywords: ["AI", "software development", "agentic SDLC", "quality engineering", "AI onboarding"],
  authors: [{ name: "Techshila Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Techshila",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
