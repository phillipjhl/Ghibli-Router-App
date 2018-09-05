import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Films from './Films';
import FilmPage from './FilmPage';
import Home from './Home';
import NavBar from './NavBar';

class App extends Component {

    render() {
        return (
        <Router>
            <Fragment>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/films' component={Films} />
                    <Route path='/films/:id' component={FilmPage} />
                </Switch>
            </Fragment>
        </Router>
        );
    }
}

export default App;