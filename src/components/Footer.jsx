import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                marginTop: '4rem'
            }}>
                <h2>Let's Connect</h2>
                <p style={{marginBottom: '2rem'}}>
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    <a href="mailto:vivprajapati1520@gmail.com" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        background: 'rgba(79, 70, 229, 0.1)',
                        border: '1px solid rgba(79, 70, 229, 0.2)',
                        borderRadius: '25px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}>
                        📧 Email Me
                    </a>
                    <a href="tel:+919892499840" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        borderRadius: '25px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}>
                        📱 Call Me
                    </a>
                </div>
            </section>
            
            {/* Footer */}
            <footer>
                <div style={{marginBottom: '2rem'}}>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem'}}>Vivek Prajapati</h3>
                    <p style={{color: '#94a3b8', marginBottom: '2rem'}}>Senior Android Developer | Building the future of mobile communication</p>
                </div>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    <a href="https://www.linkedin.com/in/vivek-prajapati-839261181/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.5rem',
                           padding: '0.8rem 1.5rem',
                           background: 'rgba(79, 70, 229, 0.1)',
                           border: '1px solid rgba(79, 70, 229, 0.2)',
                           borderRadius: '25px',
                           textDecoration: 'none',
                           fontWeight: '500',
                           transition: 'all 0.3s ease'
                       }}>
                        💼 LinkedIn
                    </a>
                    <a href="https://github.com/vivekCometChat" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.5rem',
                           padding: '0.8rem 1.5rem',
                           background: 'rgba(79, 70, 229, 0.1)',
                           border: '1px solid rgba(79, 70, 229, 0.2)',
                           borderRadius: '25px',
                           textDecoration: 'none',
                           fontWeight: '500',
                           transition: 'all 0.3s ease'
                       }}>
                        💻 GitHub
                    </a>
                    <a href="https://www.cometchat.com/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.5rem',
                           padding: '0.8rem 1.5rem',
                           background: 'rgba(79, 70, 229, 0.1)',
                           border: '1px solid rgba(79, 70, 229, 0.2)',
                           borderRadius: '25px',
                           textDecoration: 'none',
                           fontWeight: '500',
                           transition: 'all 0.3s ease'
                       }}>
                        🚀 CometChat
                    </a>
                </div>
                
                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center'
                }}>
                    <p style={{color: '#64748b', fontSize: '0.9rem', margin: 0}}>
                        © 2025 Vivek Prajapati. Built with React & ❤️
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
