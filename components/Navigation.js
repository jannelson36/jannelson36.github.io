import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    ["Work", "#projects"],
    ["About", "#aboutme"],
    ["Capabilities", "#skills"],
    ["Contact", "#contact"],
];

export default function Navigation() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const close = () => setOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-stone-300/70 bg-[#f7f7f3]/90 px-6 py-4 backdrop-blur dark:border-stone-800 dark:bg-[#10120f]/90 sm:px-10 lg:px-16">
            <nav className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="#hero" className="text-base font-semibold tracking-[-.04em]">Jan Nelson<span className="text-amber-600 dark:text-lime-300">.</span></Link>
                <div className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-stone-600 transition hover:text-slate-950 dark:text-stone-300 dark:hover:text-white">{label}</Link>)}</div>
                <a href="mailto:nelsonjan75@gmail.com" className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white dark:bg-lime-300 dark:text-slate-950 md:block">Start a project</a>
                <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="text-sm font-medium md:hidden">{open ? "Close" : "Menu"}</button>
            </nav>
            {open && <div className="mx-auto mt-4 grid max-w-7xl gap-1 border-t border-stone-300 pt-3 dark:border-stone-800 md:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-sm">{label}</Link>)}<a href="mailto:nelsonjan75@gmail.com" className="py-2 text-sm">Start a project ↗</a></div>}
        </header>
    );
}
