import React from "react";
import { Link, useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[1];

  return (
    <div className="landing-header-container">
      <div className="logo"></div>
      <div className="btn-container">
        {formType !== "login" ? <Link to="/login" className="btn login">Log In</Link> : ""}
        {formType !== "signup" ? <Link to="/signup" className="btn signup">Sign Up</Link> : ""}
      </div>
    </div>
  )
}
