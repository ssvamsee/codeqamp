import React from 'react';
import { motion } from 'framer-motion';
import BrandName from './BrandName';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center cursor-pointer" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <img 
        src="/CodeQamp-removebg-preview.png" 
        alt="CodeQamp Logo" 
        className="h-10 md:h-10" 
      />
      
      <div className="ml-2 relative">
        <h1 className="font-extrabold text-xl md:text-2xl tracking-wider">
          <BrandName />
        </h1>
      </div>
    </motion.div>
  );
};

export default Logo; 