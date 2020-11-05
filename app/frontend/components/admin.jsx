import React from "react";
import { Route } from "react-router-dom";
import Header from "./admin/header";
import Sidebar from "./sidebar";
import QuizForm from "./quiz_form";

export default () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Route path="/admin/quiz/new" component={QuizForm} />
    </div>
  )
}
