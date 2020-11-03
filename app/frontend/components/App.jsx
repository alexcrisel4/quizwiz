import React from "react";
import {Route} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/route_util.js";
import SessionForm from "../components/session_form";
import LandingHeader from "./landing_header";
import admin from './admin'
// import Landing from "../components/landing";

const App = () => (
  <div>
    <LandingHeader/>
    <AuthRoute exact path ='/' component={SessionForm} /> {/* replace with Landing later */}
    <AuthRoute path='/login' component={SessionForm} />
    <AuthRoute path='/signup' component={SessionForm} />
    <Route path = '/admin' component={admin} />

  </div>
);

export default App;
