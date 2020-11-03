import React from "react";
import Sidebar from "./sidebar"
import {Route} from "react-router-dom";
import QuizForm from "./quiz_form"

export default () => {
  return (
    <div>
      <Sidebar/>
      <Route path="/admin/quiz/new" component={QuizForm}/>
    </div>
  )
}