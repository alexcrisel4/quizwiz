import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {signup, login} from "../actions/session_actions";
import {useLocation} from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const formType = location.pathname.split("/")[1];

  const handleSubmit = e => {
    e.preventDefault();
    let user
    if(formType === "signup") {
      user = { email, name: firstName + " " + lastName, password }
      dispatch(signup(user))
    } else {
      user = { email, password}
      dispatch(login(user))
    }
  }

  return(
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Email
          <input placeholder="lizzobeemailing@gmail.com" type="text" value={email} onChange={e=>setEmail(e.currentTarget.value)}/>
        </label>
        {formType === "signup" ? <label htmlFor="first-name">Name
          <input placeholder="Lizzo" type="text" value={firstName} onChange={e=>setFirstName(e.currentTarget.value)}/>
        </label> : ""}
        {formType === "signup" ?
        <label htmlFor="last-name">
          <input type="text" value={lastName} onChange={e=>setLastName(e.currentTarget.value)}/>
        </label> : "" }
        <label htmlFor="password">Password
          <input type="password" name="" id="" value={password} onChange={e=>setPassword(e.currentTarget.value)}/>
        </label>
       <input type="submit" value={formType === "signup" ? "Sign Up" : "Login"}/>
      </form>
    </div>
  )
}
