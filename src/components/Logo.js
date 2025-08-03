import React from 'react';
import { motion } from 'framer-motion';

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
        src="/CQ-fevicon.png" 
        alt="CodeQamp Logo" 
        className="h-10 md:h-10" 
      />
      
      <div className="ml-2 relative">
        <h1 className="font-extrabold text-xl md:text-2xl tracking-wider">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500">
            Institute
          </span>
        </h1>
        {/* <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-700 to-orange-500"></div> */}
      </div>
    </motion.div>
  );
};

export default Logo; 