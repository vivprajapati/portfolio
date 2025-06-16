import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Featured Projects & Open Source Contributions</h2>
            <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', 
                gap: '2rem', 
                marginTop: '2rem'
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem'}}>CometChat UI Kit v5</h3>
                    <p style={{color: '#cbd5e1', marginBottom: '1.5rem', textAlign: 'left'}}>
                        Complete Android UI Kit for chat applications built with Jetpack Compose. Features include 
                        real-time messaging, group chat, multimedia support, and extensive customization options.
                    </p>
                    <div style={{marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                        <span style={{
                            background: 'rgba(79, 70, 229, 0.2)',
                            color: '#a5b4fc',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>Kotlin</span>
                        <span style={{
                            background: 'rgba(6, 182, 212, 0.2)',
                            color: '#67e8f9',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>Jetpack Compose</span>
                        <span style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#6ee7b7',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>MVVM</span>
                    </div>
                    <a href="https://github.com/cometchat/cometchat-uikit-android" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                           display: 'inline-block',
                           padding: '0.8rem 1.5rem',
                           background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                           color: 'white',
                           borderRadius: '8px',
                           textDecoration: 'none',
                           fontWeight: '600',
                           transition: 'all 0.3s ease',
                           width: '100%',
                           textAlign: 'center',
                           boxSizing: 'border-box'
                       }}>
                        View on GitHub
                    </a>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem'}}>CometChat Android SDK</h3>
                    <p style={{color: '#cbd5e1', marginBottom: '1.5rem', textAlign: 'left'}}>
                        Core Android SDK for real-time messaging with support for text, media, and custom messages. 
                        Includes advanced features like message encryption and offline synchronization.
                    </p>
                    <div style={{marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                        <span style={{
                            background: 'rgba(79, 70, 229, 0.2)',
                            color: '#a5b4fc',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>Java</span>
                        <span style={{
                            background: 'rgba(6, 182, 212, 0.2)',
                            color: '#67e8f9',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>WebSocket</span>
                        <span style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#6ee7b7',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>REST API</span>
                    </div>
                    <a href="https://github.com/cometchat/chat-sdk-android" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                           display: 'inline-block',
                           padding: '0.8rem 1.5rem',
                           background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                           color: 'white',
                           borderRadius: '8px',
                           textDecoration: 'none',
                           fontWeight: '600',
                           transition: 'all 0.3s ease',
                           width: '100%',
                           textAlign: 'center',
                           boxSizing: 'border-box'
                       }}>
                        View on GitHub
                    </a>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem'}}>CometChat Builder App</h3>
                    <p style={{color: '#cbd5e1', marginBottom: '1.5rem', textAlign: 'left'}}>
                        Demo application showcasing the complete implementation of CometChat SDK with various 
                        chat features and UI customizations for developers to reference.
                    </p>
                    <div style={{marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                        <span style={{
                            background: 'rgba(79, 70, 229, 0.2)',
                            color: '#a5b4fc',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>Kotlin</span>
                        <span style={{
                            background: 'rgba(6, 182, 212, 0.2)',
                            color: '#67e8f9',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>Material Design</span>
                        <span style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#6ee7b7',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>Firebase</span>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.cometchat.builder.java&pcampaignid=web_share" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                           display: 'inline-block',
                           padding: '0.8rem 1.5rem',
                           background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                           color: 'white',
                           borderRadius: '8px',
                           textDecoration: 'none',
                           fontWeight: '600',
                           transition: 'all 0.3s ease',
                           width: '100%',
                           textAlign: 'center',
                           boxSizing: 'border-box'
                       }}>
                        View on Play Store
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
