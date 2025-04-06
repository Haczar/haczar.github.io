// src/ContactModal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex items-center justify-center z-50 
        transition-opacity ease-in-out duration-1000
        ${isOpen ? 'opacity-100 bg-black bg-opacity-70' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-[#030302] rounded-lg max-w-lg w-full p-6 relative border border-secondary 
          transition-transform ease-in-out duration-1000
          ${isOpen ? 'scale-100' : 'scale-95'}
        `}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-300 hover:text-gray-100">
          {/* X icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center font-jost">
          <h3 className="text-2xl mb-4 text-primary">Do you have an Opportunity?</h3>
          {/* Contact details */}
          <p className="mb-2 text-primary">
            Email me:{' '}
            <a href="mailto:HaczarCriollo@gmail.com" className="text-HyperlinkColor hover:text-HoverColor">
              HaczarCriollo@gmail.com
            </a>
          </p>
          <p className="mb-4 text-primary">
            Call me:{' '}
            <a href="tel:224-6000831" className="text-HyperlinkColor hover:text-HoverColor">
              224 [dot] 600 [dot] 0831
            </a>
          </p>
          <a
            href="HC_Resume.pdf" target="_blank" rel="noopener noreferrer" 
            className="inline-block bg-set5 text-FFBC00 py-2 px-4 rounded-none hover:bg-primary"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
