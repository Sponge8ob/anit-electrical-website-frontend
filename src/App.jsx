import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import OurProjects from './components/ourprojects';
import IndustrialProjects from './components/industrialprojects';
import Dealerships from './components/Dealerships';
import Competencies from './components/Competencies';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Overview />
      <AboutUs />
      <Services />
      <OurProjects />
      <IndustrialProjects />
      <Dealerships />
      <Competencies />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
