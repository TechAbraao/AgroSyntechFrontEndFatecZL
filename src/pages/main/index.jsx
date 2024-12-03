import Button from "../../components/button";

import "./index.css";

const Main = () => {
   return (
      <main className="main-background">
         <div className="main-text-camp">
            <div className="main-center">
               <p className="main-center-p1">
                  Regenerando o <span>SOLO</span> e <span>RESTAURANDO</span> a
                  vida.
               </p>
               <h1>
                  Agro<span>Syntech</span>
               </h1>
               <p className="main-center-p2">
                  A agricultura sintrópica imita ecossistemas naturais para
                  melhorar o solo e aumentar a biodiversidade, promovendo
                  práticas agrícolas sustentáveis e ecológicas.
               </p>
               <Button title="Conheça-nos" />
            </div>
         </div>
         <div className="main-photo"></div>
      </main>
   );
};

export default Main;
