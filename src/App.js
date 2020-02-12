import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Navbar from './COMPONENTS/Navbar/Navbar'
import Home from './COMPONENTS/Home/Home'
import Services from './COMPONENTS/Services/Services'


function App() {
  return (
    <Router>

      <Navbar/>

   


    <Switch>
   <Route path="/services">
      <Services />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  
  </Switch>

      </Router>
  );
}

export default App;
