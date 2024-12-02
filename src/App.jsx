import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WebDevelopment from './components/webDevelopment';
import AppDevelopment from './components/appDevelopment';
import Seo from './components/seo';
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/webDevelopment" element={<WebDevelopment />} />
        <Route path="/services/appDevelopment" element={<AppDevelopment />} />
        <Route path="/services/seo" element={<Seo />} />
      </Routes>
    </Router>
  );
};

export default App;
