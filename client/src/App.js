import React from 'react';
//import logo from './logo.svg';
import AuthenticatedApp from './components/utils/AuthenticatedApp';
import UnathenticatedApp from './components/utils/UnauthenticatedApp';
import { useAuthContext } from './components/utils/UserContext';


function App() {
  const [state, _] = useAuthContext();

  return state.loggedIn ? (
    <AuthenticatedApp />
  ):(
    <UnathenticatedApp />
  )  
}   

export default App;
