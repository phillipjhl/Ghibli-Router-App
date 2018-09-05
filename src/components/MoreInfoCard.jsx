import React from 'react';

function MoreInfoCard(props) {
    return (
        <div className="card" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.header}</h5>
                    <p className="card-text">{props.secondary}</p>
                    <p className="card-text">{props.third}</p>
                    <p className="car-text"></p>
                </div>
            </div>
    );
}

export default MoreInfoCard;