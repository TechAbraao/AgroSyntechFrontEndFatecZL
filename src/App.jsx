import Navbar from "./components/navbar/index.jsx";
import "./App.css";
import Main from "./pages/main/index.jsx";
import CardsMissao from "./pages/cardsMissao/index.jsx";
import SobreErnstGotsch from "./pages/sobreErnstGotsch/index.jsx";
import FooterPage from "./pages/footer/index.jsx";
import FormPage from "./pages/form/index.jsx";
import PerguntasFrequentes from "./pages/perguntasFrequentes/index.jsx";
import Fundamentos from "./pages/fundamentosPage/index.jsx";
import Testemonial from "./components/testemonial/index.jsx";

function App() {
   return (
      <>
         <Navbar />
         <Main />
         <CardsMissao />
         <SobreErnstGotsch />
         <Fundamentos />
         <FormPage />
         <PerguntasFrequentes />
         <Testemonial />
         <FooterPage />
      </>
   );
}

export default App;
