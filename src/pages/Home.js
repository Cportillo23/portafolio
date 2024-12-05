import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
/*
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkdelin, faGithub} from '@fortawesome/free-brands-svg-icons';
*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
        <section className="home">
            <div>
                <h1>Soy Carlos Portillo</h1>
                <p>Soy un <strong>Estudiante</strong> de la ESIT</p>
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
            </div>
        </section>
    );
}
export default Home;
