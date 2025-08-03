import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, interval, images.length, isHovering]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden z-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main image carousel */}
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentIndex}
          custom={1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {/* Image with overlay gradients */}
          <div className="relative w-full h-full bg-white">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain p-2"
            />

            {/* Brand-colored overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-orange/20 to-transparent pointer-events-none"></div>

            {/* Bottom gradient for caption */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white pointer-events-none">
              <h3 className="text-xl md:text-2xl font-bold text-shadow">{images[currentIndex].caption}</h3>
              {/* <p className="text-xs md:text-sm font-medium text-white/80 text-shadow">
                {currentIndex + 1}/{images.length}
              </p> */}
            </div>

            {/* Branded corner accents for visual appeal */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-brand-orange rounded-br-lg"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows with brand colors */}
      {/* <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10 shadow-md"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all z-10 shadow-md"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Minimal Pagination dots - moved to bottom edge */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-1 z-10 bg-gradient-to-t from-black/30 to-transparent">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-white'
                : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
      
      {/* Progress bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 z-5">
        <motion.div 
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: isHovering ? 0 : interval / 1000,
            ease: 'linear',
            repeat: isHovering ? 0 : Infinity,
            repeatType: 'loop'
          }}
        />
      </div> */}
    </div>
  );
};

export default ImageCarousel; 