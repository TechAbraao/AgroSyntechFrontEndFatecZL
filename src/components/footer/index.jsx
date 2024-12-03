import { Facebook, Instagram, Twitter } from "lucide-react";
import "./index.css";

const Footer = () => {
    const data_links = [
        {
            link_name: "HOME",
        },
        {
            link_name: "SOBRE",
        },
        {
            link_name: "PRÁTICAS",
        },
        {
            link_name: "CONTATO",
        },
    ];
    return (
        <footer>
            <div className="footer-superior">
                <div className="navbar-agrosyntech-logo">
                    <h1>AGRO</h1>
                    <p>SYNTECH</p>
                </div>
                <ul className="navbar-links-navegation">
                    {data_links.map((item, index) => (
                        <li key={index}>{item.link_name}</li>
                    ))}
                </ul>
                <div className="container-social-midia-footer">
                    <div>
                        <Facebook />
                    </div>
                    <div>
                        <Instagram />
                    </div>
                    <div>
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="footer-inferior">
                <p>
                    Todos os Direitos Reservados | <span>AgroSyntech</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
