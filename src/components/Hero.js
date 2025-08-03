import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 bg-gradient-to-br from-secondary to-white min-h-screen flex items-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary opacity-10 rounded-full"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-primary opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
        
        {/* SVG Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-20 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#3F88C5" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary bg-opacity-10 px-4 py-2 rounded-full mb-4">
              <p className="text-primary font-medium text-sm">Medical Coding Excellence</p>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Learn Medical Coding. 
              <span className="text-primary"> Launch Your Career</span> with CodeQamp.
            </motion.h1>
            
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
              {[
                { icon: "👨‍⚕️", text: "Expert Instructors" },
                { icon: "🏆", text: "Industry Certifications" },
                { icon: "💼", text: "Job Placement" },
                { icon: "🌐", text: "Online & Offline" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-xl mr-2">{feature.icon}</span>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
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
                className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                Enroll Now
              </Link>
              
              <Link
                to="courses"
                spy={true}
                smooth={true}
                duration={800}
                className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-primary hover:text-white transition-all inline-block cursor-pointer"
              >
                Explore Courses
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Medical coding illustration with multiple elements */}
              <div className="relative bg-white rounded-lg shadow-xl p-6 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary opacity-5 rounded-full transform -translate-x-20 translate-y-20"></div>
                
                {/* Main SVG illustration */}
                <svg className="w-full h-96" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Computer/Monitor */}
                  <rect x="150" y="100" width="200" height="150" rx="5" fill="#f0f0f0" stroke="#3F88C5" strokeWidth="2"/>
                  <rect x="160" y="110" width="180" height="120" rx="2" fill="#ffffff" stroke="#3F88C5" strokeWidth="1"/>
                  
                  {/* Screen Content - Medical Coding */}
                  <rect x="170" y="120" width="50" height="10" rx="2" fill="#3F88C5" opacity="0.7"/>
                  <rect x="170" y="135" width="160" height="5" rx="1" fill="#3F88C5" opacity="0.3"/>
                  <rect x="170" y="145" width="140" height="5" rx="1" fill="#3F88C5" opacity="0.3"/>
                  <rect x="170" y="155" width="150" height="5" rx="1" fill="#3F88C5" opacity="0.3"/>
                  
                  <rect x="170" y="175" width="70" height="15" rx="2" fill="#3F88C5" opacity="0.5"/>
                  <rect x="250" y="175" width="70" height="15" rx="2" fill="#3F88C5" opacity="0.3"/>
                  <rect x="170" y="195" width="70" height="15" rx="2" fill="#3F88C5" opacity="0.3"/>
                  <rect x="250" y="195" width="70" height="15" rx="2" fill="#3F88C5" opacity="0.5"/>
                  
                  {/* Stand */}
                  <rect x="235" y="250" width="30" height="20" fill="#d0d0d0"/>
                  <rect x="220" y="270" width="60" height="5" rx="2" fill="#b0b0b0"/>
                  
                  {/* Medical Icons */}
                  <circle cx="100" cy="150" r="30" fill="#FDF6EC" stroke="#3F88C5" strokeWidth="2"/>
                  <text x="87" y="158" fontSize="20" fill="#3F88C5">+</text>
                  
                  <circle cx="400" cy="150" r="30" fill="#FDF6EC" stroke="#3F88C5" strokeWidth="2"/>
                  <path d="M385 150 L395 160 L415 140" stroke="#3F88C5" strokeWidth="3" fill="none"/>
                  
                  {/* Code Brackets */}
                  <text x="90" y="80" fontSize="45" fill="#3F88C5" opacity="0.7">{"{"}</text>
                  <text x="400" y="80" fontSize="45" fill="#3F88C5" opacity="0.7">{"}"}</text>
                  
                  {/* Certificate */}
                  <rect x="380" y="220" width="70" height="50" rx="2" fill="#FDF6EC" stroke="#3F88C5" strokeWidth="1"/>
                  <line x1="390" y1="235" x2="440" y2="235" stroke="#3F88C5" opacity="0.5" strokeWidth="1"/>
                  <line x1="390" y1="245" x2="430" y2="245" stroke="#3F88C5" opacity="0.5" strokeWidth="1"/>
                  <line x1="390" y1="255" x2="420" y2="255" stroke="#3F88C5" opacity="0.5" strokeWidth="1"/>
                  <circle cx="415" cy="210" r="15" fill="#3F88C5" opacity="0.2"/>
                  
                  {/* Books/Learning */}
                  <rect x="60" y="220" width="60" height="70" rx="2" transform="rotate(-5 60 220)" fill="#3F88C5" opacity="0.7"/>
                  <rect x="65" y="225" width="50" height="60" rx="1" transform="rotate(-5 65 225)" fill="#f0f0f0"/>
                  <rect x="70" y="235" width="40" height="5" rx="1" transform="rotate(-5 70 235)" fill="#3F88C5" opacity="0.3"/>
                  <rect x="70" y="245" width="40" height="5" rx="1" transform="rotate(-5 70 245)" fill="#3F88C5" opacity="0.3"/>
                </svg>

                {/* Floating Badges */}
                <div className="absolute top-10 right-10 bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">CPC</span>
                </div>
                <div className="absolute top-40 right-20 bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">CIC</span>
                </div>
                <div className="absolute bottom-20 right-15 bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">AAPC</span>
                </div>
                
                {/* Statistics */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-gray-500">Graduates</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-gray-500">Placement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-gray-500">Courses</div>
                  </div>
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