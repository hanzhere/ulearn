import './App.css';
import React from "react";
import Home from "./Pages/Home/Home";
import Zoom from "./Pages/Zoom/Zoom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>

            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        Ulearn
                    </a>

                    <div className="collapse navbar-collapse" style={{ "justify-content": "flex-end" }}
                        id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/#getstarted">Youtube Video</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Zoom">Zoom Transcript</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/zoom'>
                        <Zoom />
                    </Route>
                </Switch>
            </Router>
            <div className="footer">
                <div className="container">Ulearn</div>
            </div>
        </div>
    );
};

export default App;
