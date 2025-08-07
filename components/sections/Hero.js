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
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-50">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
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
                        className="text-gray-300 text-lg font-medium mb-4"
                    >
                        👋 Hello, I&apos;m
                    </motion.div>
                    
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl laptop:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    >
                        Jannelson
                    </motion.h1>
                    
                    <motion.div
                        variants={itemVariants}
                        className="text-2xl laptop:text-4xl font-semibold text-yellow-400 mb-6 h-12"
                    >
                        {typedText}<span className="animate-pulse">|</span>
                    </motion.div>
                    
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl"
                    >
                        I&apos;m a passionate software engineer who loves building innovative solutions 
                        and bringing ideas to life through code. I specialize in creating scalable 
                        applications with modern technologies and best practices.
                    </motion.p>
                    
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 mb-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href="#projects" className="flex items-center gap-2">
                                View My Work
                            </Link>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                        >
                            <Link href="#contact" className="flex items-center gap-2">
                                <EmailIcon className="w-5 h-5" />
                                Get In Touch
                            </Link>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gray-800 text-gray-300 font-semibold rounded-full hover:bg-gray-700 transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
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
                            { icon: LinkedInIcon, href: "https://linkedin.com/in/jannelson36", color: "hover:text-blue-400" },
                            { icon: InstagramIcon, href: "https://instagram.com/jannelson36", color: "hover:text-pink-400" },
                            { icon: EmailIcon, href: "mailto:contact@jannelson36.dev", color: "hover:text-green-400" }
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
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        
                        {/* Profile image container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1"
                        >
                            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
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
