export interface ServiceFrontmatter {
  title: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  featured: boolean;
  excerpt: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  client: string;
  industry: string;
  outcome: string;
  testimonial: string;
  testimonialAuthor: string;
  date: string;
  featured: boolean;
}

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
}

export interface ContentItem<T> {
  frontmatter: T;
  content: string;
}
