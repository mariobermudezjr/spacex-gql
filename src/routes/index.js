import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import NavBar from './../components/NavBar';
import Home from './../pages/Home';
import PastLaunches from './../pages/PastLaunches';
import RocketPage from '../pages/RocketPage';

const Routing = () => (
    <Router>
        <div className="general">
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/launches" component={PastLaunches} />
                <Route exact path="/rocket/:id" component={RocketPage} />
            </Switch>
        </div>
    </Router>
);

export default Routing;
