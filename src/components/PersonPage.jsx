import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MoreInfoCard from './MoreInfoCard';

class PersonPage extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    componentWillMount() {
        // console.log(this.props.match.params.id);
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => {
            //using find method to match the correct film to the passed down route id
            let result = obj.find(person => person.id === `${this.props.match.params.id}`);
            // console.log(result);
            //creating an element to hold the MoreInfoCard component with props from the result object
            let newResult = <MoreInfoCard first={result.name} second={result.gender} third={result.age} fourth={result.eye_color} fifth={result.hair_color} />
            //setting the resulting more info card into state
            this.setState({ data: newResult });
        });
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}

export default PersonPage;