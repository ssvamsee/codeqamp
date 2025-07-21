import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Medical Coder at Apollo Hospitals',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      quote: 'CodeQamp\'s CPC course was incredibly comprehensive. The instructors were knowledgeable and always available to clear doubts. After completing the course, I got placed at Apollo Hospitals within a month!'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Remote Medical Coder, Omega Healthcare',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      quote: 'The practical approach to teaching at CodeQamp sets it apart from other institutes. The hands-on training with real medical records helped me gain confidence and pass the CIC certification on my first attempt.'
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      role: 'Medical Coding Specialist, KIMS Hospital',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: 'As someone with a non-medical background, I was worried about entering the medical coding field. CodeQamp\'s beginner-friendly curriculum and supportive faculty made the journey smooth and enjoyable.'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Senior Medical Coder, Cognizant',
      image: 'https://randomuser.me/api/portraits/men/36.jpg',
      quote: 'The knowledge I gained at CodeQamp has been invaluable. Their focus on practical skills and industry standards helped me secure a senior position within just two years of completing my certification.'
    },
    {
      id: 5,
      name: 'Deepa Nair',
      role: 'Healthcare Coding Analyst, HCL',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The instructors at CodeQamp are true experts in their field. They not only taught us coding principles but also prepared us for the realities of working in the healthcare industry.'
    }
  ];

  // Create duplicated testimonials for the infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // State to pause animation on hover
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">What Our Students Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from our graduates who have successfully launched their careers in medical coding.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Carousel container */}
          <div 
            className="overflow-hidden mx-auto" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              className="flex"
              initial={{ x: 0 }}
              animate={{ 
                x: isPaused ? undefined : [0, `-${testimonials.length * 100}%`] 
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }
              }}
            >
              {/* We render the testimonials twice to create the infinite loop effect */}
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`} 
                  className="flex-shrink-0 w-[340px] px-4"
                >
                  <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex flex-col items-center h-full">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                      <p className="text-primary font-medium text-sm mb-4">{testimonial.role}</p>
                      
                      <div className="relative flex-grow">
                        <svg className="w-8 h-8 text-primary opacity-20 absolute top-0 left-0 -mt-2 -ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.983 3v7.391C9.983 14.092 7.958 16 6.523 16c-1.434 0-2.5-.91-2.5-2.5C4.023 12 5.433 11 6.523 11c.524 0 1 .182 1.46.484V3h2zm7 0v7.391C16.983 14.092 14.958 16 13.523 16c-1.434 0-2.5-.91-2.5-2.5C11.023 12 12.433 11 13.523 11c.524 0 1 .182 1.46.484V3h2z" />
                        </svg>
                        <p className="text-gray-600 relative z-10 text-sm">{testimonial.quote}</p>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Controls and additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">Hover over testimonials to pause scrolling</p>
          <div className="flex justify-center mt-6">
            <a href="#contact" className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors">
              Start Your Journey
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 