import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Meta from '@/components/Meta';

const BLOG_DIR = path.join(process.cwd(), 'data', 'blog');

export default function BlogIndex({ posts }) {
  return (
    <main className="pt-16 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Meta title="Blog | Jan Nelson" seoTitle="Blog | Jan Nelson" seoURL="https://jannelson36.github.io/blog" />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold hover:underline">{post.frontMatter.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{post.frontMatter.description}</p>
                <span className="text-sm text-gray-500">{post.frontMatter.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const files = fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR) : [];
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/i, '');
      const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const { data } = matter(content);
      return { slug, frontMatter: data };
    })
    .sort((a, b) => (new Date(b.frontMatter.date) - new Date(a.frontMatter.date)));

  return { props: { posts } };
}