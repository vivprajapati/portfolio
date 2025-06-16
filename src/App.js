import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GlassBackground from './components/GlassBackground';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlassBackground />
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
