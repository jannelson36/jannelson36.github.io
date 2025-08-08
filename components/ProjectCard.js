import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

function ProjectCard({ title = '', slug = '', overview = '', stack = [], links = {}, imageUrl = null }) {
    const safeOverview = typeof overview === 'string' ? overview : '';
    const safeStack = Array.isArray(stack) ? stack : [];
    const safeLinks = links || {};

    return (
        <div className="flex flex-col justify-between rounded-[8px] bg-white dark:bg-gray-800 w-full sm:w-[20rem] md:w-[22rem] p-5 hover:-translate-y-[7px] transition-transform duration-200 shadow dark:shadow-none border border-gray-200 dark:border-gray-700">
            <Link target="_top" href={`/projects/${slug}`}>
                {imageUrl && (
                    <div className="mb-4 overflow-hidden rounded-md">
                        <img src={imageUrl} alt={`${title} preview`} className="w-full h-40 object-cover" />
                    </div>
                )}
                <div className="text-[22px] md:text-[24px] font-bold line-clamp-1">{title}</div>
                <div className="py-4 text-sm md:text-base font-semibold text-gray-600 dark:text-gray-300 line-clamp-3">
                    {safeOverview.length > 160
                        ? safeOverview.slice(0, 160) + " ..."
                        : safeOverview.slice(0, 160)}
                </div>
            </Link>
            <div className="flex items-center justify-between mt-2">
                <div className="flex gap-3">
                    {safeStack.slice(0, 3).map((item, i) => (
                        <div key={i} className="text-[12px] text-gray-500 dark:text-gray-400">
                            {item}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    {safeLinks.github && (
                        <a
                            target="_blank"
                            href={safeLinks.github}
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </a>
                    )}
                    {safeLinks.hosted && (
                        <a
                            target="_blank"
                            href={safeLinks.hosted}
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                        >
                            <LinkIcon />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
