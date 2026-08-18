import Link from "next/link";
import Meta from "@/components/Meta";
import allProjects from "@/data/projectData/index.json";

export default function ProjectsPage({ projects }) {
    return (
        <main className="min-h-screen bg-[#f7f7f3] text-slate-950 dark:bg-[#10120f] dark:text-stone-100">
            <Meta title="Work | Jan Nelson" seoTitle="Work | Jan Nelson" seoURL="https://jannelson36.github.io/projects" />
            <header className="border-b border-stone-300 px-6 py-5 dark:border-stone-800 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/" className="font-semibold tracking-[-.04em]">Jan Nelson<span className="text-amber-600 dark:text-lime-300">.</span></Link><Link href="/#contact" className="text-sm underline underline-offset-4">Get in touch</Link></div></header>
            <section className="px-6 pb-24 pt-20 sm:px-10 lg:px-16"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs uppercase tracking-[.24em] text-stone-500">Archive</p><div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end"><h1 className="max-w-3xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">Selected work, collected in one place.</h1><p className="max-w-xs text-stone-600 dark:text-stone-300">A mix of recent client work, personal projects, and technical explorations.</p></div>
                <div className="mt-20 divide-y divide-stone-300 border-y border-stone-300 dark:divide-stone-800 dark:border-stone-800">{projects.map((project, index) => <Link key={project.slug} href={`/projects/${project.repo_name}`} className="group grid gap-4 py-7 transition hover:px-3 sm:grid-cols-[72px_1.2fr_1fr_auto] sm:items-center"><span className="font-mono text-xs text-stone-500">{String(index + 1).padStart(2, "0")}</span><h2 className="text-3xl font-semibold tracking-[-.04em]">{project.title}</h2><p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">{project.overview || project.type}</p><span className="text-sm text-stone-500 transition group-hover:text-slate-950 dark:group-hover:text-white">View project ↗</span></Link>)}</div>
            </div></section>
        </main>
    );
}

export async function getStaticProps() {
    return { props: { projects: allProjects } };
}
