import React from 'react';
//import logo from './logo.svg';
import AuthenticatedApp from '../utils/AuthenticatedApp';
import UnathenticatedApp from '../utils/UnauthenticatedApp';
import { useUserContext } from '../utils/userContext';


function App() {
  const [state, _] = useUserContext();

  return state.loggedIn ? (
    <AuthenticatedApp />
  ):(
    <UnathenticatedApp />
  )  
}   

export default App;
