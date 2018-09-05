import React from 'react';

function MoreInfoCard(props) {
    return (
        //for a film
        <div className="card" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.first}</h5>
                    <p className="card-text">{props.second}</p>
                    <p className="card-text">Director: {props.third}</p>
                    <p className="car-text">Producer: {props.fourth}</p>
                    <p className="car-text">Release Date; {props.fifth}</p>
                    <p className="car-text">Rotten Tomato Score: {props.sixth}%</p>
                </div>
            </div>
    );
}

export default MoreInfoCard;