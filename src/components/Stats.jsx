import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const stats = [
    { label: "Clients Served", value: 50, suffix: "+" },
    { label: "Satisfaction Level", value: 100, suffix: "%" },
    { label: "Project Success", value: 98, suffix: "%" },
    { label: "Support", value: 24, suffix: "/7" },
];

const Counter = ({ value, prefix = "", suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
    return (
        <section id="stats" className="py-12 md:py-20 bg-primary text-black" aria-label="Company statistics and achievements">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 gap-2 sm:gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-2xl sm:text-6xl font-black mb-1 sm:mb-2">
                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] sm:text-lg font-bold uppercase tracking-wider opacity-80 leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
