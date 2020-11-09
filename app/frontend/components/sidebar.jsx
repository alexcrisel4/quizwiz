import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../actions/user_actions";
import { logout } from "../actions/session_actions";

export default () => {
  const [currentUser, setCurrentUser] = useState("");

  const dispatch = useDispatch();
  const currentUserID = useSelector(state => state.session.id);

  useEffect(() => {
    if(!currentUser) {
      dispatch(getUser(currentUserID)).then(data => {
        setCurrentUser(data.user)
      });
    }
  })

  return (
    <div className="sidebar-container">
      <div className="user-info">
        <div className="profile-picture"></div>
        <div className="user-name">{currentUser ? currentUser.name : ""}</div>
      </div>
      <Link className="create-button" to="/admin/quiz/new">Create Quiz</Link>
      <div className="tab-container">
        <Link className="tab" to="/admin">Explore</Link>
      </div>
      <button className="logout-btn" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}
