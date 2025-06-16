import React from 'react';

const Header = () => {
    return (
        <header>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                <div>
                    <h1>Vivek Prajapati</h1>
                    <p>Senior Android Developer • CometChat Inc.</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
