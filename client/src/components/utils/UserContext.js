import React, { createContext, useState, useContext, useReducer } from "react";

const UserContext = createContext();
const { Provider } = UserContext

//the reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {...state, loggedIn: true }
        case "logout":
            return { ...state, loggedIn: false }
        default:
            return state

    }
}

//Custom provider
const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        loggedIn: false
    })

    return (
        <Provider value={[state, dispatch]} {...props} />
    )    
}

// create a provider to hold the state of your context
const UserProvider = (props) => {
    // setting up the state (preferably 1 object)
    const [user, setUser] = useState({
        name: "",
        city: "",
        zip: "",
        user: "",
        password: "",
        phone: "",
        image: "",
        status: ""
    });

    // return the contexct provider with the array returned from useState
    return (
        <Provider value={[user, setUser]} {...props} />
    )
   
}

// create a hook to use the context
const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };