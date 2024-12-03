const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

function Contact() {
    retun (
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
                <FontAwesomeIcon icon={{faFacebook}} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={{faFacebook}} size="2x" />
                </a>
            </div>
        </section>

    );

}

export default Contact;
