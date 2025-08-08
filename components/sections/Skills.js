import React, { useState, useEffect, useRef } from "react";
import SkillCardBlock from "../SkillCardBlock";
import { motion, useInView } from "framer-motion";

function Skills({ skills }) {
    const [visibleSkills, setVisibleSkills] = useState({});
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Skill proficiency levels (you can adjust these based on actual skill levels)
    const skillProficiency = {
        "JavaScript": 95,
        "React.js": 90,
        "Next.js": 85,
        "Node.js": 88,
        "Python": 92,
        "Java": 85,
        "TypeScript": 80,
        "MongoDB": 82,
        "MySQL": 85,
        "PostgreSQL": 80,
        "AWS": 75,
        "Git": 95,
        "Docker": 70,
        "PHP": 78,
        "C": 75,
        "Kotlin": 70,
        "Express.js": 85,
        "React Native": 80,
        "Ionic": 75,
        "MUI": 88,
        "Tailwind": 90,
        "Figma": 85,
        "Github Actions": 75
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const ProgressBar = ({ skill, proficiency, delay = 0 }) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            if (isInView) {
                const timer = setTimeout(() => {
                    setProgress(proficiency);
                }, delay * 100);
                return () => clearTimeout(timer);
            }
        }, [isInView, proficiency, delay]);

        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: delay * 0.1, duration: 0.5 }}
                className="mb-6 group"
            >
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill}
                    </span>
                    <span className="text-blue-400 font-bold">
                        {progress}%
                    </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${progress}%` : 0 }}
                        transition={{ 
                            duration: 1.5, 
                            delay: delay * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    const SkillCategory = ({ category, index }) => {
        const categoryRef = useRef(null);
        const categoryInView = useInView(categoryRef, { once: true });

        return (
            <motion.div
                ref={categoryRef}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
                <motion.h3 
                    className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -10 }}
                    animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    {category.title}
                </motion.h3>
                
                <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                        const proficiency = skillProficiency[skill.name] || 70;
                        return (
                            <ProgressBar
                                key={skill.name}
                                skill={skill.name}
                                proficiency={proficiency}
                                delay={skillIndex}
                            />
                        );
                    })}
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl laptop:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        I&apos;m passionate about learning new technologies and constantly improving my skills. 
                        Here&apos;s a breakdown of my technical expertise and proficiency levels.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills && skills.length > 0 ? (
                        skills.map((category, index) => (
                            <SkillCategory 
                                key={category.title} 
                                category={category} 
                                index={index}
                            />
                        ))
                    ) : (
                        // Fallback content if skills data is not available
                        <>
                            <SkillCategory 
                                category={{
                                    title: "Frontend",
                                    skills: [
                                        { name: "JavaScript" },
                                        { name: "React.js" },
                                        { name: "Next.js" },
                                        { name: "TypeScript" },
                                        { name: "Tailwind" }
                                    ]
                                }}
                                index={0}
                            />
                            <SkillCategory 
                                category={{
                                    title: "Backend",
                                    skills: [
                                        { name: "Node.js" },
                                        { name: "Python" },
                                        { name: "Java" },
                                        { name: "Express.js" },
                                        { name: "PHP" }
                                    ]
                                }}
                                index={1}
                            />
                            <SkillCategory 
                                category={{
                                    title: "Database & Tools",
                                    skills: [
                                        { name: "MongoDB" },
                                        { name: "MySQL" },
                                        { name: "PostgreSQL" },
                                        { name: "Git" },
                                        { name: "AWS" }
                                    ]
                                }}
                                index={2}
                            />
                        </>
                    )}
                </motion.div>

                {/* Skills Summary Stats */}
                <motion.div 
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {[
                        { label: "Years of Experience", value: "5+" },
                        { label: "Projects Completed", value: "50+" },
                        { label: "Technologies Mastered", value: "20+" },
                        { label: "Happy Clients", value: "30+" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 hover:border-purple-500/40 transition-all duration-300"
                        >
                            <motion.div 
                                className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-400 text-sm font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
