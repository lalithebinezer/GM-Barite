import React, { useState, useEffect } from 'react';

interface PageBannerProps {
  title: string;
  imageUrl: string;
  altText: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageUrl, altText }) => {
  const [offsetY, setOffsetY] = useState(0);
  // A more subtle parallax factor. The image will move at 15% of the scroll speed.
  const parallaxFactor = 0.15; 

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // To prevent the image edges from being visible during the parallax scroll,
  // we need to scale it up so it's taller than its container.
  // The scale factor provides just enough extra height for a seamless effect.
  const scale = 1.3;

  return (
    <div className="relative h-[50vh] bg-primary overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        style={{
          transform: `translateY(${offsetY * parallaxFactor}px) scale(${scale})`,
          willChange: 'transform', // performance hint for the browser
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white font-serif text-center">{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;