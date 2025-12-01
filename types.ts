export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  logo?: string;
  description: string[];
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  content?: string; // Markdown-like content
  tags?: string[];
}