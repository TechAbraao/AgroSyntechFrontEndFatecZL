/* eslint-disable react/prop-types */
import ButtonCard from "../buttonCard";
import "./index.css";

const CardMissao = ({ titulo = "NULL", descricao = "NULL", icon }) => {
   return (
      <section className="cardMissao-section">
         <div className="cardMissao-icon">
            <img src={icon} alt="" />
         </div>
         <h1>{titulo}</h1>
         <p>{descricao}</p>
         <div className="cardMissao-icon-button">
            <ButtonCard />
         </div>
      </section>
   );
};

export default CardMissao;
