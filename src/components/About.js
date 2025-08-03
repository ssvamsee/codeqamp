import React from 'react';
import { motion } from 'framer-motion';
import BrandName from './BrandName';

const About = () => {
  const instructors = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Director & Lead Instructor',
      expertise: 'CPC, CIC, CPMA',
      experience: '15+ years in medical coding',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Priya Sharma',
      position: 'Senior Instructor',
      expertise: 'CPC-I, CDEO',
      experience: '10+ years in healthcare coding',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">About <BrandName /></h2>
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
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At <BrandName />, we're dedicated to providing the highest quality medical coding education in Hyderabad.
              Our mission is to empower healthcare professionals with the skills and knowledge they need to excel
              in the rapidly evolving field of medical coding and billing.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by experienced professionals with decades of industry experience, our institute focuses on
              practical, hands-on training that prepares students for real-world challenges. We maintain small
              batch sizes to ensure personalized attention and optimal learning outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-secondary py-2 px-4 rounded-full text-primary">Industry-Led Curriculum</div>
              <div className="bg-secondary py-2 px-4 rounded-full text-primary">Hands-on Practice</div>
              <div className="bg-secondary py-2 px-4 rounded-full text-primary">Job Placement Support</div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-brand-orange mb-6">Meet Our Expert Instructors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{instructor.name}</h4>
                      <p className="text-brand-orange text-sm">{instructor.position}</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Expertise:</span> {instructor.expertise}</p>
                    <p><span className="font-medium">Experience:</span> {instructor.experience}</p>
                  </div>
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