import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from './header';
import SessionForm from './session_form';

export default () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[1];

  return(
    <div className="landing-container">
      <Header formType={formType}/>
      {formType === "" ? <div className="welcome-container">
        <div className="title">Create, Take, and Grade Quizzes</div>
        <div className="description">Free tool to teach and learn through quizzing</div>
        <Link to="/signup" className="signup">Get Started</Link>
        <div className="login">
          Already using Quizwiz?
          <Link to="/login">Log in</Link>
        </div>
      </div> : ""}
      {formType === "signup" || formType === "login" ? <SessionForm formType={formType}/> : ""}
    </div>
  )
}
