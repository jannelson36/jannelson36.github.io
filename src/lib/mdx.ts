import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

const postsDirectory = path.join(process.cwd(), 'src/data/blog')

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const mdx = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, [remarkToc, { tight: true }]],
        rehypePlugins: [rehypeHighlight, rehypeSlug],
      },
    },
  })

  return {
    slug: realSlug,
    frontmatter: {
      ...data,
      publishedAt: data.publishedAt?.toISOString(),
      updatedAt: data.updatedAt?.toISOString(),
    },
    content: mdx.content,
  }
}

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const post = await getPostBySlug(slug)
        return post
      })
  )

  return allPostsData
    .filter(Boolean)
    .sort((a, b) => {
      if (a && b) {
        return new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime()
      }
      return 0
    })
}

export function getPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}