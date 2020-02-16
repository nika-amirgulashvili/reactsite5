import React from 'react';

import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";

  import './Navbar.scss'
function Navbar() {
    return (
    
          <nav className="navbar1">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
             
            </ul>
          </nav>
  
         
          
    );
  }
  
  export default Navbar
  