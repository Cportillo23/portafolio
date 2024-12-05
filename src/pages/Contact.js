import React from 'react';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkdelin, faGithub} from '@fortawesome/free-brands-svg-icons';
*/

function Contact() {
    return (
        <section className="contact">
            <h2>Contáctame</h2>
            <p>Puedes contactarme a través de correo electrónico:</p>
            <h2>carlosmportillo23@yahoo.com</h2>
            <p>Sigueme en las redes sociales:</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={{faFacebook}} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={{faLinkedin}} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={{faGithub}} size="2x" />
                </a>
            </div>
        </section>

    );

}

export default Contact;
