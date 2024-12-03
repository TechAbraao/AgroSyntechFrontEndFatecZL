import { ArrowDown } from "lucide-react";
import "./index.css";

const TemplatePerguntas = ({ask = "Sem pergunta"}) => {
    return (
        <div className="templatePerguntas">
            <p>{ask}</p>
            <button className="templatePerguntas-button">
                <ArrowDown strokeWidth={3.5} size={22}/>
            </button>
        </div>
    );
};

export default TemplatePerguntas;
