import React from "react";
import {Link} from "react-router-dom";




export default ()=> {
  return (
    <div>
      <div className="user-info"></div>
      <Link to="/admin/quiz/new">Create Quiz</Link>
    </div>
  )
}