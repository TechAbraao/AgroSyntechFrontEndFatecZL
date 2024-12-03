import "./index.css";

const CardFundations = ({ children, title }) => {
    return (
        <div className="card-fundations">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default CardFundations;
