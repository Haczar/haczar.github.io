// src/Footer.tsx
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-[#030302] text-TextPrimaryColor border-secondary">
      {/* Padding on top of the footer */}
      <div className="my-10"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-[8vw] mb-4">
          <a
            href="https://twitter.com/haczar_criollo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-HoverColor"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/haczar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-HoverColor"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/haczarcriollo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-HoverColor"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/haczar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-HoverColor"
          >
            <TbBrandGithubFilled />
          </a>
          <a 
            href="mailto:HaczarCriollo@gmail.com" 
            className="text-3xl hover:text-HoverColor"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Spacer between icons and Contact Me */}
        <div className="my-10"></div>

        {/* Contact Me Button */}
        <div className="mb-5">
          <button onClick={onContactClick} className="font-jost text-2xl hover:text-HoverColor">
            Contact Me
          </button>
        </div>

        {/* Spacer between Contact Me and Copyright */}
        <div className="my-5"></div>

        {/* Copyright */}
        <p className="font-jost">
          © {new Date().getFullYear()} Haczar Criollo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
