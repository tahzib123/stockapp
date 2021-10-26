import React from 'react';
import Home from '../pages/Home';
import StockInfo from '../pages/StockInfo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const routes = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/stockapp">
                <Home />
            </Route>
            <Route path="/stockapp/:ticker">
                <StockInfo />
            </Route>
            </Switch>
        </Router>
    )
}

export default routes
