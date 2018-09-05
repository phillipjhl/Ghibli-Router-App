import React from 'react';

function MoreInfoCard(props) {
    return (
        <div className="card" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.first}</h5>
                    <p className="card-text">{props.second}</p>
                    <p className="card-text">{props.third}</p>
                    <p className="car-text">{props.fourth}</p>
                    <p className="car-text">{props.fifth}</p>
                    <p className="car-text">{props.sixth}</p>
                </div>
            </div>
    );
}

export default MoreInfoCard;