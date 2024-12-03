/* eslint-disable react/prop-types */
import CardFundations from "../cardFundations";
import BallNumber from "../ballNumber";
import "./index.css";

// eslint-disable-next-line react/prop-types
const Fundations = ({ data, index }) => {
    console.log(index);
    
    return (
        <div
            className={`fundations ${index % 2 === 0 && "fundations-right"}`}
            key={index}
        >
            <BallNumber>{data.number}</BallNumber>
            <CardFundations title={data.title}>{data.content}</CardFundations>
        </div>
    );
};

export default Fundations;
