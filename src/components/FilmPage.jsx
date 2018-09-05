import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card';

class FilmPage extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount() {
        console.log(this.props.match);
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            console.log(obj);
            let result = obj.find(film => film.id === `${this.props.match.params.id}`);
            this.setState({ data: result });
            console.log(this.state.data)
        });
    }



    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default FilmPage;