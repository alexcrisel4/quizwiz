import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {getUser} from "../actions/user_actions";



export default ()=> {
  const dispatch = useDispatch();
// const currentUserID = useSelector(state => state.session.id);
// console.log(currentUserID);
// const currentUser = dispatch(getUser(currentUserID));
  let currentUser

  // dispatch(getUser(1)).then(data => console.log(data));
  return (
    <div>
      <div className="user-info">
        <div className="user-name"></div>
      </div>
      <Link to="/admin/quiz/new">Create Quiz</Link>
    </div>
  )
}