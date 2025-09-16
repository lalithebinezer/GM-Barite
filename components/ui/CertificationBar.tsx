import React from 'react';

const CertificationItem: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
  <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-3 md:space-y-0 md:space-x-4">
    <div className="flex-shrink-0 w-16 h-16 bg-background rounded-full flex items-center justify-center border-2 border-border">
        {icon}
    </div>
    <div>
      <p className="font-bold text-primary font-serif">{title}</p>
      <p className="text-sm text-secondary">{subtitle}</p>
    </div>
  </div>
);

const CertificationBar: React.FC = () => {
  return (
    <div className="bg-surface py-12 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <CertificationItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>}
            title="API Monogram Certified" 
            subtitle="Exceeding Oil & Gas Standards" 
          />
          <CertificationItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                   </svg>}
            title="ISO 9001:2015" 
            subtitle="Commitment to Quality Management" 
          />
          <CertificationItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>}
            title="Backed by APMDC" 
            subtitle="Access to World's Largest Deposit" 
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationBar;