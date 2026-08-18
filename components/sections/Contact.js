import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="border-t border-stone-300 bg-slate-950 px-6 py-24 text-stone-100 dark:border-stone-800 sm:px-10 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-end">
                <div><p className="font-mono text-xs uppercase tracking-[.24em] text-stone-400">04 — Contact</p><h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">Have a project in mind?</h2></div>
                <div className="md:text-right"><p className="max-w-sm text-lg leading-relaxed text-stone-300">Tell me what you&apos;re trying to build, where you are now, and what needs to happen next.</p><a href="mailto:nelsonjan75@gmail.com" className="mt-7 inline-flex rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">nelsonjan75@gmail.com ↗</a><p className="mt-8 text-sm text-stone-500">Nairobi, Kenya · <a className="hover:text-white" href="https://linkedin.com/in/nelson-ongiri" target="_blank" rel="noreferrer">LinkedIn</a> · <a className="hover:text-white" href="https://github.com/jannelson36" target="_blank" rel="noreferrer">GitHub</a></p></div>
            </div>
        </section>
    );
}
