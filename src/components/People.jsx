import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card';

class People extends Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => {
                //mapping over recieved array to produce people Card components
                let peopleData = obj.map((val) => {
                    return <Card key={val.id} id={val.id} title={val.name} secondary={val.age} third={val.gender} fourth={val.url}/>;
                });
                this.setState({ peopleCards: peopleData });
            });
    }

    render() {
        return (
            <div className="card-columns">
            {this.state.peopleCards}
            </div>
        );
    }
}

export default People;