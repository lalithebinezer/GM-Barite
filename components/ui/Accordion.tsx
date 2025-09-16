import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  startOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-3 px-1 hover:bg-background/50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h4 className="font-bold font-serif text-primary">{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-secondary transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <div className="pb-4 pt-1 px-1 text-sm text-secondary space-y-2">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
