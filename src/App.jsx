import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import Bestseller from './Component/Bestseller.jsx';
import Preload from './Component/preload';
import Refresh from './Component/Refresh';
import About from './Component/About';
import USPSection from './Component/USP.jsx';
import Footer from "./Component/Footer.jsx"
import Landing from './Component/Landing.jsx';
import Original from './Component/Original.jsx';
import Bestsellerpage from "./Component/Bestellerpage.jsx";
import Gaadi from "./Component/Gaadi.jsx"
import Cursor from './Component/Cursor.jsx';
import Juapremi from "./Component/Juapremi.jsx"
import Madira from './Component/Madira.jsx';
import Aestheticspremi from "./Component/Aestheticspremi.jsx"
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Preload isVisible={isLoading} />
      {!isLoading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bestseller" element={<Bestseller />} /> 
            <Route path="/Refresh" element={<Refresh />} />
            <Route path="/About" element={<About />} />
            <Route path="/USPSection" element={<USPSection />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/Bestsellerpage" element={<Bestsellerpage />} />
            <Route path="/Original" element={<Original />} />
            <Route path="/Gaadi" element={<Gaadi />} />
            <Route path="/Cursor" element={<Cursor />} />
            <Route path="/Juapremi" element={<Juapremi />} />
            <Route path="/Madira" element={<Madira />} />
            <Route path="/Aestheticspremi" element={<Aestheticspremi />} />
          </Routes>
          <Footer></Footer>
        </Router>
      )}
    </div>
  );
};

export default App;