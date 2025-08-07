import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Image from 'next/image';

function Projects({ projects }) {
    const [filteredProjects, setFilteredProjects] = useState(projects || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Get unique project types for filtering
    const projectTypes = ["All", ...new Set((projects || []).map(project => project.type))];

    useEffect(() => {
        if (!projects) return;
        
        let filtered = projects;

        // Filter by type
        if (selectedFilter !== "All") {
            filtered = filtered.filter(project => project.type === selectedFilter);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (project.stack && project.stack.some(tech => 
                    tech.toLowerCase().includes(searchTerm.toLowerCase())
                ))
            );
        }

        setFilteredProjects(filtered);
    }, [projects, selectedFilter, searchTerm]);

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

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const ProjectModal = ({ project, isOpen, onClose }) => {
        if (!project) return null;

        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex justify-between items-start">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                            {project.type}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <CalendarTodayIcon className="w-4 h-4" />
                                            <span className="text-sm">
                                                {project.timeline?.startDate} - {project.timeline?.endDate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                                >
                                    <CloseIcon className="text-gray-400" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                {/* Project Images */}
                                {project.images && project.images.length > 0 && (
                                    <div className="mb-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.images.map((image, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden bg-gray-800">
                                                    <Image
                                                        src={image.path}
                                                        alt={image.alt}
                                                        width={400}
                                                        height={200}
                                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Project Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        This is a {project.type.toLowerCase()} project that demonstrates advanced 
                                        development skills using {project.stack?.join(", ")}. The project was 
                                        developed for {project.associated?.name} and showcases modern development 
                                        practices and clean code architecture.
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                {project.stack && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                                        >
                                            <GitHubIcon className="w-5 h-5" />
                                            View Code
                                        </a>
                                    )}
                                    {project.links?.hosted && (
                                        <a
                                            href={project.links.hosted}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                        >
                                            <LaunchIcon className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    const EnhancedProjectCard = ({ project, index }) => {
        return (
            <motion.div
                variants={itemVariants}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                    {project.images && project.images[0] ? (
                        <Image
                            src={project.images[0].path}
                            alt={project.images[0].alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl">
                            💻
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            {project.type}
                        </span>
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.associated?.name && `${project.associated.name} • `}
                        {project.timeline?.startDate} - {project.timeline?.endDate}
                    </p>

                    {/* Tech Stack */}
                    {project.stack && (
                        <div className="flex flex-wrap gap-1 mb-4">
                            {project.stack.slice(0, 3).map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.stack.length > 3 && (
                                <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                                    +{project.stack.length - 3}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => openModal(project)}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            View Details
                        </button>
                        {project.links?.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
                            >
                                <GitHubIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Here are some of my recent projects that showcase my skills in various technologies 
                        and demonstrate my ability to solve complex problems with elegant solutions.
                    </motion.p>
                </motion.div>

                {/* Search and Filter Controls */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <motion.div variants={itemVariants} className="relative flex-1 max-w-md">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </motion.div>

                        {/* Filter Buttons */}
                        <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
                            {projectTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedFilter(type)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        selectedFilter === type
                                            ? 'bg-purple-500 text-white shadow-lg'
                                            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects && filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <EnhancedProjectCard
                                key={project.slug || index}
                                project={project}
                                index={index}
                            />
                        ))
                    ) : (
                        <motion.div 
                            variants={itemVariants}
                            className="col-span-full text-center py-12"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Project Count */}
                {filteredProjects && filteredProjects.length > 0 && (
                    <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-400">
                            Showing {filteredProjects.length} of {projects?.length || 0} projects
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Project Modal */}
            <ProjectModal 
                project={selectedProject} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </section>
    );
}

export default Projects;
