import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SEO from './SEO';

const PrivacyPolicy = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="Privacy Policy | Webchamp.services"
                description="Read Webchamp's privacy policy on how we collect, use, and protect your personal information."
                url="https://webchamp.services/privacy"
            />
            <div className="pt-24 pb-12 bg-white dark:bg-[#1a120b] min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            onClick={onBack}
                            className="mb-8 text-primary font-bold hover:underline flex items-center gap-2"
                        >
                            ← Back to Home
                        </button>

                        <h1 className="text-4xl sm:text-5xl font-black text-[#181410] dark:text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-[#181410]/70 dark:text-white/70 mb-12">
                            Last Updated: November 30, 2024
                        </p>

                        <div className="space-y-12">
                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#181410] dark:text-white">1. Introduction</h2>
                                </div>
                                <p className="text-[#181410]/80 dark:text-white/80 leading-relaxed">
                                    Welcome to Webchamp ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at weare@webchamp.services.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#181410] dark:text-white">2. Information We Collect</h2>
                                </div>
                                <p className="text-[#181410]/80 dark:text-white/80 leading-relaxed mb-4">
                                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[#181410]/80 dark:text-white/80">
                                    <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; and other similar information.</li>
                                    <li><strong>Payment Data:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#181410] dark:text-white">3. How We Use Your Information</h2>
                                </div>
                                <p className="text-[#181410]/80 dark:text-white/80 leading-relaxed mb-4">
                                    We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[#181410]/80 dark:text-white/80">
                                    <li>To post testimonials.</li>
                                    <li>To request feedback.</li>
                                    <li>To send you marketing and promotional communications.</li>
                                    <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#181410] dark:text-white">4. Security of Your Information</h2>
                                </div>
                                <p className="text-[#181410]/80 dark:text-white/80 leading-relaxed">
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-[#181410] dark:text-white mb-4">5. Contact Us</h2>
                                <p className="text-[#181410]/80 dark:text-white/80 leading-relaxed">
                                    If you have questions or comments about this policy, you may email us at <a href="mailto:weare@webchamp.services" className="text-primary font-bold hover:underline">weare@webchamp.services</a> or by post to:
                                </p>
                                <address className="mt-4 not-italic text-[#181410]/80 dark:text-white/80 border-l-4 border-primary pl-4">
                                    <strong>Webchamp Agency</strong><br />
                                    Hyderabad, India
                                </address>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;

