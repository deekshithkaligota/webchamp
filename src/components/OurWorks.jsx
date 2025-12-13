import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import SEO from './SEO';

// Google Apps Script URL for fetching projects
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6c4Jgqqb_ezOD5L9JqJrxbLOdeh4DbnWJgGAih3DW5OzRR3Rpr6iFclG7I1yRtrAg/exec';

const OurWorks = ({ navigateTo }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                // Ensure data is an array
                const projectsArray = Array.isArray(data) ? data : [data];
                setProjects(projectsArray);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <>
            <SEO
                title="Our Works | Webchamp.services"
                description="View our portfolio of successful web development and digital marketing projects for businesses across India."
                url="https://webchamp.services/works"
            />
            <section className="min-h-screen bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-[#1a120b] pt-24 pb-20">
                {/* Skeleton Animation Styles */}
                <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .skeleton-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}</style>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigateTo('home')}
                        className="inline-flex items-center gap-2 text-[#181410] dark:text-white mb-10 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold">Back to Home</span>
                    </motion.button>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold text-sm rounded-full mb-4">
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#181410] dark:text-white mb-6">
                            Projects That <span className="text-primary">Deliver Results</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-[#181410]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                            Explore our portfolio of successful projects. See how we help businesses across India grow with our proven digital marketing and web development strategies.
                        </p>
                    </motion.div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                            <p className="text-[#181410]/70 dark:text-white/70 font-medium">Loading projects...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="text-center py-20">
                            <p className="text-red-500 font-medium mb-4">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:opacity-90 transition-opacity"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && projects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-[#181410]/70 dark:text-white/70 font-medium">No projects found. Add some projects to your Google Sheet!</p>
                        </div>
                    )}

                    {/* Projects Grid */}
                    {!loading && !error && projects.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="group relative bg-white dark:bg-[#1f1915] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 dark:border-white/5"
                                >
                                    {/* Image Container */}
                                    <div className="aspect-[16/9] overflow-hidden relative">
                                        {/* Skeleton Loader */}
                                        {!loadedImages[index] && (
                                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 skeleton-shimmer" />
                                            </div>
                                        )}
                                        <img
                                            src={project.image}
                                            alt={`${project.title} - Web Development Case Study by Webchamp`}
                                            loading="lazy"
                                            className={`w-full h-full object-cover ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                                            onLoad={() => handleImageLoad(index)}
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 sm:p-8">
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-[#181410] dark:text-white mb-3">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[#181410]/70 dark:text-white/70 leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* View Site Button */}
                                        <a
                                            href={project.siteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#181410] dark:bg-white text-white dark:text-[#181410] font-bold rounded-full hover:opacity-90 transition-opacity"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Site
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative text-center mt-20 p-10 sm:p-16 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-orange-100/50 to-primary/10 dark:from-primary/10 dark:via-amber-900/20 dark:to-primary/5 border border-primary/20"
                    >

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-black text-[#181410] dark:text-white mb-4">
                                Want Similar Results?
                            </h2>
                            <p className="text-lg text-[#181410]/70 dark:text-white/70 mb-8 max-w-xl mx-auto">
                                Let's discuss how we can help you achieve your business goals and take your online presence to the next level.
                            </p>
                            <button
                                onClick={() => navigateTo('home', 'contact')}
                                className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_10px_30px_rgba(255,137,41,0.4)] hover:-translate-y-1 transition-all duration-300"
                            >
                                Get Your Free Strategy Call
                                <ArrowLeft className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default OurWorks;


