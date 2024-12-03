import { useEffect, useState } from "react";
import Button from "../button";
import NavbarHamburguer from "../navbarMobile";
import "./index.css";

const Navbar = () => {
   const [navHamburguer, setNavHamburguer] = useState(false)

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

   const handleResize = () => {
      if (window.innerWidth < 1000) {
         setNavHamburguer(true)
      }
      if (window.innerWidth > 1000) {
         setNavHamburguer(false)
      }
   }
   useEffect(() => {
      window.addEventListener("resize", handleResize)

      return () => {
         window.removeEventListener("resize", handleResize)
      }
   }, [navHamburguer])

   return (
      <>
         <nav>
            <div className="navbar-agrosyntech-logo">
               <h1>AGRO</h1>
               <p>SYNTECH</p>
            </div>
            {
               navHamburguer || window.innerWidth < 1000 ?  <NavbarHamburguer /> : (
                  <>
                   <ul className="navbar-links-navegation">
               {data_links.map((item, index) => (
                  <li key={index}>{item.link_name}</li>
               ))}
            </ul>
            <div className="navbar-login-register">
               <Button title="Registrar-se" />
               <Button title="Entrar" />
            </div>
                  </>
               )
            }
         </nav>
      </>
   );
};

export default Navbar;
