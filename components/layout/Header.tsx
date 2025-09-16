import React, { useState } from 'react';
import type { Page } from '../../types';
import Logo from '../ui/Logo';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isScrolled: boolean;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isScrolled: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, setCurrentPage, isScrolled, children, onClick }) => (
  <button
    onClick={() => {
      setCurrentPage(page);
      window.scrollTo(0,0);
      if (onClick) onClick();
    }}
    className={`px-4 py-2 text-sm font-sans font-bold transition-colors duration-300 relative ${
      currentPage === page
        ? 'text-accent'
        : isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-gray-200'
    }`}
  >
    {children}
    {(currentPage === page) && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-accent rounded-full"></span>
    )}
  </button>
);


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerBg = isScrolled || isMenuOpen ? 'bg-surface shadow-lg' : 'bg-transparent';
  const textColor = isScrolled || isMenuOpen ? 'text-primary' : 'text-white';

  const handleCtaClick = () => {
      setCurrentPage('contact');
      window.scrollTo(0,0);
      setIsMenuOpen(false);
  }

  const navLinks = [
      { page: 'products', label: 'Products'},
      { page: 'quality', label: 'Quality & Compliance'},
      { page: 'about', label: 'About Us'},
      { page: 'resources', label: 'Resources'},
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer transition-transform duration-300 transform hover:scale-105" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>
          <Logo className={`h-8 ${textColor} text-2xl`} />
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
             <NavLink key={link.page} page={link.page as Page} currentPage={currentPage} setCurrentPage={setCurrentPage} isScrolled={isScrolled}>{link.label}</NavLink>
          ))}
        </nav>
        
        <div className="hidden md:block">
            <button
                onClick={handleCtaClick}
                className="bg-accent text-white font-serif font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-accent-dark hover:scale-105"
            >
                Request a Quote
            </button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`${textColor} focus:outline-none transition-transform duration-300 transform hover:scale-105`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-surface pb-4">
          <nav className="flex flex-col items-center space-y-2">
             {navLinks.map(link => (
                 <NavLink key={link.page} page={link.page as Page} currentPage={currentPage} setCurrentPage={setCurrentPage} isScrolled={true} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
              ))}
              <button 
                onClick={handleCtaClick}
                className="mt-4 bg-accent text-white font-serif font-bold py-2 px-8 rounded-md shadow-md"
              >
                Request a Quote
              </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;