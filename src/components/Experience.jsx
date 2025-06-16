import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Professional Experience</h2>
            <div>
                <h3>Senior Software Developer</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                    <p style={{color: '#06b6d4', fontWeight: '600', margin: 0}}>CometChat Inc.</p>
                    <span style={{color: '#94a3b8', fontSize: '0.9rem'}}>January 2025 - Present</span>
                </div>
                <ul>
                    <li>Lead architect for core modules in CometChat's Android SDK, serving 1M+ monthly active users</li>
                    <li>Design and implement scalable, modular chat components using Kotlin and Jetpack Compose</li>
                    <li>Mentor junior developers and conduct technical interviews, improving team productivity by 40%</li>
                    <li>Collaborate with cross-functional teams to define product roadmaps and technical specifications</li>
                    <li>Optimize application performance, reducing SDK size by 30% and improving initialization time by 50%</li>
                </ul>
            </div>
            <div>
                <h3>Software Developer</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                    <p style={{color: '#06b6d4', fontWeight: '600', margin: 0}}>CometChat Inc.</p>
                    <span style={{color: '#94a3b8', fontSize: '0.9rem'}}>January 2024 - December 2024</span>
                </div>
                <ul>
                    <li>Designed and developed the Android Chat UI Kit v5 from ground up using modern Android technologies</li>
                    <li>Implemented comprehensive chat features including message threads, typing indicators, and push notifications</li>
                    <li>Built custom UI components with Material Design principles, improving user engagement by 35%</li>
                    <li>Integrated real-time messaging capabilities with WebSocket connections and offline message synchronization</li>
                    <li>Collaborated with QA team to establish testing frameworks, reducing bug reports by 60%</li>
                </ul>
            </div>
            <div>
                <h3>Associate Software Developer</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                    <p style={{color: '#06b6d4', fontWeight: '600', margin: 0}}>CometChat Inc.</p>
                    <span style={{color: '#94a3b8', fontSize: '0.9rem'}}>Jan 2021 - December 2023</span>
                </div>
                <ul>
                    <li>Developed and maintained Android applications using Kotlin and Java, following MVVM architecture</li>
                    <li>Implemented RESTful API integrations and real-time data synchronization using Retrofit and Room</li>
                    <li>Created reusable UI components and libraries, reducing development time by 25% across projects</li>
                    <li>Participated in code reviews and established coding standards, improving code quality metrics</li>
                    <li>Collaborated with design team to implement pixel-perfect UI/UX designs</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
