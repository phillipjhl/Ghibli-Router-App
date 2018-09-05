import React from 'react';

function MoreInfoCard(props) {
    //for a film
    if (props.sixth) {
        return (
            <div className="card mx-2" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.first}</h5>
                    <p className="card-text">{props.second}</p>
                    <p className="card-text">Director: {props.third}</p>
                    <p className="car-text">Producer: {props.fourth}</p>
                    <p className="car-text">Release Date: {props.fifth}</p>
                    <p className="car-text">Rotten Tomato Score: {props.sixth}%</p>
                </div>
            </div>
        );
    //for a person
    } else {
        return (
            <div className="card mx-2" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.first}</h5>
                    <p className="card-text">Gender: {props.second}</p>
                    <p className="card-text">Age: {props.third}</p>
                    <p className="car-text">Eye Color: {props.fourth}</p>
                    <p className="car-text">Hair Color : {props.fifth}</p>
                </div>
            </div>
        );
    }
}

export default MoreInfoCard;