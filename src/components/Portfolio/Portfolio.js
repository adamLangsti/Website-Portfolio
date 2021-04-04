import React from 'react';
import '../../css/index.css';
import logo from '../../images/me.jpg';
import SocialMedia from './SocialMedia';
import { about, stuff } from '../About';

const Portfolio = () => {
    return (
        <>
            <header className='header'>
                <div className='header-container'>
                    <div className='header-greeting-wrapper'>
                        <h1>Hi, I'm Adam Lang</h1>
                    </div>
                </div>
            </header>

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
                            <li>Java</li>
                            <li>GIT</li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <div className='main-container'>
                    <h5>Find me on LinkedIn, GitHub or send me an email.</h5>
                    <SocialMedia />
                </div>
            </footer>
        </>
    );
};

export default Portfolio;
