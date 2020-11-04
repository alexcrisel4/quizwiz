import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {getUser} from "../actions/user_actions";



export default ()=> {
  const [currentUser, setCurrentUser] = useState("");

  const dispatch = useDispatch();
  const currentUserID = useSelector(state => state.session.id);

  useEffect(()=> {
    if(!currentUser) {
      dispatch(getUser(currentUserID)).then(data => {
        setCurrentUser(data.user)
      });
    }
  })

  
// const currentUser = dispatch(getUser(currentUserID));

  
  console.log(currentUserID)
  
  
  return (
    <div>
      <div className="user-info">
        <div className="user-name">{currentUser ? currentUser.name : ""}</div>
      </div>
      <Link to="/admin/quiz/new">Create Quiz</Link>
      <Link to="/admin"><Button>Explore</Button></Link>
    </div>
  )
}