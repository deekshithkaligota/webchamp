import React from 'react';
import { motion } from 'framer-motion';
import { Map, Rocket, BadgePercent, Headphones } from 'lucide-react';

const features = [
    {
        icon: Map,
        title: "Local Market Mastery",
        description: "We understand the Indian market nuances and what local customers are looking for.",
        color: "bg-blue-500"
    },
    {
        icon: Rocket,
        title: "Lightning Fast Delivery",
        description: "Get your professional website up and running in as little as 2 weeks.",
        color: "bg-yellow-500"
    },
    {
        icon: BadgePercent,
        title: "Affordable Excellence",
        description: "Premium quality services at prices that fit your business budget.",
        color: "bg-green-500"
    },
    {
        icon: Headphones,
        title: "Committed Support Team",
        description: "We're here to help you even after your site goes live.",
        color: "bg-purple-500"
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-12 md:py-20 bg-[#fff0f0] dark:bg-background-dark" aria-labelledby="why-choose-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="why-choose-heading" className="text-4xl sm:text-5xl font-black text-[#181410] dark:text-white mb-4">
                        Why Choose Webchamp for Web Development?
                    </h2>
                    <p className="text-lg text-[#181410]/70 dark:text-white/70 max-w-2xl mx-auto">
                        We're not just a web design agency; we're your local growth partners dedicated to your business success in India.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-4 md:p-8 rounded-2xl border-2 border-[#ff8929] shadow-[6px_6px_0px_0px_#ff8929] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#ff8929] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-2 md:mb-3">
                                <h3 className="text-sm md:text-xl font-bold text-[#181410] dark:text-white">{feature.title}</h3>
                                <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                                    <feature.icon className="w-5 h-5 md:w-8 md:h-8 text-[#ff8929]" />
                                </div>
                            </div>
                            <p className="text-[#181410]/60 dark:text-white/60 leading-relaxed line-clamp-3 min-h-[60px] md:min-h-[78px] text-xs md:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
