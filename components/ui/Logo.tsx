import React from 'react';

interface LogoProps {
  className?: string; // For sizing and text color
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-x-3 ${className}`} aria-label="GM Barite">
      <span className="font-bold font-serif text-xl">
        GM Barite
      </span>
    </div>
  );
};

export default Logo;