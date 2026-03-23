import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  ServiceFrontmatter,
  CaseStudyFrontmatter,
  BlogPostFrontmatter,
  ContentItem,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function getContentItems<T>(subdir: string): ContentItem<T>[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return { frontmatter: data as T, content };
  });
}

function getContentBySlug<T>(subdir: string, slug: string): ContentItem<T> | null {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) return { frontmatter: data as T, content };
  }
  return null;
}

export function getAllServices(): ContentItem<ServiceFrontmatter>[] {
  return getContentItems<ServiceFrontmatter>("services").sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}

export function getServiceBySlug(slug: string) {
  return getContentBySlug<ServiceFrontmatter>("services", slug);
}

export function getFeaturedServices() {
  return getAllServices().filter((s) => s.frontmatter.featured);
}

export function getAllCaseStudies(): ContentItem<CaseStudyFrontmatter>[] {
  return getContentItems<CaseStudyFrontmatter>("case-studies").sort(
    (a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date)
  );
}

export function getCaseStudyBySlug(slug: string) {
  return getContentBySlug<CaseStudyFrontmatter>("case-studies", slug);
}

export function getFeaturedCaseStudy() {
  return getAllCaseStudies().find((c) => c.frontmatter.featured) ?? getAllCaseStudies()[0];
}

export function getAllBlogPosts(): ContentItem<BlogPostFrontmatter>[] {
  return getContentItems<BlogPostFrontmatter>("blog").sort(
    (a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date)
  );
}

export function getBlogPostBySlug(slug: string) {
  return getContentBySlug<BlogPostFrontmatter>("blog", slug);
}
