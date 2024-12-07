import TemplatePerguntas from "../../components/templatePerguntas";
import "./index.css";

const PerguntasFrequentes = () => {
   let dataPergunta = [
      {
         pergunta: "O que é a AgroSyntech?",
         desc: "A AgroSyntech é um projeto inovador da FATEC que busca promover a integração da tecnologia com práticas sustentáveis na agricultura. Nosso foco é a agricultura sintrópica, um modelo que respeita e potencializa os ciclos naturais dos ecossistemas agrícolas, promovendo a regeneração do solo e a produção de alimentos de forma mais saudável e sustentável. Trabalhamos com soluções tecnológicas que apoiam e aceleram a adoção dessa metodologia, contribuindo para um futuro mais verde e produtivo.",
      },
      {
         pergunta: "Quais produtos ou serviços a AgroSyntech oferece?",
         desc: "A AgroSyntech ainda não oferece produtos comerciais, mas estamos desenvolvendo soluções inovadoras no campo da agricultura sintrópica. Nosso trabalho está focado em pesquisas e no desenvolvimento de tecnologias sustentáveis que promovem a regeneração do solo e a produção de alimentos de forma eficiente e ecológica. Estamos em constante evolução, com o objetivo de oferecer ferramentas e serviços que apoiem a implementação dessa prática agrícola no futuro.",
      },
      {
         pergunta: "Como posso entrar em contato com a AgroSyntech?",
         desc: "Para entrar em contato com a AgroSyntech, você pode encontrar nossas informações de contato no final da página. Estamos disponíveis para esclarecer dúvidas, trocar ideias e discutir possíveis colaborações relacionadas à agricultura sintrópica e soluções sustentáveis.",
      },
      {
         pergunta: "Onde a AgroSyntech está localizada?",
         desc: "A AgroSyntech está localizada na FATEC Zona Leste (Fatec ZL), um ambiente acadêmico inovador que nos permite desenvolver e testar soluções tecnológicas voltadas para a agricultura sintrópica e práticas sustentáveis.",
      },
      {
         pergunta: "A AgroSyntech oferece suporte técnico para seus produtos?",
         desc: "A AgroSyntech é um projeto inovador da FATEC que busca promover a integração da tecnologia com práticas sustentáveis na agricultura. Nosso foco é a agricultura sintrópica, um modelo que respeita e potencializa os ciclos naturais dos ecossistemas agrícolas, promovendo a regeneração do solo e a produção de alimentos de forma mais saudável e sustentável. Trabalhamos com soluções tecnológicas que apoiam e aceleram a adoção dessa metodologia, contribuindo para um futuro mais verde e produtivo.",
      },
   ];
   return (
      <section className="perguntasFrequentes-template">
         <div className="perguntasFrequentes-text-camp">
            <p>
               <span>PERGUNTAS FREQUENTES</span> sobre a
            </p>
            <h1>AgroSyntech</h1>
         </div>
         <div className="perguntasFrequentes-templatePerguntas">
            {dataPergunta.map((data) => {
               // eslint-disable-next-line react/jsx-key
               return (
                  // eslint-disable-next-line react/jsx-key
                  <TemplatePerguntas ask={data.pergunta} desc={data.desc} />
               );
            })}
         </div>
      </section>
   );
};

export default PerguntasFrequentes;
