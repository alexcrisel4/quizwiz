import React from "react";
// import {AuthRoute, ProtectedRoute} from "../util/route_util.js";
import SessionForm from "../components/session_form";
import LandingHeader from "../components/landing_header";

const App = () => (
  <div>
    <LandingHeader/>
    <SessionForm/>
  </div>
);

export default App;
