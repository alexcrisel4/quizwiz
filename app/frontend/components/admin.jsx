import React from "react";
import { Route } from "react-router-dom";
import Header from "./admin/header";
import Sidebar from "./sidebar";
import QuizForm from "./quiz_form";
import QuizEdit from "./quiz_edit";
import QuizIndex from "./quiz_index";

export default () => {
  return (
    <div className="admin-container">
      <div className="top-container">
        <Header />
      </div>
      <div className="bottom-container">
        <Sidebar />
        <div className="content-container">
          <Route path="/admin" component={QuizIndex}/>
          <Route path="/admin/quiz/new" component={QuizForm} />
          <Route path="/admin/quiz/:id/edit" component={QuizEdit}/>
        </div>
      </div>
    </div>
  )
}
