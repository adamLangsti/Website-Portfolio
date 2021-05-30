import React from 'react';

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Check out some of the projects I am working on</h1>
            <div className='projects-links'>
                <a
                    href='https://clone-8d348.web.app/'
                    rel='noopener noreferrer'
                    target='_blank'>
                    Amazon Clone
                </a>
                <a
                    href='https://github.com/adamLangsti/Amazon-Clone'
                    rel='noopener noreferrer'
                    target='_blank'>
                    GitHub
                </a>
                <h2>
                    I made a fake Amazon website using React with Firebase cloud
                    hosting and database. I am using React Context API for state
                    management. This is a project that I found really
                    challenging but it was also very rewarding.
                </h2>
            </div>
        </div>
    );
};

export default Projects;
