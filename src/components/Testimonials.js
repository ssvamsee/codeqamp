import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Mehta',
      role: 'CPC Certified, Placement at Apollo Hospitals',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      content: 'Joining CodeQamp was the best career decision I ever made. The instructors are incredibly knowledgeable and the hands-on approach to training prepared me well for my certification exam. I passed on my first attempt and secured a job at Apollo Hospitals within a month!',
      rating: 5
    },
    {
      id: 2,
      name: 'Rahul Singh',
      role: 'CIC Certified, Working at Omega Healthcare',
      image: 'https://randomuser.me/api/portraits/men/36.jpg',
      content: 'After completing the CIC program at CodeQamp, I gained the confidence to apply for advanced coding positions. The curriculum is comprehensive and covers all the essential aspects of medical coding. Their placement assistance helped me land a great role at Omega Healthcare.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lakshmi Reddy',
      role: 'Recent Graduate',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      content: 'The instructors at CodeQamp are incredibly patient and supportive. They helped me understand complex coding concepts and were always available for doubt clarification. I appreciate the personal attention given to each student despite the class size.',
      rating: 4
    },
    {
      id: 4,
      name: 'Karthik Menon',
      role: 'CDEO Certified, Remote Coder',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
      content: 'The CDEO course at CodeQamp thoroughly prepared me for the certification and the job market. The real-world case studies and practice sessions were invaluable. I now work as a remote medical coder and enjoy a great work-life balance.',
      rating: 5
    }
  ];

  // Double the testimonials array for continuous scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    let animationId;
    let lastTime = 0;
    const speed = 0.2; // pixels per millisecond
    
    const animate = (time) => {
      if (lastTime === 0) {
        lastTime = time;
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      const delta = time - lastTime;
      lastTime = time;
      
      if (!isPaused && carouselRef.current) {
        // Move by calculated amount based on time delta for smooth scrolling
        carouselRef.current.scrollLeft += speed * delta;
        
        // Reset when we reach the end of the first set
        const firstSetWidth = carouselRef.current.scrollWidth / 2;
        if (carouselRef.current.scrollLeft >= firstSetWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);
  
  const renderStarRating = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-brand-orange' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Student Testimonials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-brand-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear what our students have to say about their learning experience at CodeQamp.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Custom gradient shadows for seamless scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Testimonial carousel */}
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate testimonials for continuous effect */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-secondary rounded-lg shadow-lg p-6 border-l-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-brand-orange">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  {renderStarRating(testimonial.rating)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 font-medium mb-2">Ready to start your journey?</p>
          <a 
            href="/enroll" 
            className="inline-flex items-center bg-white border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all mt-2"
          >
            Enroll Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 