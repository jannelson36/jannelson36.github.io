import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

function ProjectCard({ title = '', slug = '', overview = '', stack = [], links = {} }) {
    const safeOverview = typeof overview === 'string' ? overview : '';
    const safeStack = Array.isArray(stack) ? stack : [];
    const safeLinks = links || {};

    return (
        <div className="flex flex-col justify-between items-stretch rounded-[5px] bg-[#226160] mobile:w-[100%] tablet:w-[20rem] laptop:w-[20rem] desktop:w-[20rem] h-[16rem] p-5 hover:-translate-y-[7px] transition-all ease-cubic-bezier delay-0 opacity duration-[0.25s]">
            <Link target="_top" href={`/projects/${slug}`}>
                <div className="text-[25px] font-bold">{title}</div>
                <div className="py-5 h-fit font-semibold text-[#c2c2c2]">
                    {safeOverview.length > 110
                        ? safeOverview.slice(0, 110) + " ..."
                        : safeOverview.slice(0, 110)}
                </div>
            </Link>
            <div className="flex flex-row justify-between items-center">
                {safeStack.slice(0, 3).map((item, i) => (
                    <div key={i} className="text-[12px] text-[#a4a4a4]">
                        {item}
                    </div>
                ))}
                <div className="flex flex-row justify-center items-center gap-3">
                    {safeLinks.github && (
                        <a
                            target="_blank"
                            href={safeLinks.github}
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    )}
                    {safeLinks.hosted && (
                        <a
                            target="_blank"
                            href={safeLinks.hosted}
                            rel="noopener noreferrer"
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
