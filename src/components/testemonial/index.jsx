
import "./index.css";
import CardTestemonial from "../cardTestemonial";

const Testemonial = () => {
    const dataTestimonials = [
        {
            name: "João Carlos",
            cargo: "Campinas - SP",
            content:
                "Este site mudou totalmente minha perspectiva sobre agricultura. Ele traz conteúdo prático e completo, perfeito para quem quer adotar práticas regenerativas na fazenda.",
        },
        {
            name: "Mariana Lopes",
            cargo: "Fortaleza - CE",
            content:
                "Aprendi técnicas para aumentar a produtividade sem prejudicar o solo. As dicas e os vídeos são claros e fáceis de aplicar no dia a dia.",
        },
        {
            name: "Rafael Santos",
            cargo: "Belo Horizonte - MG",
            content:
                "Encontrar materiais tão detalhados sobre agricultura sintrópica foi um achado! Recomendo para quem busca métodos sustentáveis e saudáveis para a terra.",
        },
        {
            name: "Aline Ferreira",
            cargo: "Porto Alegre - RS",
            content:
                "Além do conteúdo, os fóruns e a troca de experiências com outros produtores são inspiradores. Sinto que não estou sozinho nesse caminho.",
        },
        {
            name: "Lucas Almeida",
            cargo: "Manaus - AM",
            content:
                "Seguir as práticas sintrópicas ensinadas aqui fez a diferença nos meus resultados. É incrível ver o solo se regenerando e a diversidade aumentando.",
        },
        {
            name: "Camila Oliveira",
            cargo: "Cachoeiro de Itapemirim - ES",
            content:
                "Sou novo na agricultura sintrópica, e o site me deu a base que eu precisava. Mas vejo que também tem conteúdo avançado para quem já está na área!",
        },
    ];
    return (
        <div className="swiper-testimonials">
            {dataTestimonials.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <CardTestemonial data={data} />
            ))}
        </div>
    );
};

export default Testemonial;
