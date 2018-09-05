import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MoreInfoCard from './MoreInfoCard';

class FilmPage extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    componentWillMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            //using find method to match the correct film to the passed down route id
            let result = obj.find(film => film.id === `${this.props.match.params.id}`);
            //creating an element to hold the MoreInfoCard component with props from the result object
            let newResult = <MoreInfoCard first={result.title} second={result.description} third={result.director} fourth={result.producer} fifth={result.release_date} sixth={result.rt_score} />
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

export default FilmPage;