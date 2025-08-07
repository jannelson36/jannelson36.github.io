import React from "react";
import styles from "@/styles/index.module.css";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import allProjects from "@/data/projectData/index.json";
import HomeOutlinedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";
import Meta from "@/components/Meta";
import { getGitHubOgImageUrl } from "@/hooks/useAxios";

function toRepoFullName(project) {
    const gh = project?.links?.github || "";
    try {
        if (gh.includes("github.com")) {
            const parts = gh.replace(/\.git$/, "").split("github.com/")[1].split("/");
            const owner = parts[0];
            const repo = parts[1];
            if (owner && repo) return `${owner}/${repo}`;
        }
    } catch {}
    // fallback to owner's username with repo_name
    return `jannelson36/${project.repo_name}`;
}

function ProjectsPage({ projects }) {
    return (
        <>
            <Meta
                title={"Projects | jannelson36.github.io"}
                seoTitle={"Projects | jannelson36.github.io"}
                seoURL={"https://jannelson36.github.io/projects"}
            />
            <div className="mt-[60px]">
                <div className={styles.container}>
                    <div className="flex flex-row justify-between items-center gap-10">
                        <div className="text-[3rem] font-semibold">
                            Projects
                        </div>
                        <div>
                            <Link href={'/'}>
                                <HomeOutlinedIcon className="text-[2rem]" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-stretch flex-wrap gap-5 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]">
                        {
                            projects?.map((project, i) => (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 1,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i / 11,
                                    }}
                                    key={i}
                                >
                                    <ProjectCard
                                        title={project.title}
                                        slug={project.repo_name}
                                        stack={project.stack}
                                        overview={project.overview}
                                        links={project.links}
                                        imageUrl={project.ogImage || null}
                                        key={i}
                                    />
                                </motion.div>
                            ))
                        }
                    </div>
                    <div className="flex flex-row justify-center items-center mt-8">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                            }}
                        >
                            <Link
                                className="flex flex-row justify-center items-center border-solid border-[1px] border-[#350078] py-3 px-10 rounded-[8px] font-bold w-fit"
                                href={'/'}
                            >
                                {" "}
                                Return to home{" "}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;

export async function getStaticProps() {
    const projects = allProjects.map((project) => {
        const repoFull = toRepoFullName(project);
        return { ...project, ogImage: getGitHubOgImageUrl(repoFull) };
    });
    return {
        props: { projects }
    };
}
