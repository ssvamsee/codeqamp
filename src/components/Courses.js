import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopMedical, FaHospital, FaClipboardCheck, FaChartLine, FaUserMd } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    {
      id: 'cpc',
      name: 'Certified Professional Coder (CPC)',
      description: 'Learn medical coding for physician office/outpatient settings with focus on CPT, ICD-10-CM, and HCPCS codes.',
      duration: '4 months',
      mode: 'Online/Offline',
      icon: <FaLaptopMedical className="text-4xl text-primary" />
    },
    {
      id: 'cic',
      name: 'Certified Inpatient Coder (CIC)',
      description: 'Master inpatient hospital facility coding with specialized training on ICD-10-CM, ICD-10-PCS codes and DRG assignment.',
      duration: '3 months',
      mode: 'Online/Offline',
      icon: <FaHospital className="text-4xl text-brand-orange" />
    },
    {
      id: 'cdeo',
      name: 'Certified Documentation Expert (CDEO)',
      description: 'Focus on medical record documentation, compliance, and integrity for accurate code assignment.',
      duration: '2 months',
      mode: 'Online/Offline',
      icon: <FaClipboardCheck className="text-4xl text-primary" />
    },
    {
      id: 'cpma',
      name: 'Certified Professional Medical Auditor',
      description: 'Learn to review medical coding accuracy, conduct risk assessments, and ensure compliance with regulations.',
      duration: '2 months',
      mode: 'Online/Offline',
      icon: <FaChartLine className="text-4xl text-brand-orange" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Courses</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Comprehensive training programs designed to prepare you for certification and career success in medical coding.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div 
              key={course.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="bg-primary bg-opacity-10 md:w-1/4 p-6 flex items-center justify-center">
                  {course.icon}
                </div>
                <div className="p-6 md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="bg-secondary py-1 px-3 rounded-full text-sm text-primary">
                      <span className="font-medium">Duration:</span> {course.duration}
                    </div>
                    <div className="bg-secondary py-1 px-3 rounded-full text-sm text-brand-orange">
                      <span className="font-medium">Mode:</span> {course.mode}
                    </div>
                  </div>
                  <button className="text-primary font-medium hover:text-brand-orange transition-colors flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses; 