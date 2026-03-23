import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { getAllBlogPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI-powered software delivery, agentic workflows, and quality engineering.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Insights & <span className="gradient-text">Ideas</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts on AI-powered delivery, agentic workflows, and the future of software engineering.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.frontmatter.slug}>
              <Link href={`/blog/${post.frontmatter.slug}`}>
                <Card className="group h-full border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {post.frontmatter.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{post.frontmatter.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.frontmatter.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between pt-3 text-sm text-muted-foreground">
                      <span>{post.frontmatter.author}</span>
                      <span>{new Date(post.frontmatter.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                    </div>
                    <div className="pt-2 text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article <ArrowRight className="h-3.5 w-3.5" />
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
