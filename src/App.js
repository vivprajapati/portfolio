import React from 'react';
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
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0c0c0c 100%)',
        color: '#e0e0e0'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem', color: '#4f46e5'}}>
          ⚡ VIVEK PRAJAPATI - PORTFOLIO LIVE ⚡
        </h1>
        <h2 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#e0e0e0'}}>
          Senior Android Developer Portfolio - Updated: June 16, 2025
        </h2>
        <p style={{fontSize: '1.2rem', color: '#a0a0a0'}}>
          🎯 SUCCESS! This is your REAL custom portfolio - NOT the default React page!
        </p>
        <p style={{fontSize: '1rem', color: '#888', marginTop: '1rem'}}>
          Build timestamp: {Date.now()} - If you see this, deployment is working!
        </p>
      </div>
    </>
  );
};

export default App;
