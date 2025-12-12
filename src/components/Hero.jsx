import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import DotGrid from './DotGrid';

const Hero = () => {
    return (
        <header
            id="home"
            aria-label="Hero section - Web Development Agency"
            className="relative lg:min-h-screen flex items-center justify-center overflow-hidden bg-background-light pt-[16dvh] pb-12 lg:py-20 lg:pb-0"
        >
            {/* Interactive Dot Grid Background */}
            <DotGrid
                baseColor="#cbd5e1"
                activeColor="#ff8929"
                dotSize={4}
                gap={24}
                proximity={200}
                shockRadius={300}
            />

            {/* Inner Vignette Overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-[5]"
                style={{
                    background: 'radial-gradient(circle at center, #f8f7f5 2%, transparent 40%)'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Helping Businesses Go Digital
                </div>

                <motion.h1
                    className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#181410] leading-tight mb-4 lg:mb-8"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span
                        className="inline-block"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.0155,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                    >
                        {"We Build What".split("").map((char, i) => (
                            <motion.span
                                key={`line1-${i}`}
                                className="inline-block"
                                style={{ display: char === " " ? "inline" : "inline-block" }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        filter: "blur(10px)",
                                        scale: 0.8,
                                        y: 20
                                    },
                                    visible: {
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        scale: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.26,
                                            ease: [0.2, 0.65, 0.3, 0.9]
                                        }
                                    }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.span>
                    <br />
                    <motion.span
                        className="inline-block text-primary"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.0155,
                                    delayChildren: 0.155
                                }
                            }
                        }}
                    >
                        {"Moves You Forward".split("").map((char, i) => (
                            <motion.span
                                key={`line2-${i}`}
                                className="inline-block"
                                style={{ display: char === " " ? "inline" : "inline-block" }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        filter: "blur(10px)",
                                        scale: 0.8,
                                        y: 20
                                    },
                                    visible: {
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        scale: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.26,
                                            ease: [0.2, 0.65, 0.3, 0.9]
                                        }
                                    }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-[#181410]/70 max-w-3xl mb-12"
                >
                    We build high-performance websites that drive growth, attract customers, and deliver measurable results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
                >
                    <button onClick={() => window.location.href = '#contact'} className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        Get Your Free Strategy Call <ArrowRight className="w-5 h-5" />
                    </button>
                    <button onClick={() => window.location.href = '#case-studies'} className="bg-white text-[#181410] font-bold px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                        View Our Work
                    </button>
                </motion.div>
            </div >
        </header>
    );
};

export default Hero;
