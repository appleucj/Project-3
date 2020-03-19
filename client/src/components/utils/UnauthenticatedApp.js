import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login from "../../pages/login";
import Home from "../../pages/home";

export default () => {
    return (
      <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/home"]}>
                        <Home />
                    </Route>                         
                </Switch>
            </div>
        </Router>
    </div>

    )
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>                   
        </Switch>
      </div>
    </Router>
  );
}