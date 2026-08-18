import React from "react";

const groups = [
    { title: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "PHP", "Python", "Java", "REST APIs"] },
    { title: "Data & delivery", items: ["PostgreSQL", "MySQL", "MongoDB", "Git", "Docker"] },
];

export default function Skills() {
    return (
        <section id="skills" className="border-t border-stone-300 px-6 py-24 dark:border-stone-800 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">03 — Capabilities</p><div><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-5xl">The tools are secondary. The work isn&apos;t.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">I use a practical stack chosen for maintainability, speed, and the needs of the project.</p></div></div>
                <div className="mt-14 grid border-t border-stone-300 dark:border-stone-800 md:grid-cols-3">{groups.map(group => <div key={group.title} className="border-b border-stone-300 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 dark:border-stone-800"><h3 className="font-mono text-xs uppercase tracking-[.2em] text-stone-500">{group.title}</h3><ul className="mt-6 space-y-3 text-xl tracking-[-.03em]">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
            </div>
        </section>
    );
}
