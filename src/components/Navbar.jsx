import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onNavigate, navigateTo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        onNavigate(sectionId);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <button onClick={() => onNavigate('home')} className="font-bold text-2xl select-none drop-shadow-[0_0_15px_rgba(255,255,255,1.5)] cursor-pointer">
                            <span className="text-primary">W</span>
                            <span className="text-[#181410]">ebchamp</span>
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => handleNavClick('home')} className="text-[#181410] font-medium transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</button>
                        <button onClick={() => handleNavClick('services')} className="text-[#181410] font-medium transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Services</button>
                        <button onClick={() => { navigateTo('works'); setIsOpen(false); }} className="text-[#181410] font-medium transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Our Works</button>
                        <button onClick={() => handleNavClick('contact')} className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-opacity">
                            Book a Call
                        </button>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[#181410]">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            <button onClick={() => handleNavClick('home')} className="text-lg font-medium text-[#181410] text-left">Home</button>
                            <button onClick={() => handleNavClick('services')} className="text-lg font-medium text-[#181410] text-left">Services</button>
                            <button onClick={() => { navigateTo('works'); setIsOpen(false); }} className="text-lg font-medium text-[#181410] text-left">Our Works</button>
                            <button onClick={() => handleNavClick('contact')} className="bg-primary text-black px-6 py-3 rounded-xl font-bold w-full">
                                Book a Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
