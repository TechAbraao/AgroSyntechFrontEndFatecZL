import "./index.css"
import FundoForm from './assets/fundo-form.png'

const FormPage = () => {

   const handleSubmit = (e) => {
      e.preventDefault();
      
      alert("Cadastro realizado com sucesso.")
   }

   return (
      <div className="htmlForm__container">
         <article className="htmlForm__article">
            <section className="from__selection">
               <h2 className="from__h2">ENTRE EM CONTATO</h2>
               <p className="from__p">
                  Explore a transformação do cultivo sustentável com a
                  agricultura sintrópica.
                  <br />
                  Deixe seus dados para saber mais.
               </p>
               <img
                  className="from__img"
                  src={FundoForm}
                  alt="Folhas verde "
               />
            </section>

            <form id="htmlForm" action="#" method="post" onSubmit={handleSubmit}>
               <label htmlFor="nome">Nome:</label>
               <input type="text" id="nome" name="nome" required />

               <label htmlFor="email">E-mail:</label>
               <input type="email" id="email" name="email" required />

               <label htmlFor="telefone">Telefone:</label>
               <input type="tel" id="telefone" name="telefone" required />

               <label htmlFor="genero">Gênero:</label>
               <select id="genero" name="genero" required>
                  <option value="">Selecione</option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
               </select>

               <label htmlFor="dataNascimento">Data de Nascimento:</label>
               <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  required
               />
               
               <button type="submit">Enviar</button>
            </form>
         </article>
      </div>
   );
};

export default FormPage;