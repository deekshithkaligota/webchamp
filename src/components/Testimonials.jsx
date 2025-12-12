import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Ravi Kumar",
        role: "Owner, Kumar's Sweets",
        content: "Working with Webchamp transformed our online presence. We've never been busier!",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMwSlBeOhY73t_QcZ0IOzOh8AKgOY5ui9WMR0frY_0Lyx3J4C8cUy1SUdOJN4M7ACgV1-WUsx0bwB3pcNBnLaIgTvfys2o2xE5RH-ZYFH06FwF0w6veiMxBxX8GxJ7G1pVUBz_JSKkdxJfecqW9kpXxkP_2628nspithFEafKprqGv7bwAMFR4w8Cm_DOekoRBN3G9mWwlk9Loy5fDG6QM19QjkVR2twB-vlCGScyXSzAmjVlMId4iSAwTLFD8lzqTQoEZGpAKKGQ"
    },
    {
        name: "Dr. Anjali Desai",
        role: "Desai Dental Clinic",
        content: "Patient appointments have doubled since we launched the new website. Highly recommended!",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Priya Sharma",
        role: "Jaipur Handicrafts",
        content: "Our online leads increased by 40% in just three months! The team is amazing.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeySjc3glSG-LYCZnh1HiaSl3x2x0H3bLZ7Sq-rxwTzhN2KZMFwbiEkVtBV3M1Arc2CZgZNnZ7lytV8Z3Wb0iN_9fvvj-0D0hQxhm7DWMd-Ec_JOYOm971lUEQt6NPZxR9WUoRPf1vWEqsatuLTo3VdptEaUGOEX8E4ms-0oXFv5ajgZ3j6KS91KGrDyKbVpGmixTmT2mUi_hleAGl2FhQRbwq-g9y-AkEKAdH-GQmy2VmgLUGnH-GRD-mgt4pp5TAVD6oNoIwG98"
    },
    {
        name: "Vikram Singh",
        role: "TechSolutions Pvt Ltd",
        content: "Professional, efficient, and results-driven. They understood our B2B needs perfectly.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Amit Patel",
        role: "Mumbai Boutique Hotel",
        content: "Direct bookings went up by 180%. The website paid for itself in a month.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJUc1TNAzZ-aWPxpZTBfUL4RQ1YBOq7QkvyRp9sEQds2Ut43V1MK21-oTc07Y1RJeTweAMimSCXXLExtv8Rlhe_v9dSs1r-MWSQrm8s90ItsJ8ftr1UlLEUJ15QNhFjpQvVN89uQ8RibJTASTQIX5YpdGS3kIbSgMgkaoUEBJNIz5G-xGN0rvJ-qfYWfxiF5C-pL0giQJhQqz2NrnEdO5X6uQEdX_iIRYtPgsvgPuwIaZa_Na-4VTXZUG7Oy-5eWX1YjpqR6sJaTw"
    },
    {
        name: "Sarah Jenkins",
        role: "Urban Real Estate",
        content: "The best digital marketing agency we've worked with. Our property inquiries have skyrocketed.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-12 md:py-20 bg-white dark:bg-background-dark overflow-hidden" aria-labelledby="testimonials-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-black text-[#181410] dark:text-white mb-4">
                        Client Success Stories - What Our Clients Say
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden pb-16 pt-8">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative w-[350px] sm:w-[400px] bg-[#181410] p-8 rounded-2xl shadow-2xl flex-shrink-0 whitespace-normal flex flex-col justify-between h-full border border-white/10 group hover:border-primary/50 transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 transition-colors duration-300" />
                            <p className="text-lg text-white/90 italic relative z-10 font-light leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="mt-6 relative z-10">
                                <h4 className="font-bold text-sm text-white">{testimonial.name}</h4>
                                <p className="text-xs font-bold text-primary mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
