import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);


    return (
        <form id="contact-form">
            <label>Name</label>
            <input className="input-field" type="text" name="name" />

            <label>Subject</label>
            <input className="input-field" type="text" name="subject" />

            <label>Email</label>
            <input className="input-field" type="text" name="email" />

            <label>Message</label>
            <textarea className="input-field" name="message"></textarea>

            <input id="submit-btn" type="submit" value="Send" />
        </form>
    );
}

export default ContactForm;