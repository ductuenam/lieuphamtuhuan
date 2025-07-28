
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CommunitySection from './components/CommunitySection';
import ReaderSection from './components/ReaderSection';
import RegisterSection from './components/RegisterSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <CommunitySection />
            <ReaderSection />
            <RegisterSection />
            <FaqSection />
            <Footer />
        </main>
    );
}

export default App;
