import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    const navItems = useMemo(() => [
        { name: 'Home', href: '#hero', icon: HomeIcon },
        { name: 'About', href: '#aboutme', icon: PersonIcon },
        { name: 'Projects', href: '#projects', icon: WorkIcon },
        { name: 'Skills', href: '#skills', icon: CodeIcon },
        { name: 'Contact', href: '#contact', icon: ContactMailIcon },
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const smoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <>
            {/* Desktop & Mobile Navigation Bar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/80 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/50 shadow-lg' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0"
                        >
                            <Link href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>
                                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                    JN
                                </span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={(e) => smoothScroll(e, item.href)}
                                            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                                                activeSection === item.href.substring(1)
                                                    ? 'text-white bg-blue-500/20'
                                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                            }`}
                                        >
                                            {item.name}
                                            {activeSection === item.href.substring(1) && (
                                                <motion.div
                                                    layoutId="activeSection"
                                                    className="absolute inset-0 rounded-lg border border-white/40 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-md"
                                                    initial={false}
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                            >
                                {isOpen ? (
                                    <CloseIcon className="h-6 w-6" />
                                ) : (
                                    <MenuIcon className="h-6 w-6" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
                            onClick={toggleMenu}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                                    <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                        Navigation
                                    </span>
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleMenu}
                                        className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <CloseIcon className="h-6 w-6" />
                                    </motion.button>
                                </div>

                                {/* Navigation Items */}
                                <nav className="flex-1 px-6 py-8">
                                    <div className="space-y-2">
                                        {navItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.div
                                                    key={item.name}
                                                    variants={itemVariants}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={(e) => smoothScroll(e, item.href)}
                                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group ${
                                                            activeSection === item.href.substring(1)
                                                                ? 'text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md'
                                                                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                                        }`}
                                                    >
                                                        <Icon className="h-5 w-5" />
                                                        <span>{item.name}</span>
                                                        {activeSection === item.href.substring(1) && (
                                                            <motion.div
                                                                className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ type: "spring", bounce: 0.5 }}
                                                            />
                                                        )}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </nav>

                                {/* Footer */}
                                <div className="p-6 border-t border-gray-700/50">
                                    <p className="text-sm text-gray-400 text-center">
                                        © 2024 Jannelson Portfolio
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-white/50 dark:bg-white/10 backdrop-blur"
                style={{
                    scaleX: scrolled ? 1 : 0,
                }}
                initial={{ scaleX: 0 }}
                animate={{ 
                    scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0 
                }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
}

export default Navigation;
