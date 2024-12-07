/* eslint-disable react/prop-types */
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import "./index.css";

const TemplatePerguntas = ({
   ask = "Sem pergunta",
   desc = "Sem descrição",
}) => {
   const [isHandle, setIsHandle] = useState(false);

   
   const clickTemplate = () => {
      setIsHandle(prev => !prev); 
   };

   return (
      <details className="templatePerguntas" onClick={clickTemplate}>
         <summary>
            <div className="templatePerguntas-closed-summary">
               <p>{ask}</p>
               <button className="templatePerguntas-button">
                  {isHandle ? (
                     <ArrowUp strokeWidth={3.5} size={22} />
                  ) : (
                     <ArrowDown strokeWidth={3.5} size={22} />
                  )}
               </button>
            </div>
         </summary>
         <div className="templatePerguntas-open-summary">
         <p>{desc}</p>
         </div>
      </details>
   );
};

export default TemplatePerguntas;