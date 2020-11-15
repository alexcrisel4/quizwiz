import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const { quiz } = props;

  return (<Link className="quiz-index-item-container" to={"/admin/quiz/" + quiz.id}>
    <div className="header-container">
      <div className="image"></div>
      <div className="stats-container">
        <div>{quiz.questions.length}</div>
        <div>{quiz.timesTaken}</div>
      </div>
    </div>
    <div className="title">{quiz.title}</div>
  </Link>)
}
