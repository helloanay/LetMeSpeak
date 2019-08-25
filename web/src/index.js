

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";


import LandingPage from "views/examples/LandingPage.jsx";


ReactDOM.render(
  <BrowserRouter>
   
      <Route path="/landing-page" render={props => <LandingPage {...props} />} />
      
      
  
 
  </BrowserRouter>,
  document.getElementById("root")
);
