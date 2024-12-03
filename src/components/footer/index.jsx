import { Facebook, Instagram, Twitter } from "lucide-react";
import "./index.css";

const Footer = () => {
    const data_links = [
        {
            link_name: "Termos de Uso",
        },
        {
            link_name: "Política de Privacidade",
        },
        {
            link_name: "Termo de Garantia",
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
                <div className="footer-inferior-contato">
                    <p>Telefone: (11) 98326-3585 </p>
                    <p>E-mail: agrosyntech.contato@hotmail.com</p>
                    <p>Endereço: R. da Diversão, 90</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
