import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup, login } from "../../actions/session_actions";

export default props => {
  const { formType } = props;
  const demoUser = { email: "lizzobeemailing@gmail.com", password: "hunter" };

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const processForm = user => (
    formType === "signup" ? dispatch(signup(user)) : dispatch(login(user))
  );

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, name: firstName + " " + lastName, password }
    processForm(user);
  };

  return (
    <div className="session-form-container">
      <form className={formType} onSubmit={e => handleSubmit(e)}>
        <div className="title">Your account details</div>
        <label>Email
          <input
            type="text"
            placeholder="lizzobeemailing@gmail.com"
            value={ email }
            onChange={e => setEmail(e.currentTarget.value)} />
        </label>
        {formType === "signup" ? <label>First name
          <input
            type="text"
            placeholder="Lizzo"
            value={ firstName }
            onChange={e => setFirstName(e.currentTarget.value)} />
        </label> : ""}
        {formType === "signup" ?
        <label>Last name
          <input
            type="text"
            placeholder="Bee"
            value={ lastName }
            onChange={e=>setLastName(e.currentTarget.value)} />
        </label> : ""}
        <label>Password
          <input placeholder="******" type="password" name="" id="" value={password} onChange={e=>setPassword(e.currentTarget.value)} />
        </label>
       <input
         type="submit"
         value={formType === "signup" ? "Sign Up" : "Login"} />
       <input
         type="button"
         value="Demo Login"
         onClick={() => dispatch(login(demoUser))} />
      </form>
    </div>
  )
};
