import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission (replace with actual submission logic)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
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

    const contactInfo = [
        {
            icon: EmailIcon,
            label: 'Email',
            value: 'jannelson36@gmail.com',
            href: 'mailto:jannelson36@gmail.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: PhoneIcon,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: LocationOnIcon,
            label: 'Location',
            value: 'New York, NY',
            href: '#',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const socialLinks = [
        {
            icon: LinkedInIcon,
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/jannelson36',
            color: 'hover:text-blue-400'
        },
        {
            icon: GitHubIcon,
            name: 'GitHub',
            href: 'https://github.com/jannelson36',
            color: 'hover:text-gray-400'
        },
        {
            icon: EmailIcon,
            name: 'Email',
            href: 'mailto:jannelson36@gmail.com',
            color: 'hover:text-green-400'
        }
    ];

    if (isSubmitted) {
        return (
            <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="bg-green-500/10 border border-green-500/30 rounded-2xl p-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        >
                            <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-6" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Your message has been sent successfully. I&apos;ll get back to you as soon as possible!
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
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
                        Get In Touch
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        I&apos;m always interested in new opportunities and collaborations. 
                        Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.a
                                            key={info.label}
                                            href={info.href}
                                            variants={itemVariants}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group"
                                        >
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">{info.label}</p>
                                                <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700/50`}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Availability */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6"
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 font-medium">Available for work</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Currently accepting new projects and opportunities. Let&apos;s build something amazing together!
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                                            errors.name ? 'border-red-500' : 'border-gray-600 focus:border-blue-500'
                                        }`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                                            errors.email ? 'border-red-500' : 'border-gray-600 focus:border-blue-500'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                                        errors.subject ? 'border-red-500' : 'border-gray-600 focus:border-blue-500'
                                    }`}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && (
                                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                                        errors.message ? 'border-red-500' : 'border-gray-600 focus:border-blue-500'
                                    }`}
                                    placeholder="Tell me about your project or just say hello!"
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                                    isSubmitting 
                                        ? 'opacity-75 cursor-not-allowed' 
                                        : 'hover:shadow-xl hover:from-blue-600 hover:to-purple-700'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <SendIcon className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
