import React from "react";

export default function About() {
    return (
        <section id="aboutme" className="border-t border-stone-300 px-6 py-24 dark:border-stone-800 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">02 — About</p>
                <div>
                    <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">Good software is practical, legible, and made to last.</h2>
                    <div className="mt-10 grid max-w-3xl gap-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300 md:grid-cols-2">
                        <p>I&apos;m Jan, a developer based in Nairobi. I work across the full web stack, from a first interface sketch through deployment and iteration.</p>
                        <p>I care about clear structure, responsive interfaces, and the unglamorous details that make a product dependable once it&apos;s in people&apos;s hands.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
