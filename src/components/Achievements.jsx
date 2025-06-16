import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements">
            <h2>Key Achievements</h2>
            <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem', 
                marginTop: '2rem'
            }}>
                <div style={{
                    background: 'rgba(79, 70, 229, 0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(79, 70, 229, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚀</div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem'}}>SDK Performance</h3>
                    <p style={{textAlign: 'center', margin: 0}}>
                        Optimized CometChat Android SDK, reducing initialization time by 50% and 
                        decreasing overall SDK size by 30%
                    </p>
                </div>
                
                <div style={{
                    background: 'rgba(6, 182, 212, 0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>👥</div>
                    <h3 style={{color: '#06b6d4', marginBottom: '1rem'}}>Team Leadership</h3>
                    <p style={{textAlign: 'center', margin: 0}}>
                        Successfully mentored 5+ junior developers and improved team productivity 
                        by 40% through code reviews and knowledge sharing
                    </p>
                </div>
                
                <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏆</div>
                    <h3 style={{color: '#10b981', marginBottom: '1rem'}}>Quality Excellence</h3>
                    <p style={{textAlign: 'center', margin: 0}}>
                        Established comprehensive testing frameworks resulting in 60% reduction 
                        in production bugs and improved code coverage
                    </p>
                </div>
                
                <div style={{
                    background: 'rgba(168, 85, 247, 0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
                    <h3 style={{color: '#a855f7', marginBottom: '1rem'}}>User Impact</h3>
                    <p style={{textAlign: 'center', margin: 0}}>
                        Built chat solutions serving 1M+ monthly active users with 99.9% uptime 
                        and enhanced user engagement by 35%
                    </p>
                </div>
                
                <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
                    <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>Innovation</h3>
                    <p style={{textAlign: 'center', margin: 0}}>
                        Pioneered the development of Jetpack Compose-based UI Kit, setting new 
                        standards for modern Android chat applications
                    </p>
                </div>
                
                <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    padding: '2rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔧</div>
                    <h3 style={{color: '#f59e0b', marginBottom: '1rem'}}>Development Efficiency</h3>
                    <p style={{textAlign: 'center', margin: 0}}>
                        Created reusable component libraries that reduced development time by 25% 
                        across multiple projects and teams
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
