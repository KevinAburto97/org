import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="#">
                <img src="/img/github.png" alt="Github"/>
            </a>
            <a href="#">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
            <a href="#">
                <img src="/img/linkedin.png" alt="LinkedIn"/>
            </a>
        </div>
        <img src="/img/logo.png" alt="org" />
        <strong>Desarrollado por Kevin Aburto</strong>
    </footer>
}

export default Footer;