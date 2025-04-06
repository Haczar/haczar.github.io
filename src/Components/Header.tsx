// #region Header Component with Scroll Shrink
import React, { useState, useEffect } from 'react';
import { FaBars, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const showResources = false;

  // Listen for scroll events to adjust header size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force mobile menu closed when viewport is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Change header padding and logo height based on scroll state
  const headerPadding = isScrolled ? 'py-2' : 'py-4';
  const logoHeight = isScrolled ? 'h-12' : 'h-16';
  const hovertextproperties = "text-TextPrimaryColor hover:text-HoverColor";


  return (
    <header className={`fixed top-0 w-full bg-[#030302] shadow z-50 transition-all duration-300 ${headerPadding}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        
        {/* Logo on the left */}
        <a href="/" className="flex items-center">
          <img src="/images/ProfileMeme.png" alt="Logo" className={logoHeight} />
        </a>
        
        {/* Desktop Navigation (visible on md and up) */}
        <nav className="ml-auto hidden md:flex space-x-6 ">
            <Link to="/AboutMe" className={hovertextproperties}>
              About Me
            </Link>

            <Link to="/Portfolio" className={hovertextproperties}>
              My Portfolio
            </Link>

            {showResources && (
              <Link to="/Resource" className={hovertextproperties}>
                R&I
              </Link>
            )}

            <a href="https://metavoke.com" target="_blank" rel="noopener noreferrer" className={`${hovertextproperties}`}>
              Services
            </a>
        </nav>

        {/* Mobile Navigation Icon (visible on small screens) */}
        <div className="ml-auto md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#FFD71D]">
            {isOpen ? <FaPlus size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (animated collapse/expand) */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 p-4 opacity-100' : 'max-h-0 p-0 opacity-0 pointer-events-none'}
        `}
      >
        <ul className="text-center space-y-4">
            <li>
                <Link to="/AboutMe" className={hovertextproperties}>
                  About Me
                </Link>
            </li>
            <li>
                <Link to="/Portfolio" className={`${hovertextproperties} block`}>
                    Portfolio
                </Link>
            </li>
            {showResources && (
              <li>
                <Link to="/Resource" className={`${hovertextproperties} block`}>
                  R&I
                </Link>
              </li>
            )}
            <li>
                <a href="https://metavoke.com" target="_blank" rel="noopener noreferrer" className={`${hovertextproperties}`}>
                    Services
                </a>
            </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
// #endregion
