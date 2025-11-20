import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Items from "./components/Items.jsx";
import Contact from "./components/Contact.jsx";

function App() {

  // 🔥 SHARED CART HERE
  const [cart, setCart] = useState({}); 

  const increase = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrease = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] === 0) delete updated[id];
      return updated;
    });
  };

  return (
    <BrowserRouter>
  <Nav cart={cart} />
  <Routes>
    <Route path="/" element={<Home cart={cart} increase={increase} decrease={decrease} />} />
    <Route path="/about" element={<About />} />
    <Route path="/items" element={<Items cart={cart} increase={increase} decrease={decrease} />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
