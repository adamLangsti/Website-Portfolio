import React from 'react';
import amazonLogo from '../images/amazon.png';
import twitterLogo from '../images/Twitter-Logo.png';

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects-list'>
                <ul>
                    <li>Amazon clone</li>
                    <li>Twitter clone</li>
                </ul>
                <div className='projects-links'>
                    <a
                        className='projects-links-apps'
                        href='https://clone-8d348.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                            src={amazonLogo}
                            alt='amazon'
                            className='amazon-logo'
                        />
                    </a>
                    <a
                        className='projects-links-apps'
                        href='https://twitter-clone-79e24.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                            src={twitterLogo}
                            alt='twitter'
                            className='twitter-logo'
                        />
                    </a>
                </div>
                <div className='projects-github'>
                    <a
                        className='projects-github-links'
                        href='https://github.com/adamLangsti/Amazon-Clone'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Github
                    </a>
                    <a
                        className='projects-github-links'
                        href='https://github.com/adamLangsti/Twitter-Clone'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Github
                    </a>
                </div>
            </div>
            <div className='projects-details'>
                <h1>Check out some projects I have been working on.</h1>
                <h2>
                    Both projects are using a Firebase database and they are
                    hosted through Firebase. In the Amazon project I am using
                    the React Context API for global state management.
                </h2>
            </div>
        </div>
    );
};

export default Projects;
