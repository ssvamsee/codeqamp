import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function HomePage() {
  return (
    <>
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
    <Router>
      <div className="App">
        <SocialSidebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
