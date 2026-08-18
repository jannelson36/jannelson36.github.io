import Link from "next/link";
import Meta from "@/components/Meta";
import allProjects from "@/data/projectData/index.json";

export default function ProjectPage({ project }) {
    const liveUrl = project.links?.hosted;
    const githubUrl = project.links?.github;
    const period = [project.timeline?.startDate, project.timeline?.endDate].filter(Boolean).join(" — ");

    return (
        <main className="min-h-screen bg-[#f7f7f3] text-slate-950 dark:bg-[#10120f] dark:text-stone-100">
            <Meta title={`${project.title} | Jan Nelson`} seoTitle={`${project.title} | Jan Nelson`} description={project.overview || `Project by Jan Nelson: ${project.title}.`} seoDescription={project.overview || `Project by Jan Nelson: ${project.title}.`} seoURL={`https://jannelson36.github.io/projects/${project.slug}`} />
            <header className="border-b border-stone-300 px-6 py-5 dark:border-stone-800 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/" className="font-semibold tracking-[-.04em]">Jan Nelson<span className="text-amber-600 dark:text-lime-300">.</span></Link><Link href="/projects" className="text-sm underline underline-offset-4">All work</Link></div></header>
            <article className="px-6 pb-24 pt-20 sm:px-10 lg:px-16"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs uppercase tracking-[.24em] text-stone-500">{project.type}</p><div className="mt-5 grid gap-10 lg:grid-cols-[1.3fr_.7fr]"><div><h1 className="text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">{project.title}</h1><p className="mt-10 max-w-2xl text-xl leading-relaxed text-stone-600 dark:text-stone-300">{project.overview || "A development project by Jan Nelson."}</p>{(liveUrl || githubUrl) && <div className="mt-10 flex flex-wrap gap-3">{liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-lime-300 dark:text-slate-950">Visit live site ↗</a>}{githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-stone-400 px-5 py-3 text-sm font-semibold">Source code ↗</a>}</div>}</div><dl className="border-t border-stone-300 dark:border-stone-800"><div className="grid grid-cols-2 border-b border-stone-300 py-5 text-sm dark:border-stone-800"><dt className="text-stone-500">Year</dt><dd>{period || "—"}</dd></div><div className="grid grid-cols-2 border-b border-stone-300 py-5 text-sm dark:border-stone-800"><dt className="text-stone-500">Context</dt><dd>{project.associated?.name || "Independent work"}</dd></div><div className="border-b border-stone-300 py-5 text-sm dark:border-stone-800"><dt className="text-stone-500">Tools</dt><dd className="mt-3 flex flex-wrap gap-2">{project.stack?.map(tech => <span key={tech} className="rounded-full border border-stone-300 px-2.5 py-1 dark:border-stone-700">{tech}</span>)}</dd></div></dl></div>
                {project.images?.length > 0 && <section className="mt-24"><p className="font-mono text-xs uppercase tracking-[.24em] text-stone-500">Screens</p><div className="mt-7 grid gap-5 md:grid-cols-2">{project.images.map(image => <figure key={image.path} className="overflow-hidden rounded-xl border border-stone-300 bg-white p-2 dark:border-stone-800 dark:bg-stone-900"><img src={image.path} alt={image.alt} className="h-auto w-full rounded-lg" /></figure>)}</div></section>}
            </div></article>
        </main>
    );
}

export async function getStaticPaths() {
    return { paths: allProjects.map(project => ({ params: { slug: project.repo_name } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const project = allProjects.find(item => item.repo_name === params.slug);
    return project ? { props: { project } } : { notFound: true };
}
