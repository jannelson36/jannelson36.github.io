import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

function Hero() {
    const [typedText, setTypedText] = useState("");
    const [currentRole, setCurrentRole] = useState(0);
    
    const roles = useMemo(() => [
        "Full Stack Developer",
        "Software Engineer", 
        "Problem Solver",
        "Tech Enthusiast",
        "Code Architect"
    ], []);

    // Typing animation effect
    useEffect(() => {
        let currentText = "";
        let currentIndex = 0;
        const targetText = roles[currentRole];
        
        const typeTimer = setInterval(() => {
            if (currentIndex < targetText.length) {
                currentText += targetText[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typeTimer);
                // Wait 2 seconds then start deleting
                setTimeout(() => {
                    const deleteTimer = setInterval(() => {
                        if (currentText.length > 0) {
                            currentText = currentText.slice(0, -1);
                            setTypedText(currentText);
                        } else {
                            clearInterval(deleteTimer);
                            setCurrentRole((prev) => (prev + 1) % roles.length);
                        }
                    }, 50);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typeTimer);
    }, [currentRole, roles]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 p-4 md:p-8">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-50">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-gray-400 dark:bg-white rounded-full"
                            style={{
                                width: Math.random() * 4 + 1 + 'px',
                                height: Math.random() * 4 + 1 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                            }}
                            animate={{
                                y: [-20, 20],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col laptop:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6">
                {/* Left Side - Text Content */}
                <motion.div 
                    className="flex flex-col items-center laptop:items-start laptop:w-1/2 text-center laptop:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-4"
                    >
                        👋 Hello, I&apos;m
                    </motion.div>
                    
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl laptop:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-700 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-400 bg-clip-text text-transparent"
                    >
                        Nelson Ongiri
                    </motion.h1>
                    
                    <motion.div
                        variants={itemVariants}
                        className="text-2xl laptop:text-4xl font-semibold text-yellow-400 mb-6 h-12"
                    >
                        {typedText}<span className="animate-pulse">|</span>
                    </motion.div>
                    
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl"
                    >
                        I design, build, and productionize 
                        full‑stack and AI-powered products—turning ambiguous ideas 
                        into measurable business outcomes.
                    </motion.p>
                    
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 mb-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 font-semibold rounded-full transition-all duration-300 bg-white/60 dark:bg-white/10 text-gray-800 dark:text-white border border-white/40 dark:border-white/10 backdrop-blur-md hover:shadow-xl"
                        >
                            <Link href="#projects" className="flex items-center gap-2">
                                View My Work
                            </Link>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 font-semibold rounded-full transition-all duration-300 bg-white/60 dark:bg-white/10 text-gray-800 dark:text-white border border-white/40 dark:border-white/10 backdrop-blur-md hover:shadow-xl"
                        >
                            <Link href="#contact" className="flex items-center gap-2">
                                <EmailIcon className="w-5 h-5" />
                                Get In Touch
                            </Link>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                            <span href="/public/Resume.pdf" className="flex items-center gap-2">
                                <DownloadIcon className="w-5 h-5" />
                                Download CV
                            </span>
                        </motion.button>
                    </motion.div>
                    
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-6"
                    >
                        {[
                            { icon: GitHubIcon, href: "https://github.com/jannelson36", color: "hover:text-gray-400" },
                            { icon: LinkedInIcon, href: "https://linkedin.com/in/nelson-ongiri", color: "hover:text-blue-400" },
                            { icon: InstagramIcon, href: "https://instagram.com/_jannelson", color: "hover:text-pink-400" },
                            { icon: EmailIcon, href: "mailto:nelsonjan75@gmail.com", color: "hover:text-green-400" }
                        ].map(({ icon: Icon, href, color }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-gray-400 ${color} transition-all duration-300`}
                            >
                                <Icon className="w-8 h-8" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
                
                {/* Right Side - 3D Profile Image */}
                <motion.div
                    className="laptop:w-1/2 flex justify-center mt-12 laptop:mt-0"
                    variants={floatingVariants}
                    animate="animate"
                >
                    <div className="relative">
                        {/* Glowing background circle */}
                        <div className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse bg-white/50 dark:bg-white/10"></div>
                        
                        {/* Profile image container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-80 h-80 rounded-full p-1 bg-white/60 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-lg"
                        >
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-6xl">
                                    👨‍💻
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Floating elements around profile */}
                        {[
                            { emoji: "⚡", position: "top-0 right-8", delay: 0 },
                            { emoji: "🚀", position: "bottom-8 right-0", delay: 1 },
                            { emoji: "💡", position: "top-8 left-0", delay: 2 },
                            { emoji: "🎯", position: "bottom-0 left-8", delay: 3 }
                        ].map(({ emoji, position, delay }) => (
                            <motion.div
                                key={emoji}
                                className={`absolute ${position} w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl`}
                                animate={{
                                    y: [-5, 5, -5],
                                    rotate: [-5, 5, -5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: delay * 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                {emoji}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
