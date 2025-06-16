import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Achievements from './components/Achievements';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import GlassBackground from './components/GlassBackground';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem', color: '#4f46e5'}}>
          Vivek Prajapati
        </h1>
        <h2 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#e0e0e0'}}>
          Senior Android Developer Portfolio
        </h2>
        <p style={{fontSize: '1.2rem', color: '#a0a0a0'}}>
          🎉 Portfolio is working! Custom React app is loading successfully.
        </p>
      </div>
    </>
  );
};

export default App;
