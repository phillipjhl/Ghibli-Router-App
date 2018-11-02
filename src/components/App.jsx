import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './Films';
import People from './People';
import FilmPage from './FilmPage';
import PersonPage from './PersonPage';
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
                    <Route exact path='/people' component={People} />
                    <Route path='/people/:id' component={PersonPage} />
                </Switch>
            </Fragment>
        </Router>
        );
    }
}

export default App;