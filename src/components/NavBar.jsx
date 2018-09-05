import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link to='/' className="navbar-brand" >Ghibli</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link" >Home <span className="sr-only">(current)</span></Link>
                    <Link to="/films" className="nav-item nav-link" >View Films</Link>
                    <Link to="/people" className="nav-item nav-link" >View People</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;