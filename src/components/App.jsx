import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {

    render() {
        return (
        <Router>
            <Fragment>
                <h1 className="text-primary">Hello Word!</h1>
            </Fragment>
        </Router>
        );
    }
}

export default App;