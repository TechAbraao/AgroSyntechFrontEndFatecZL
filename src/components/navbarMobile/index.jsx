import "./index.css"
import { useState } from "react";

const NavbarHamburguer = () => {
    const [clickMenu, setClickMenu] = useState(false)

    const handleClickMenu = () => {
        setClickMenu(!clickMenu)
        console.log(clickMenu)
    }

    return (
        <div className="NavbarHamburguer" onClick={() => handleClickMenu()}>
            <div className="NavbarHamburguer-line"></div>
            <div className="NavbarHamburguer-line"></div>
            <div className="NavbarHamburguer-line"></div>
            {
                clickMenu && (
                    <>
                    <div className="clickMenu-div">
                        <p>HOME</p>
                        <p>SOBRE</p>
                        <p>PRÁTICAS</p>
                        <p>CONTATO</p>
                        <p>VOLTAR</p>
                    </div>
                    </>
                )
            }
        </div>
    );
}

export default NavbarHamburguer;