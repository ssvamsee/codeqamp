import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Enroll from './components/Enroll';
import SocialSidebar from './components/SocialSidebar';
import SEO from './components/SEO';

function HomePage() {
  return (
    <>
      <SEO 
        title="CodeQamp | Leading Medical Coding Training Institute in Hyderabad"
        description="CodeQamp offers comprehensive medical coding training programs including CPC and CIC certifications. Join our expert-led courses to launch your career in medical coding."
        keywords="medical coding, medical coding training, Hyderabad coding institute, CPC certification course, CIC certification, medical billing training, healthcare coding classes, AAPC certification, CodeQamp, best medical coding institute, coding career, medical coding institute in Hyderabad, medical coding in ameerpet"
      />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SocialSidebar />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/enroll" element={
              <>
                <SEO 
                  title="Enroll at CodeQamp | Medical Coding Certification Programs"
                  description="Enroll in CodeQamp's professional medical coding certification programs. Start your journey towards becoming a certified medical coder with our expert training."
                  keywords="medical coding enrollment, CPC certification enrollment, CIC course registration, medical coding admission, healthcare coding training, medical coding classes, CodeQamp application, coding institute admission"
                  canonicalUrl="https://codeqamp.com/enroll"
                />
                <Enroll />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
