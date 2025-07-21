import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer">
      <motion.div 
        className="flex items-center" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          {/* Background shape */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-blue-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Logo container */}
          <div className="relative flex items-center bg-white p-1 rounded-lg">
            <div className="h-10 w-10 bg-primary rounded-l-md flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-wider">C</span>
            </div>
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-blue-500 rounded-r-md flex items-center justify-center relative overflow-hidden">
              <span className="text-white font-bold text-xl tracking-wider">Q</span>
              <div className="absolute top-5 right-1 w-3 h-3 bg-white opacity-30 rounded-full"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="ml-2">
          <span className="text-primary font-bold text-xl">Code</span>
          <span className="text-gray-800 font-bold text-xl">Qamp</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo; 