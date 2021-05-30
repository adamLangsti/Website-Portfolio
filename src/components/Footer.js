import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='main-container'>
                <h5>Find me on LinkedIn, GitHub or send me an email.</h5>
                <SocialMedia />
            </div>
        </footer>
    );
};

export default Footer;
