import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import PillarsSection from './components/PillarsSection';
import MobileMenu from './components/MobileMenu';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileMenu />
      <Hero />
      <ImageCarousel />
      <PillarsSection />
    </div>
  );
}

export default App;
