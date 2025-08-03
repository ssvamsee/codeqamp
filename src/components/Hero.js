import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import BrandName from './BrandName';
import ImageCarousel from './ImageCarousel';
import { heroImages } from '../data/images';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 bg-gradient-to-br from-secondary to-white min-h-screen flex items-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large Circle */}
        <div className="absolute -top-[150px] -left-[150px] w-[400px] h-[400px] rounded-full bg-primary opacity-5"></div>
        
        {/* Small Circles */}
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full bg-primary opacity-5"></div>
        <div className="absolute bottom-[15%] left-[5%] w-[150px] h-[150px] rounded-full bg-brand-orange opacity-5"></div>
        
        {/* Wave Pattern */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#282d76" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary bg-opacity-10 px-4 py-2 rounded-full mb-4">
              <p className="text-primary font-medium text-sm">Medical Coding Excellence</p>
            </div>
            <motion.div 
              className="mb-6 space-y-2"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Master Medical Coding<span className="text-brand-orange text-4xl md:text-5xl lg:text-6xl">.</span>
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight">
                Transform Your Career
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 flex items-center">
                with <span className="ml-2"><BrandName className="text-3xl md:text-4xl lg:text-5xl" /></span>
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-600 mb-8" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join the premier medical coding training institute in Hyderabad and become a certified professional coder with industry-recognized certifications.
            </motion.p>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Expert Instructors</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Hands-on Training</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Certification Support</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Placement Assistance</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={800} 
                className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-primary hover:text-white transition-all inline-block cursor-pointer"
              >
                Enroll Now
              </Link>
              <Link 
                to="courses" 
                spy={true} 
                smooth={true} 
                duration={800}
                className="bg-white border-2 border-brand-orange text-brand-orange px-6 py-3 rounded-md text-lg font-medium hover:bg-brand-orange hover:text-white transition-all inline-block cursor-pointer"
              >
                Explore Courses
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Carousel */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-full">
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-[280px] sm:h-[350px] md:h-[380px] lg:h-[400px]">
                {/* Image Carousel */}
                <ImageCarousel images={heroImages} interval={5000} />
              </div>

              {/* Statistics - Increased z-index to ensure it appears above carousel */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-3 md:px-6 md:py-4 w-11/12 flex justify-between z-20">
                <div className="text-center px-2">
                  <p className="text-primary text-lg md:text-xl font-bold">500+</p>
                  <p className="text-gray-600 text-xs md:text-sm">Certified Coders</p>
                </div>
                <div className="text-center px-2">
                  <p className="text-brand-orange text-lg md:text-xl font-bold">98%</p>
                  <p className="text-gray-600 text-xs md:text-sm">Placement Rate</p>
                </div>
                <div className="text-center px-2">
                  <p className="text-primary text-lg md:text-xl font-bold">15+</p>
                  <p className="text-gray-600 text-xs md:text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Partners Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm py-4 shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 font-medium mb-3 md:mb-0">Trusted by leading healthcare organizations:</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-gray-500 font-semibold">Apollo Hospitals</div>
              <div className="text-gray-500 font-semibold">KIMS Healthcare</div>
              <div className="text-gray-500 font-semibold">Omega Healthcare</div>
              <div className="text-gray-500 font-semibold">Optum Global</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 