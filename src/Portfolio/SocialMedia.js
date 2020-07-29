import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div id="contact-form">
            <a href="https://www.linkedin.com/in/adam-lang-b980b6a4/" target="_blank">
                <FaLinkedin id="linkedIn-contact" />
            </a>
            <a href="mailto:adam.lang-1@hotmail.com" rel="noopener noreferrer" id="contact-btn"><p>E-mail</p></a>
        </div>
    );
}

export default SocialMedia;