import React from "react";
import { useAuthContext } from "../context/authContext";

export default () => {
    const [_,dispatch] = useAuthContext();

    const logout = () => {
        dispatch({
            type: "logout"
        });
    }

    return (
        <div>
            <p>Welcome to the PetCare.</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}