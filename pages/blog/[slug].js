import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Meta from '@/components/Meta';

const BLOG_DIR = path.join(process.cwd(), 'data', 'blog');

export default function BlogPost({ source, frontMatter }) {
  return (
    <main className="pt-16 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Meta title={`${frontMatter.title} | Blog`} seoTitle={`${frontMatter.title} | Blog`} seoURL={`https://jannelson36.github.io/blog/${frontMatter.slug}`} />
      <article className="prose dark:prose-invert max-w-3xl mx-auto px-6 py-10">
        <h1>{frontMatter.title}</h1>
        <p className="text-sm text-gray-500">{frontMatter.date}</p>
        <MDXRemote {...source} />
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR) : [];
  const paths = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => ({ params: { slug: file.replace(/\.(mdx|md)$/i, '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
  const altPath = path.join(BLOG_DIR, `${params.slug}.md`);
  const chosenPath = fs.existsSync(filePath) ? filePath : altPath;
  const raw = fs.readFileSync(chosenPath, 'utf-8');
  const { content, data } = matter(raw);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, slug: params.slug, date: data.date ? String(data.date) : '' }
    }
  };
}