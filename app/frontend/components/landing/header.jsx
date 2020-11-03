import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const { formType } = props;

  return(
    <div className="landing-header-container">
      <Link to="/" className="logo"></Link>
      <div className="btn-container">
        {formType !== "login" ? <Link to="/login" className="btn login">Log In</Link> : ""}
        {formType !== "signup" ? <Link to="/signup" className="btn signup">Sign Up</Link> : ""}
      </div>
    </div>
  )
}
