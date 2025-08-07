import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import GitHubStats from "@/components/GitHubStats";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useState } from "react";
import Meta from "@/components/Meta";

// Import data directly for static export
import allProjects from "../data/projectData/index.json";
import allSkills from "../data/skillData/index.json";

export default function Home({ projects: initialProjects, skills: initialSkills }) {
    // STATES
    const [projects, setProjects] = useState(initialProjects || []);
    const [skills, setSkills] = useState(initialSkills || []);

    return (
        <main className="pt-16 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-4 sm:px-6">
            <Meta />
            <DarkModeToggle />
            <Navigation />
            <Hero />
            <div className={styles.container}>
                <About />
                <Projects projects={projects} />
                <Skills skills={skills} />
                <GitHubStats username="jannelson36" />
                <Contact />
            </div>
        </main>
    );
}

// Static props for static export
export async function getStaticProps() {
    try {
        return {
            props: {
                projects: allProjects || [],
                skills: allSkills.sort((a, b) => a.index - b.index) || []
            }
        };
    } catch (error) {
        console.error('Error loading data:', error);
        return {
            props: {
                projects: [],
                skills: []
            }
        };
    }
}