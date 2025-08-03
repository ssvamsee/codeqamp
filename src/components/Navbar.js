import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Courses', to: 'courses' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' }
  ];

  // Render menu links based on current page
  const renderMenuLink = (item) => {
    if (isHomePage) {
      return (
        <ScrollLink
          key={item.name}
          to={item.to}
          spy={true}
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-primary cursor-pointer font-medium transition-colors py-2 flex items-center"
        >
          {item.name}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          key={item.name}
          to={`/#${item.to}`}
          className="text-gray-700 hover:text-primary cursor-pointer font-medium transition-colors py-2 flex items-center"
        >
          {item.name}
        </RouterLink>
      );
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => renderMenuLink(item))}
          
          {isHomePage ? (
            <RouterLink 
              to="/enroll" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all flex items-center"
            >
              Enroll Now
            </RouterLink>
          ) : (
            <RouterLink 
              to="/" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all flex items-center"
            >
              Back to Home
            </RouterLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              isHomePage ? (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 text-gray-700 hover:text-primary cursor-pointer font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.name}
                  to={`/#${item.to}`}
                  className="block py-2 text-gray-700 hover:text-primary cursor-pointer font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </RouterLink>
              )
            ))}
            
            {isHomePage ? (
              <RouterLink 
                to="/enroll" 
                className="block py-2 mt-2 text-center bg-primary text-white px-4 rounded-md hover:bg-opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </RouterLink>
            ) : (
              <RouterLink 
                to="/" 
                className="block py-2 mt-2 text-center bg-primary text-white px-4 rounded-md hover:bg-opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Back to Home
              </RouterLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 