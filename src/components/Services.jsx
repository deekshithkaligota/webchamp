import React from 'react';
import { motion } from 'framer-motion';
import { Code, Share2, Store, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: "Custom Website Development",
        description: "Create a professional, mobile-friendly website that attracts customers and drives sales.",
        price: "Custom Quote"
    },
    {
        icon: Share2,
        title: "Automated Workflows",
        description: "Save time and improve efficiency by automating your repetitive business tasks.",
        price: "Custom Quote"
    },
    {
        icon: Store,
        title: "Google Business Profile",
        description: "Rank higher in local search results and attract more customers in your area.",
        price: "Custom Quote"
    },
    {
        icon: TrendingUp,
        title: "Search Engine Optimization",
        description: "Get found by more customers on Google and increase your online visibility.",
        price: "Custom Quote"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-12 md:py-20 bg-white dark:bg-[#1a120b]" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="services-heading" className="text-4xl sm:text-5xl font-black text-[#181410] dark:text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-[#181410]/70 dark:text-white/70 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for local business growth in India. From custom websites to SEO optimization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list" aria-label="List of services">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#181410] dark:text-white mb-3">{service.title}</h3>
                                    <p className="text-[#181410]/60 dark:text-white/60 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#181410]/60 dark:text-white/40 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
                                            {service.price}
                                        </span>
                                        <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
