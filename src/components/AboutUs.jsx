import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import aboutImage from '../assets/about-us.webp';

const AboutUs = ({ navigateTo }) => {
    const services = [
        "Custom Website Development",
        "Search Engine Optimization (SEO)",
        "Google Business Profile Management",
        "Business Automation Solutions",
        "E-commerce Solutions",
        "Upto one year free support"
    ];

    return (
        <div className="bg-white dark:bg-background-dark min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigateTo('home')}
                    className="mb-8 text-primary font-bold hover:underline flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-5xl sm:text-6xl font-black text-[#181410] dark:text-white mb-6">
                        We are <span className="text-primary">Webchamp</span>
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-lg font-medium text-[#181410]/60 dark:text-white/60">
                        <span>Hyderabad, India</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>Est. 2025</span>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-16">
                    {/* The Single Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9]"
                    >
                        <img
                            src={aboutImage}
                            alt="Webchamp Team"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Story & Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        <h2 className="text-3xl font-bold text-[#181410] dark:text-white mb-6">Building the Digital Future of Local Businesses</h2>
                        <p className="text-[#181410]/70 dark:text-white/70 leading-relaxed mb-6">
                            Founded in 2025 in the heart of Hyderabad, Webchamp was born from a simple observation: local businesses have incredible potential, but they often lack the digital tools to unlock it. We set out to change that.
                        </p>
                        <p className="text-[#181410]/70 dark:text-white/70 leading-relaxed mb-6">
                            We are not just a web design agency; we are a team of digital architects, strategists, and creators passionate about craftsmanship. We believe that a website shouldn't just look good—it should work hard. It should bring in customers, build trust, and drive growth.
                        </p>
                        <p className="text-[#181410]/70 dark:text-white/70 leading-relaxed">
                            Our mission is to empower Indian businesses with effective digital solutions. From the bustling streets of Hyderabad to the global digital stage, we are here to champion your success.
                        </p>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#fff0f0] dark:bg-white/5 rounded-3xl p-8 sm:p-12"
                    >
                        <h3 className="text-2xl font-bold text-[#181410] dark:text-white mb-8">What We Do Best</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-[#181410]/80 dark:text-white/80 font-medium">{service}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center pt-8"
                    >
                        <h3 className="text-2xl font-bold text-[#181410] dark:text-white mb-6">Ready to transform your business?</h3>
                        <button
                            onClick={() => navigateTo('home', 'contact')}
                            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                        >
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
