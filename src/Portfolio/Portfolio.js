import React from 'react';
import '../css/index.css';
import logo from '../images/me.jpg';
import SocialMedia from './SocialMedia';
import { about } from '../About';

const Portfolio = () => {
    return (
        <>
            <section className='s1'>
                <div className='main-container'>
                    <div className='main-container-greeting-wrapper'>
                        <h1>Hi, I'm Adam Lang</h1>
                    </div>
                </div>
            </section>

            <section className='s2'>
                <div className='main-container'>
                    <h2>
                        <strong>About</strong>
                    </h2>
                    <img alt='pic' src={logo} />
                    <p>{about}</p>
                    <hr />
                    <h4>Skills</h4>

                    <div className='main-container-skills-container'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React & React Native</li>
                            <li>Swift</li>
                            <li>UX/UI</li>
                        </ul>

                        <ul>
                            <li>Firebase</li>
                            <li>Object Oriented Programming</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Xamarin</li>
                            <li>GIT</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='s4'>
                <div className='main-container'>
                    <h3>Find me on LinkedIn or send me an email.</h3>
                    <SocialMedia />
                </div>
            </section>
        </>
    );
};

export default Portfolio;
