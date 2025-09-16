import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import QualityPage from './pages/QualityPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ResourcesPage from './pages/ResourcesPage';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'applications':
        return <ApplicationsPage />;
      case 'quality':
        return <QualityPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-background text-primary font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isScrolled={isScrolled} />
      <main key={currentPage} className="animate-fade-in">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;