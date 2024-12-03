import "./index.css";

const BallNumber = ({ children }) => {
    return (
        <div className="number-ball">
            <span>{children}</span>
        </div>
    );
};

export default BallNumber;
