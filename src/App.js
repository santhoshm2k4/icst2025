import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Notfound from "./components/Notfound";
import ContactUs from './components/ContactUs';
// import About from "./components/About";
// import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/navbar" element={<Navbar />} />
         <Route path="/about-us" element={<Aboutus />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Notfound />} />
         <Route path="/about" element={<Aboutus />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Notfound />} />
        <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
