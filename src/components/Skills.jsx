import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Technical Expertise</h2>
            <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', 
                gap: '2rem', 
                marginTop: '2rem'
            }}>
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem', fontSize: '1.2rem'}}>Programming Languages</h3>
                    <ul>
                        <li>Kotlin (Advanced)</li>
                        <li>Java (Advanced)</li>
                        <li>JavaScript (Intermediate)</li>
                        <li>Python (Intermediate)</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem', fontSize: '1.2rem'}}>Android Development</h3>
                    <ul>
                        <li>Jetpack Compose</li>
                        <li>Android SDK & NDK</li>
                        <li>Material Design</li>
                        <li>Custom Views & MotionLayout</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem', fontSize: '1.2rem'}}>Architecture & Patterns</h3>
                    <ul>
                        <li>MVVM Architecture</li>
                        <li>Clean Architecture</li>
                        <li>Modularization</li>
                        <li>Dependency Injection (Hilt/Dagger)</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem', fontSize: '1.2rem'}}>Backend & APIs</h3>
                    <ul>
                        <li>REST APIs</li>
                        <li>GraphQL</li>
                        <li>Firebase Services</li>
                        <li>Socket.io & WebSockets</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem', fontSize: '1.2rem'}}>Tools & DevOps</h3>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>CI/CD Pipelines</li>
                        <li>Gradle Build System</li>
                        <li>GitHub Actions</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: '#4f46e5', marginBottom: '1rem', fontSize: '1.2rem'}}>Testing & Quality</h3>
                    <ul>
                        <li>Unit Testing (JUnit)</li>
                        <li>UI Testing (Espresso)</li>
                        <li>Code Reviews</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
