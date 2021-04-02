import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='contact-form'>
            <a
                href='https://www.linkedin.com/in/adam-lang-b980b6a4/'
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedin id='linkedIn-contact' />
            </a>
            <a
                href='mailto:adam.lang-1@hotmail.com'
                rel='noopener noreferrer'
                className='contact-form-btn'>
                <p data-tag>E-mail</p>
            </a>
        </div>
    );
};

export default SocialMedia;
