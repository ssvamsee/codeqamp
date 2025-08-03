import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BrandName from './BrandName';

const Contact = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setState({
      name: '',
      email: '',
      message: ''
    });
  };

  // Updated Google Maps iframe code with standard map view
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.90602492362075!2d78.44173572802374!3d17.43593942437933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754229311353!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-brand-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions about our courses? Reach out to us and we'll be happy to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h3>

            <div className="space-y-6 mb-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md shadow-sm mr-4 border-b-2 border-primary">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-brand-orange mb-1">Address</h4>
                  <p className="text-gray-600">
                    3rd Floor, SREE RESIDENCY, behind Sarathi Studio<br />
                    Ameerpet, Hyderabad<br />
                    Telangana, India - 500073
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md shadow-sm mr-4 border-b-2 border-brand-orange">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                  {/* <p className="text-gray-600">+91 9876543211</p> */}
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-md shadow-sm mr-4 border-b-2 border-primary">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-brand-orange mb-1">Email</h4>
                  <p className="text-gray-600">info@codeqamp.com</p>
                  {/* <p className="text-gray-600">admissions@codeqamp.com</p> */}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex-grow mt-auto rounded-lg overflow-hidden shadow-md h-64 md:h-72">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CodeQamp Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-brand-orange mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  onClick={() => setState({name: '', email: '', message: ''})}
                  className="bg-white border-2 border-brand-orange text-brand-orange px-6 py-3 rounded-md hover:bg-brand-orange hover:text-white transition-all"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 