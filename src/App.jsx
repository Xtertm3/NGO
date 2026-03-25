import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar.jsx';
import Footer  from './components/Footer.jsx';
import Home    from './pages/Home.jsx';
import About   from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Donate  from './pages/Donate.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate"  element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
