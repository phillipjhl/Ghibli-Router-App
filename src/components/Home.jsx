import React, { Component, Fragment } from 'react';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="img-fluuid d-block mx-auto" />
                    </div>
                </div>

                <div className="container">
                    <h1 className="col-sm-10 mx-auto text-primary">Welcome to the Studio Ghibli Wiki!</h1>
                </div>
            </Fragment>
        );
    }
}

export default Home;