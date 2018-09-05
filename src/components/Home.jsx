import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="img-fluuid d-block mx-auto"/>
                </div>
            </div>
        );
    }
}

export default Home;