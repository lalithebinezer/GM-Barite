import React, { useState } from 'react';

interface CarouselImage {
  src: string;
  caption: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto group" style={{ aspectRatio: '16 / 9' }}>
      <div className="relative h-full rounded-lg overflow-hidden shadow-2xl bg-gray-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img 
              src={image.src} 
              alt={image.caption} 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="1280"
              height="720"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-white text-lg font-semibold drop-shadow-md">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 bg-black bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white transform hover:scale-105"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 bg-black bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white transform hover:scale-105"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
              currentIndex === slideIndex ? 'bg-accent scale-125' : 'bg-secondary/70 hover:bg-secondary hover:scale-105'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={currentIndex === slideIndex}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;