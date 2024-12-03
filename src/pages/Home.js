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
                    <FontAwesomeIcon icon={{faFacebook}} size="2x" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={{faFacebook}} size="2x" />
                    </a>                    
                </div>
            </div>
        </section>
    );
}
export default Home;
