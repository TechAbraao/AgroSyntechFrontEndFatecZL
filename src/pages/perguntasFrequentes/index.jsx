import TemplatePerguntas from "../../components/templatePerguntas";
import "./index.css";

const PerguntasFrequentes = () => {
    let dataPergunta = [
        {pergunta: "O que é a AgroSyntech?"},
        {pergunta: "Quais produtos ou serviços a AgroSyntech oferece?"},
        {pergunta: "Como posso entrar em contato com a AgroSyntech?"},
        {pergunta: "Onde a AgroSyntech está localizada?"},
        {pergunta: "A AgroSyntech oferece suporte técnico para seus produtos?"}
    ]
    return (
        <section className="perguntasFrequentes-template">
            <div className="perguntasFrequentes-text-camp">
                <p>
                    <span>PERGUNTAS FREQUENTES</span> sobre a
                </p>
                <h1>AgroSyntech</h1>
            </div>
            <div className="perguntasFrequentes-templatePerguntas">
                {
                    dataPergunta.map((data) => {
                        // eslint-disable-next-line react/jsx-key
                        return <TemplatePerguntas ask={data.pergunta}/>
                    })
                }
            </div>
        </section>
    );
};

export default PerguntasFrequentes;
