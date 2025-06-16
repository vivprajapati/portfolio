import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                Experienced Senior Android Developer with 4+ years of expertise in building scalable, high-performance 
                mobile applications using modern Android technologies. Specialized in Kotlin, Jetpack Compose, and 
                architectural patterns including MVVM and Clean Architecture.
            </p>
            <p>
                Currently leading core development initiatives at CometChat, architecting robust chat solutions and 
                SDK components that serve millions of users globally. Passionate about code quality, performance 
                optimization, and mentoring development teams.
            </p>
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2rem', 
                marginTop: '2rem',
                flexWrap: 'wrap'
            }}>
                <div style={{textAlign: 'center'}}>
                    <h4 style={{color: '#4f46e5', marginBottom: '0.5rem'}}>4+</h4>
                    <p style={{fontSize: '0.9rem', margin: 0}}>Years Experience</p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h4 style={{color: '#4f46e5', marginBottom: '0.5rem'}}>50+</h4>
                    <p style={{fontSize: '0.9rem', margin: 0}}>Projects Delivered</p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h4 style={{color: '#4f46e5', marginBottom: '0.5rem'}}>3</h4>
                    <p style={{fontSize: '0.9rem', margin: 0}}>Open Source Projects</p>
                </div>
            </div>
        </section>
    );
};

export default About;
