import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import home from "../client/src/pages/home"
import login from "../client/src/pages/login"
import dashboard from "../client/src/pages/dashboard"
    
() => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route path="/login" component={login} />
                    <Route path="/dashboard" component={dashboard} />
                </Switch>
            </Router>

        </div>
    )
}