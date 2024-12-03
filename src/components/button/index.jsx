import "./index.css";

// eslint-disable-next-line react/prop-types
const Button = ({ title = "Indefinido" }) => {
   return (
      <>
         <button>{title}</button>
      </>
   );
};

export default Button;
