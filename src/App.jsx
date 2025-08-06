import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '/src/Components//Header';
import Home from '/src/Components/Home';
import About from '/src/Components/About';
import Skills from '/src/Components/Skills';
import Projects from '/src/Components/Projects';
import Contact from '/src/Components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  );
}

export default App;
