import React from "react";
import { useAuthContext } from "./UserContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Dashboard from "../../pages/Dashboard";


export default () => {
    const [_,dispatch] = useAuthContext();

    const logout = () => {
        dispatch({
            type: "logout"
        });
    }
    return (
        
        <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/dashboard"]}>
                         <Dashboard /> 
                        
                    </Route>                   
                </Switch>
            </div>
        </Router>
            {/* <p>Welcome to the PetCare.</p>
            <button onClick={logout}>Logout</button> */}
        </div>
    )
}