import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login from "../../pages/Login";
export default () => {
    return (
      <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/Login"]}>
                        <Login />
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
          <Route exact path={["/", "/Login"]}>
            <Login />
          </Route>                   
        </Switch>
      </div>
    </Router>
  );
}