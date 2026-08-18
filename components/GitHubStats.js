import React, { useEffect, useState } from "react";

export default function GitHubStats({ username = "jannelson36" }) {
    const [stats, setStats] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let active = true;

        async function load() {
            try {
                const [profile, repos] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`),
                    fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
                ]);
                if (!profile.ok || !repos.ok) throw new Error("GitHub request failed");

                const profileData = await profile.json();
                const repoData = await repos.json();
                if (active) {
                    setStats({
                        repos: profileData.public_repos,
                        followers: profileData.followers,
                        stars: repoData.reduce((total, repo) => total + repo.stargazers_count, 0),
                    });
                    setStatus("ready");
                }
            } catch {
                if (active) setStatus("unavailable");
            }
        }

        load();
        return () => { active = false; };
    }, [username]);

    const metrics = stats ? [
        ["Public repositories", stats.repos],
        ["Stars", stats.stars],
        ["Followers", stats.followers],
    ] : [];

    return (
        <section className="border-t border-stone-300 px-6 py-24 dark:border-stone-800 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.7fr_1.3fr]">
                <p className="font-mono text-xs uppercase tracking-[.24em] text-stone-500">GitHub</p>
                <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-4"><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Open-source activity.</h2><a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="text-sm underline decoration-stone-400 underline-offset-4 hover:decoration-slate-950 dark:hover:decoration-white">github.com/{username} ↗</a></div>
                    {status === "loading" && <p className="mt-8 text-stone-500">Loading current GitHub stats…</p>}
                    {status === "unavailable" && <p className="mt-8 text-stone-500">GitHub stats are unavailable right now. Visit the profile for the latest activity.</p>}
                    {status === "ready" && <dl className="mt-10 grid border-t border-stone-300 dark:border-stone-800 sm:grid-cols-3">{metrics.map(([label, value]) => <div key={label} className="border-b border-stone-300 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 dark:border-stone-800"><dt className="text-sm text-stone-500">{label}</dt><dd className="mt-2 text-4xl font-semibold tracking-[-.05em]">{value}</dd></div>)}</dl>}
                </div>
            </div>
        </section>
    );
}
