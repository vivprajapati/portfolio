import React from 'react';

const Education = () => {
    return (
        <section id="education">
            <h2>Education & Certifications</h2>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)', 
                    padding: '2rem', 
                    borderRadius: '15px', 
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                    <h3 style={{color: '#4f46e5', marginBottom: '0.5rem'}}>Bachelor of Science in Information Technology</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                        <p style={{color: '#06b6d4', fontWeight: '600', margin: 0}}>University of Mumbai</p>
                        <span style={{color: '#94a3b8', fontSize: '0.9rem'}}>2018 - 2021</span>
                    </div>
                    <p style={{color: '#cbd5e1', textAlign: 'left', margin: 0}}>
                        Specialized in software development, data structures, algorithms, and mobile application development. 
                        Completed projects in Android development, web technologies, and database management systems.
                    </p>
                </div>
                
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1.5rem', textAlign: 'center'}}>Professional Certifications</h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
                        <div style={{
                            background: 'rgba(79, 70, 229, 0.1)', 
                            padding: '1.5rem', 
                            borderRadius: '10px',
                            border: '1px solid rgba(79, 70, 229, 0.2)',
                            textAlign: 'center'
                        }}>
                            <h4 style={{color: '#e0e0e0', marginBottom: '0.5rem'}}>Android Development</h4>
                            <p style={{color: '#94a3b8', fontSize: '0.9rem', margin: 0}}>Google Certified</p>
                        </div>
                        <div style={{
                            background: 'rgba(6, 182, 212, 0.1)', 
                            padding: '1.5rem', 
                            borderRadius: '10px',
                            border: '1px solid rgba(6, 182, 212, 0.2)',
                            textAlign: 'center'
                        }}>
                            <h4 style={{color: '#e0e0e0', marginBottom: '0.5rem'}}>Kotlin Programming</h4>
                            <p style={{color: '#94a3b8', fontSize: '0.9rem', margin: 0}}>JetBrains Certified</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
