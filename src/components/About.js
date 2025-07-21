import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const instructors = [
    {
      name: 'Dr. Anjali Sharma',
      role: 'Lead Instructor',
      experience: '15+ years in medical coding & healthcare administration',
      expertise: 'CPC, CIC, CPMA certifications'
    },
    {
      name: 'Dr. Rahul Patel',
      role: 'Senior Instructor',
      experience: '12 years at major hospitals',
      expertise: 'CIC, COC, CPMA certifications'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">About CodeQamp</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At CodeQamp, we're dedicated to providing the highest quality medical coding education in Hyderabad. 
              Our mission is to empower healthcare professionals with the skills and knowledge they need to excel 
              in the rapidly evolving field of medical coding and billing.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by experienced professionals with decades of industry experience, our institute focuses on 
              practical, hands-on training that prepares students for real-world challenges. We maintain small 
              batch sizes to ensure personalized attention and optimal learning outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-secondary py-2 px-4 rounded-full text-gray-700">Industry-Led Curriculum</div>
              <div className="bg-secondary py-2 px-4 rounded-full text-gray-700">Hands-on Practice</div>
              <div className="bg-secondary py-2 px-4 rounded-full text-gray-700">Job Placement Support</div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Expert Instructors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{instructor.name}</h4>
                  <p className="text-primary font-medium mb-2">{instructor.role}</p>
                  <p className="text-gray-600 text-sm mb-1">{instructor.experience}</p>
                  <p className="text-gray-600 text-sm">{instructor.expertise}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 