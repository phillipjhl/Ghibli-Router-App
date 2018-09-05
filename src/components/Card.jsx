import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Card(props) {
    //if it is a person
    if (props.fourth !== undefined) {
        return (
                <div className="card border-dark mx-2" >
                    <div className="card-body">
                        <h5 className="card-header text-dark">{props.title}</h5>
                        <p className="card-text">Age: {props.secondary}</p>
                        <p className="card-text">Gender: {props.third}</p>
                        <Link to={`/people/${props.id}`} className="btn btn-dark" >Learn More</Link>
                    </div>
                </div>
        );
    } else { //if it is a film
        return (
                <div className="card border-dark mx-2">
                    <div className="card-body">
                        <h5 className="card-header text-dark">{props.title}</h5>
                        <p className="card-text">{props.secondary}</p>
                        <p className="card-text">Director: {props.third}</p>
                        <Link to={`/films/${props.id}`} className="btn btn-dark" >Learn More</Link>
                    </div>
                </div>
        );
    }
}

export default Card;