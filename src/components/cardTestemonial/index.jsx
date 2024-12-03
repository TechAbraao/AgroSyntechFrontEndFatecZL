/* eslint-disable react/prop-types */

import "./index.css";

const CardTestemonial = ({ data }) => {
    return (
        <article className="card-tetemonial">
            <div className="card-testemonial-head">
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.cargo}</p>
                </div>
            </div>

            <p className="card-testemonial-text">{data.content}</p>
        </article>
    );
};

export default CardTestemonial;
