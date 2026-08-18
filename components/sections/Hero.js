import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const socials = [
    { icon: GitHubIcon, href: "https://github.com/jannelson36", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://linkedin.com/in/nelson-ongiri", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://instagram.com/_jannelson", label: "Instagram" },
    { icon: EmailIcon, href: "mailto:nelsonjan75@gmail.com", label: "Email" },
];

function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden border-b border-stone-300/80 px-6 pb-20 pt-36 dark:border-stone-800 sm:px-10 lg:px-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl dark:bg-lime-300/10" />
            <div className="relative mx-auto max-w-7xl">
                <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-7 font-mono text-xs uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">Portfolio · Nairobi, Kenya</motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-8xl">Websites and products built with care.</motion.h1>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1.4fr_1fr]">
                    <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300">I&apos;m Jan Nelson, a full-stack developer in Nairobi. I design and build focused web experiences for people doing real work.</p>
                    <div className="flex flex-wrap content-start gap-3">
                        <Link href="#projects" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-lime-300 dark:text-slate-950">Selected work ↘</Link>
                        <Link href="#contact" className="rounded-full border border-stone-400 px-5 py-3 text-sm font-semibold transition hover:border-slate-950 dark:border-stone-600 dark:hover:border-stone-200">Let&apos;s work together</Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-16 flex flex-wrap gap-x-6 gap-y-4 text-stone-500 dark:text-stone-400">
                    {socials.map(({ icon: Icon, href, label }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition hover:text-slate-950 dark:hover:text-white"><Icon className="h-4 w-4" /> {label}</a>)}
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
