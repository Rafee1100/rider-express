import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container } from 'react-bootstrap';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import NotFound from './NotFound/NotFound';
import Contact from './Component/Contact/Contact';
import SignUp from './Component/SignUP/SignUp';
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});


  return (
   <UserContext.Provider className="container" value={[loggedInUser,setLoggedInUser]}>
     <Router>
       <Header/>
       <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/destination">
          <Destination/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>

       </Switch>
     </Router>
   </UserContext.Provider>
  );
}

export default App;
