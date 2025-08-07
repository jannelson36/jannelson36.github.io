export interface Project {
  id: string
  title: string
  description: string
  content: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'fullstack' | 'other'
  createdAt: string
  updatedAt: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  excerpt: string
  image: string
  tags: string[]
  author: string
  publishedAt: string
  updatedAt: string
  readingTime: number
  slug: string
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
  level: number
  icon: string
  color: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}