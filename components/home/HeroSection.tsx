import React from 'react';
import type { Page } from '../../types';

interface HeroSectionProps {
    setCurrentPage: (page: Page) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative h-screen bg-primary text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/mining/1920/1080')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      
      {/* Text Content */}
      <div className="relative z-10 text-center p-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">
          GM Barite
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 font-sans">
          Global Leaders in High-Grade Barite Supply
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-8">
          Backed by APMDC
        </p>
        <button 
          onClick={() => {
            setCurrentPage('contact');
            window.scrollTo(0, 0);
          }}
          className="bg-accent text-white font-serif font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-105"
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default HeroSection;