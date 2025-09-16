import React from 'react';
import type { Page } from '../../types';
import Logo from '../ui/Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleLinkClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
    
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <Logo className="h-7 text-footer-text text-xl mb-4" />
            <p className="text-gray-400 text-sm">A premier barite crushing unit delivering purity and quality in every particle.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('products')} className="text-gray-400 hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => handleLinkClick('quality')} className="text-gray-400 hover:text-white transition-colors">Quality & Compliance</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleLinkClick('resources')} className="text-gray-400 hover:text-white transition-colors">Resources</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mangampeta, Kadapa, Andhra Pradesh</li>
              <li>Email: sales@gmbarite.com</li>
              <li>Phone: +91-XXX-XXXX-XXXX</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GM Barite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;