import React from "react";
import { useAuthContext } from "../context/authContext";

export default () => {
    const[_,dispatch] = useAuthContext();

    const login = () => {
        dispatch({
            type: "login"
        });
    }

    return (
        <div>
            <p>Hello</p>
            <button onClick={login}>Login</button>
        </div>
    )
}