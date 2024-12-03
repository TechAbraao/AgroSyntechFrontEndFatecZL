
import Fundations from "../../components/fundations";
import "./index.css";

const Fundamentos = () => {
    const dataFundations = [
        {
            title: "Diversidade de Plantas",
            number: "01",
            content:
                "Incorporar uma ampla variedade de espécies vegetais, como árvores, arbustos e plantas herbáceas, para criar um ecossistema agrícola resiliente e produtivo. A diversidade ajuda a replicar a complexidade dos ecossistemas naturais e promove a saúde do solo e o controle natural de pragas.",
        },
        {
            title: "Cobertura de Solo",
            number: "02",
            content:
                "Manter o solo coberto com vegetação, seja por meio de plantas de cobertura ou mulch, para prevenir a erosão, conservar a umidade e enriquecer o solo com matéria orgânica. Isso também ajuda a criar um ambiente propício para a vida microbiana e a ciclagem de nutrientes.",
        },
        {
            title: "Estrutura em Camadas",
            number: "03",
            content:
                "Adotar um arranjo vertical das plantas que imita a estrutura dos ecossistemas naturais, onde diferentes espécies ocupam diferentes alturas. Isso otimiza a captura de luz solar, reduz a competição entre as plantas e melhora o uso dos recursos disponíveis.",
        },
        {
            title: "Ciclagem de Nutrientes",
            number: "04",
            content:
                "Implementar práticas que favoreçam a reciclagem e regeneração dos nutrientes no solo, como a compostagem e a utilização de plantas que fixam nitrogênio. Esse princípio busca criar um ciclo natural de nutrientes que sustenta a saúde e a fertilidade do solo sem depender de insumos externos.",
        },
    ];

    return (
        <section className="fundamentos-page">
            <div className="fundations-title-container">
                <h3>
                    Conheça os <span>PRINCIPAIS</span> fundamentos da
                </h3>
                <h2>Agricultura Sintrópica</h2>
            </div>

            {dataFundations.map((card, index) => (
                // eslint-disable-next-line react/jsx-key
                <Fundations data={card} index={index} />
            ))}
        </section>
    );
};

export default Fundamentos;
