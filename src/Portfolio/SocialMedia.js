import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='contact-form'>
            <a
                href='https://www.linkedin.com/in/adam-lang-b980b6a4/'
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedin className='icon' />
            </a>
            <a
                href='https://github.com/adamLangsti'
                target='_blank'
                rel='noopener noreferrer'>
                <FaGithub className='icon-git' />
            </a>
            <a href='mailto:adam.lang-1@hotmail.com' rel='noopener noreferrer'>
                <FaEnvelope className="icon-mail" />
            </a>
        </div>
    );
};

export default SocialMedia;
