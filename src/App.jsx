import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import OurWorks from './components/OurWorks';

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [selectedService, setSelectedService] = useState(null);

    const navigateTo = (view, sectionId, service = null) => {
        setCurrentView(view);
        if (service) {
            setSelectedService(service);
        }
        if (view === 'home' && sectionId) {
            // If navigating to a section on home page, wait for render then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
            <Navbar onNavigate={(sectionId) => navigateTo('home', sectionId)} navigateTo={navigateTo} />
            <main>
                {currentView === 'home' ? (
                    <>
                        <Hero />
                        <Stats />
                        <WhyChooseUs />
                        <Services />
                        <Testimonials />
                        <Contact selectedService={selectedService} onServiceUsed={() => setSelectedService(null)} />
                    </>
                ) : currentView === 'about' ? (
                    <AboutUs navigateTo={navigateTo} />
                ) : currentView === 'works' ? (
                    <OurWorks navigateTo={navigateTo} />
                ) : (
                    <PrivacyPolicy onBack={() => navigateTo('home')} />
                )}
            </main>
            <Footer onNavigate={navigateTo} />
        </div>
    );
}

export default App;

