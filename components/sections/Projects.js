import React from "react";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";

function Projects({ projects }) {
    return (
        <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div><p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">01 — Selected work</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Recently launched.</h2></div>
                    <p className="max-w-sm text-stone-600 dark:text-stone-300">Recent websites and applications. Click through to see the work in context.</p>
                </div>
                <div className="grid gap-px overflow-hidden rounded-2xl border border-stone-300 bg-stone-300 dark:border-stone-700 dark:bg-stone-700 md:grid-cols-2 lg:grid-cols-3">
                    {(projects || []).map((project, index) => (
                        <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} key={project.slug} className="group flex min-h-[290px] flex-col bg-[#f7f7f3] p-7 dark:bg-[#10120f]">
                            <div className="flex items-start justify-between"><span className="font-mono text-xs uppercase tracking-wider text-stone-500">{project.type}</span><span className="text-sm text-stone-500">{String(index + 1).padStart(2, "0")}</span></div>
                            <h3 className="mt-12 text-3xl font-semibold tracking-[-.04em]">{project.title}</h3>
                            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600 dark:text-stone-300">{project.overview || "Selected development work."}</p>
                            <div className="mt-auto flex items-end justify-between gap-3 pt-8"><div className="flex flex-wrap gap-2">{project.stack?.slice(0, 3).map(tech => <span key={tech} className="rounded-full border border-stone-300 px-2.5 py-1 text-xs text-stone-600 dark:border-stone-700 dark:text-stone-300">{tech}</span>)}</div>{project.links?.hosted && <a href={project.links.hosted} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} className="rounded-full border border-stone-400 p-2 transition group-hover:bg-slate-950 group-hover:text-white dark:border-stone-600 dark:group-hover:bg-lime-300 dark:group-hover:text-slate-950"><LaunchIcon className="h-4 w-4" /></a>}</div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
