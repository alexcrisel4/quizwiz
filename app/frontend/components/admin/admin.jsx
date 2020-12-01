import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import QuizForm from "./quiz/quiz_form";
import QuizEdit from "./quiz/quiz_edit";
import QuizIndex from "./quiz_index";
import QuizShow from "./quiz_take/quiz_show"
import QuizTake from "./quiz_take/quiz_take"
export default () => {
  return (
    <div className="admin-container">
      <div className="top-container">
        <Header />
      </div>
      <div className="bottom-container">
        <Sidebar />
        <div className="content-container">
          <Route exact path="/admin" component={QuizIndex} />
          <Route path="/admin/quiz/new" component={QuizForm} />
          <Route path="/admin/quiz/:id/edit" component={QuizEdit} />
          <Route exact path="/admin/quiz/:id" component={QuizShow} />
        </div>
      </div>
    </div>
  )
}
