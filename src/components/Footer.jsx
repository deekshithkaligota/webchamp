import React, { useState } from 'react';

const Footer = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <footer className="bg-[#181410] text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 select-none">
                            <button onClick={() => onNavigate('home')} className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="text-primary">W</span>
                                <span className="text-white">ebchamp</span>
                            </button>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                            Helping local businesses thrive in the digital age with custom websites and marketing strategies.
                        </p>
                    </div>

                    <nav aria-label="Services navigation">
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><button onClick={() => onNavigate('home', 'contact', 'Website Development')} className="hover:text-primary transition-colors text-left w-full">Web Development</button></li>
                            <li><button onClick={() => onNavigate('home', 'contact', 'SEO')} className="hover:text-primary transition-colors text-left w-full">SEO Optimization</button></li>
                            <li><button onClick={() => onNavigate('home', 'contact', 'Google Business Profile')} className="hover:text-primary transition-colors text-left w-full">Google Business Profile</button></li>
                            <li><button onClick={() => onNavigate('home', 'contact', 'Automation')} className="hover:text-primary transition-colors text-left w-full">Automation Workflows</button></li>
                        </ul>
                    </nav>

                    <nav aria-label="Company navigation">
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors text-left w-full">About Us</button></li>
                            <li><button onClick={() => onNavigate('works')} className="hover:text-primary transition-colors text-left w-full">Our Works</button></li>
                            <li><button onClick={() => onNavigate('home', 'contact')} className="hover:text-primary transition-colors text-left w-full">Contact</button></li>
                            <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors text-left w-full">Privacy Policy</button></li>
                        </ul>
                    </nav>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-white/60 mb-4">Subscribe to get tips on growing your local business.</p>
                        {isSubmitted ? (
                            <div className="text-green-500 font-bold bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                                Thanks for subscribing!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address"
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary"
                                    required
                                />
                                <button type="submit" className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:opacity-90">
                                    Go
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-primary text-sm">
                    © 2025 Webchamp Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
