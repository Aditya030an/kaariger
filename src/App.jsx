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
import CartPage from "./Component/CartPage.jsx"
import Gaadi from "./Component/Gaadi.jsx"
import Cursor from './Component/Cursor.jsx';
import Juapremi from "./Component/Juapremi.jsx"
import Madira from './Component/Madira.jsx';
import Aestheticspremi from "./Component/Aestheticspremi.jsx"
// import Journey from "./Component/Journey.jsx"
import Slide from "./Component/Slide.jsx"
import Contact from './Component/Contact.jsx';
import Cinemapremi from "./Component/Cinemapremi.jsx"
import Pencilpremi from "./Component/Pencilpremi.jsx"
import Kaarigarluxe from './Component/Kaarigarluxe.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
          <Navbar cart={cart}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bestseller" element={<Bestseller />} /> 
            <Route path="/Refresh" element={<Refresh />} />
            <Route path="/About" element={<About />} />
            <Route path="/USPSection" element={<USPSection />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/Bestsellerpage" element={<Bestsellerpage cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/Original" element={<Original cart={cart} setCart={setCart} />} />
            <Route path="/Gaadi" element={<Gaadi cart={cart} setCart={setCart} />} />
            <Route path="/Cursor" element={<Cursor />} />
            <Route path="/Juapremi" element={<Juapremi cart={cart} setCart={setCart}/>} />
            <Route path="/Madira" element={<Madira cart={cart} setCart={setCart}/>} />
            <Route path="/Aestheticspremi" element={<Aestheticspremi cart={cart} setCart={setCart}/>} />
            {/* <Route path="/Journey" element={<Journey />} /> */}
            <Route path="/Slide" element={<Slide />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Pencilpremi" element={<Pencilpremi cart={cart} setCart={setCart}/>} />
            <Route path="/Cinemapremi" element={<Cinemapremi cart={cart} setCart={setCart}/>} />
            <Route path="/Kaarigarluxe" element={<Kaarigarluxe cart={cart} setCart={setCart}/>} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
