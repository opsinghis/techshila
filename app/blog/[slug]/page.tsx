import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> All Posts
          </Link>

          <div className="flex items-center gap-2 mb-4">
            {post.frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {post.frontmatter.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12">
            <span>{post.frontmatter.author}</span>
            <span>&middot;</span>
            <span>{new Date(post.frontmatter.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose-custom">
            <MDXRemote source={post.content} />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
