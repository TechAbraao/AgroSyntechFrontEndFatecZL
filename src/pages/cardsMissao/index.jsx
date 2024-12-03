import CardMissao from "../../components/cardMissao";
import "./index.css";
import auxiliarIcon from "./assets/auxiliar.svg";
import conscientizarIcon from "./assets/concientizar.svg";
import educarIcon from "./assets/educar.svg";

const CardsMissao = () => {
    return (
        <section className="cardmissao-section">
            <div className="cardmissao-template">
                <div className="card-missao-template-texto">
                    <p>
                        Explore nosso{" "}
                        <span id="card-missao-verde">TRABALHO</span> e{" "}
                        <span>IMPACTO</span>
                    </p>
                    <h1>Missão da AgroSyntech</h1>
                </div>
                <div className="card-missao-cards">
                    <CardMissao
                        titulo="Auxiliar"
                        icon={auxiliarIcon}
                        descricao="Auxiliar na Agricultura Sintrópica apoia a implementação e gestão sustentável."
                    />
                    <CardMissao
                        titulo="Conscientizar"
                        icon={conscientizarIcon}
                        descricao="Conscientizar sobre Agricultura Sintrópica fomenta práticas agrícolas sustentáveis."
                    />
                    <CardMissao
                        titulo="Educar"
                        icon={educarIcon}
                        descricao="Educar em Agricultura Sintrópica promove práticas sustentáveis e restauração ambiental."
                    />
                </div>
            </div>
        </section>
    );
};

export default CardsMissao;
