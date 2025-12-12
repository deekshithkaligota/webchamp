import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, Loader2, ChevronDown } from 'lucide-react';

const Contact = ({ selectedService, onServiceUsed }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        businessName: '',
        service: 'Website Development',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    // Update service when selectedService prop changes
    useEffect(() => {
        if (selectedService) {
            setFormData(prev => ({ ...prev, service: selectedService }));
            if (onServiceUsed) {
                onServiceUsed();
            }
        }
    }, [selectedService, onServiceUsed]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Sanitize input to prevent XSS attacks
    const sanitizeInput = (str) => {
        if (typeof str !== 'string') return str;
        return str
            .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
            .trim()
            .slice(0, 1000); // Limit length to prevent overflow attacks
    };

    const sanitizeFormData = (data) => {
        return {
            name: sanitizeInput(data.name).slice(0, 100),
            phone: sanitizeInput(data.phone).replace(/[^0-9+\-\s]/g, '').slice(0, 20), // Only allow phone characters
            businessName: sanitizeInput(data.businessName).slice(0, 200),
            service: data.service, // From dropdown, already controlled
            message: sanitizeInput(data.message).slice(0, 2000)
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Sanitize form data before sending
        const sanitizedData = sanitizeFormData(formData);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sanitizedData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    businessName: '',
                    service: 'Website Development',
                    message: ''
                });
            } else {
                console.error('Form submission error:', result.error);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl font-black text-[#181410] dark:text-white mb-6"
                        >
                            Let's Grow Your <br />
                            <span className="text-primary">Business Together</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-[#181410]/70 dark:text-white/70 mb-12 max-w-md"
                        >
                            Fill out the form or call us directly. We're ready to help you take your business to the next level.
                        </motion.p>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#181410]/50 dark:text-white/50 uppercase tracking-wider">Call Us</p>
                                    <p className="text-xl font-bold text-[#181410] dark:text-white">+91 7799631973</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#181410]/50 dark:text-white/50 uppercase tracking-wider">Email Us</p>
                                    <p className="text-xl font-bold text-[#181410] dark:text-white">weare@webchamp.services</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#181410]/50 dark:text-white/50 uppercase tracking-wider">LOCATION</p>
                                    <p className="text-xl font-bold text-[#181410] dark:text-white">Hyderabad, India</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-white/5 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl"
                    >
                        {submitStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#181410] dark:text-white mb-2">Thank You!</h3>
                                <p className="text-[#181410]/70 dark:text-white/70 mb-6">We've received your message and will get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitStatus(null)}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#181410] dark:text-white mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            maxLength={100}
                                            autoComplete="name"
                                            className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#181410] dark:text-white mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            maxLength={20}
                                            pattern="[0-9+\-\s]+"
                                            autoComplete="tel"
                                            className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="+91..."
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#181410] dark:text-white mb-2">Business Name</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        required
                                        maxLength={200}
                                        autoComplete="organization"
                                        className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Your Business"
                                    />
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-bold text-[#181410] dark:text-white mb-2">Service Interested In</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 pr-10 rounded-xl bg-background-light dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer text-[#181410] dark:text-white"
                                        >
                                            <option value="Website Development">Website Development</option>
                                            <option value="SEO">SEO</option>
                                            <option value="Google Business Profile">Google Business Profile</option>
                                            <option value="Automation">Automation</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#181410]/50 dark:text-white/50 pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#181410] dark:text-white mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Tell us about your goals..."
                                    ></textarea>
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                                        Something went wrong. Please try again or contact us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit <Check className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
