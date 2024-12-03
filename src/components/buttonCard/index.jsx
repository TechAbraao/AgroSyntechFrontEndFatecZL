import { ArrowRight } from "lucide-react";
import "./index.css";

const ButtonCard = () => {
    return (
        <div className="buttonCard-template">
            <p>Saiba Mais</p>
            <button className="buttonCard-button">
                <ArrowRight />
            </button>
        </div>
    );
};

export default ButtonCard;
