import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import films from './Films';

class App extends Component {

    render() {
        return (
        <Router>
            <Fragment>
                <Link to='/' className="text-dark" >Go Home</Link>
                <Link to='/films' className="text-dark" >View Films</Link>
                <Link to='/people' className="text-dark" >View People</Link>
                <Switch>
                    <Route exact path='/films' component={films} />
                </Switch>
            </Fragment>
        </Router>
        );
    }
}

export default App;