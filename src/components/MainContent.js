import React from 'react';
import logo from '../images/profile.jpg';
import { about, stuff } from './About';

const MainContent = () => {
    return (
        <section className='content'>
            <div className='content-container'>
                <h2>
                    <strong>About</strong>
                </h2>
                <img alt='pic' src={logo} />
                <h3>{about}</h3>
                <h3>{stuff}</h3>
                <hr />
                <h4>Skills</h4>

                <div className='content-skills'>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS/SCSS</li>
                        <li>Javascript</li>
                        <li>React & React Native</li>
                        <li>UX/UI</li>
                    </ul>

                    <ul>
                        <li>Firebase</li>
                        <li>Object Oriented Programming</li>
                        <li>C#</li>
                        <li>Node.js</li>
                        <li>GIT</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MainContent;
