import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import SkillCard from './Components/SkillCards';
import WorkExperience from './Components/WorkExpreince';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <SkillCard />
              <WorkExperience />
              <Projects />
                <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillCard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
