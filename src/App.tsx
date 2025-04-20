import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactModal from './Components/ContactModal';
import ScrollToTop from './Components/ScrollToTop';
//pages
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Resource from './Pages/Resource'; 

// #region Footer Component
interface FooterProps {
  onContactClick: () => void;
}

// #region App Component
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#030302]">
      <Header />
      <main className="flex-grow">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe onContactClick={openModal} />} />
          <Route path="/Portfolio" element={<Portfolio onContactClick={openModal} />} />
          <Route path="/Resource" element={<Resource />} />
          
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer onContactClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
// #endregion

export default App;
