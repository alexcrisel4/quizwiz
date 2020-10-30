import React from "react";
import {AuthRoute, ProtectedRoute} from "../util/route_util.js";
import SessionForm from "../components/session_form";

import Landing from "../components/landing";

const App = () => (
  <div>
    <AuthRoute exact path ='/' component={SessionForm} /> {/* replace with Landing later */}
    <AuthRoute path='/login' component={SessionForm} />
    <AuthRoute path='/signup' component={SessionForm} />

  </div>
);

export default App;
