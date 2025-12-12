import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const caseStudies = [
    {
        title: "Gupta Sweets",
        location: "Delhi",
        result: "+350% Footfall",
        tags: ["SEO", "GBP Optimization"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhqvdZ6Pvw0PKgcAGOPVpBSjfZa4g2oPOdiad675on-PAbjb2v8nEHfUCwLRSk_Bp5HBFIyTBZL13Om2CXyFVsqCcOo94xODcZzYAP1-8Xwqr7pp7HySA0VX4WJ70t14DcXXc158PiYwPUG-r41Uq0uM6omUG_S8jWgj5wFqdwugdJRcOHRsqWSVzr12XXx42ffQr__uMoGQGbtLWNivr9FBXvM-fC8MpLCdrpMdBcbAVXA10AYOVHqnVl2zYsl7yzd_ZbwDeepmQ",
        siteUrl: "#"
    },
    {
        title: "Sharma Electronics",
        location: "Jaipur",
        result: "4x Calls in 3 Months",
        tags: ["GBP Optimization"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB0gZl8hNEMW-4XNCMefYoULXZdO2NgHhqFxZX7kv2INHqb2rGnFo-PgnQ5DIa0xGUaQxnken3kJyzEnj1jHQWV9NDPCKA3aMeY6j_sxfCbN9ER0Jx-G4EwenMcC9GK6sjZLb_gUf3PdOB-bLH0e4F5F7JWRTCtmYt7YBbowioiQeStXJ0-KvLJC8eebjzhohFkeLgLS8PdibI16NMAPs3s6aG8aieGXTd_3ocE5YNmAKlOhgRhAW9vKAh9MtFNN9If0GDihSDpTE",
        siteUrl: "#"
    },
    {
        title: "Chennai Medical Clinic",
        location: "Chennai",
        result: "250% More Bookings",
        tags: ["Website Dev", "SEO"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtwqJMqTmopWOVPaIAG_CLkVwsSkk5kazoLXK7l4C3225bK0zTSdKSSf3nNkFIeE_lFTTSzOGVsDDxiCzVGHQuz6qN7V8fJLcUYvis4YyoQt9pQV98N_njhEOf8NEzN6Ilad_Tlzf6CDuA6-vZyMUGVwVFwLyR__SVaBJnZi8uc1Yq_x0wpKjH9xqx2WaiW0Qj-uHcmeyddjp7TMLZhj3blXGX_6P1k_w8Tbr9M1Xsq4qLu9xzJ-PQaBNtRN9Yiua1Bpk6ZOfUamk",
        siteUrl: "#"
    },
    {
        title: "Patel Logistics",
        location: "Ahmedabad",
        result: "2x Lead Generation",
        tags: ["Website Dev", "PPC"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        siteUrl: "#"
    }
];

const CaseStudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    const Card = ({ study, index }) => (
        <div className="group rounded-2xl overflow-hidden relative">
            <div className="aspect-[16/9] md:aspect-[16/7] overflow-hidden relative">
                {/* Skeleton Loader */}
                {!loadedImages[index] && (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 skeleton-shimmer" />
                    </div>
                )}
                <img
                    src={study.image}
                    alt={`${study.title} - ${study.location} - ${study.result} - Web Development Case Study by Webchamp`}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(index)}
                />

                {/* Visit Site Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                        href={study.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg"
                    >
                        <ExternalLink className="w-5 h-5" />
                        Visit Site
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <section id="case-studies" className="py-12 md:py-20 bg-white dark:bg-[#1a120b]" aria-labelledby="case-studies-heading">
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
                <div className="text-center mb-12">
                    <h2 id="case-studies-heading" className="text-4xl sm:text-5xl font-black text-[#181410] dark:text-white mb-4">
                        Our Works - Web Development Case Studies
                    </h2>
                    <p className="text-lg text-[#181410]/70 dark:text-white/70 max-w-2xl mx-auto">
                        See how we help small and medium businesses across India grow with our proven digital marketing and web development strategies.
                    </p>
                </div>

                {/* Carousel with Side Navigation */}
                <div className="relative overflow-hidden max-w-7xl mx-auto -mx-2 md:mx-auto">
                    {/* Navigation Buttons on Sides */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white text-black border border-gray-200 hover:scale-110 shadow-lg transition-transform"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white text-black border border-gray-200 hover:scale-110 shadow-lg transition-transform"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Single Card Display */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{
                                x: `-${currentIndex * 100}%`
                            }}
                            transition={{
                                type: "tween",
                                duration: 0.4,
                                ease: "easeInOut"
                            }}
                        >
                            {caseStudies.map((study, index) => (
                                <div key={index} className="min-w-full px-0 md:px-2">
                                    <Card study={study} index={index} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Indicator Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-primary w-4 md:w-8'
                                    : 'bg-gray-300 dark:bg-white/20 hover:bg-primary/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
