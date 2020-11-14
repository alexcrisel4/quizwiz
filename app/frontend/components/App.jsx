import React from "react";
import {Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util.js";
import Landing from "./landing/landing";
import Admin from "./admin"
const App = () => (
  <div>
    <AuthRoute exact path ='/' component={Landing} />
    <AuthRoute path='/login' component={Landing} />
    <AuthRoute path='/signup' component={Landing} />
    <ProtectedRoute path='/admin' component={Admin} />
  </div>
);

export default App;
