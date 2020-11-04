import React, { useState } from "react";
import { useSelector } from "react-redux";
import QuizIndexItem from "./quiz_index_item";

export default () => {
  const quizzes = Object.values(useSelector(state => state.entities.quizzes));

  const [query, setQuery] = useState("");

  const renderQuizzes = () => {
    let quizList = [];
    let search = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    search = new RegExp(search, "i");

    quizzes.forEach(quiz => {
      if (search.test(quiz.title)) quizList.push(
        <QuizIndexItem
          key={`quiz-index-item-${quiz.id}`}
          quiz={quiz} />
      );
    })

    return quizList;
  }

  return (<div className="quiz-index-container">
    <div className="header-container">
      <div className="title">What will you learn today?</div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search for quizzes on any topic"
          value={query}
          onChange={e => setQuery(e.currentTarget.value)} />
      </div>
    </div>
    <div className="quiz-index">
      {renderQuizzes()}
    </div>
  </div>)
}
