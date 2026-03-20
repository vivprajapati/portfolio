import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnicalArsenal from './components/TechnicalArsenal';
import ServiceExcellence from './components/ServiceExcellence';
import Projects from './components/Projects';
import Experience from './components/Experience';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <TechnicalArsenal />
        <ServiceExcellence />
        <Projects />
        <Experience />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
