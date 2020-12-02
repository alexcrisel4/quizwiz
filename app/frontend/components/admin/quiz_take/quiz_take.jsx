import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../../actions/quiz_actions";
import { getQuestion, getQuizQuestions, getQuestions } from "../../../actions/question_actions";
import { useLocation } from "react-router-dom";
import QuizTakeQuestionItem from "./quiz_take_question_item";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.pathname.split("/")[3];

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const updateQuiz = () => {
    dispatch(getQuestions(quizId)).then( data => {
      setQuestions(Object.values(data.questions))
    })
  }

  useEffect(() => {
    updateQuiz()
  }, [])

  const updateAnswers = (questionIdx, answer) => {
    let copyAnswers = Array.from(answers);

    copyAnswers[questionIdx] = answer;

    setAnswers(copyAnswers);
  }

  const handleSubmit = () => {
    
  }

  const questionBox = () => {
    let questionArr = [];
    questions.forEach((question, idx) => {
      questionArr.push(
        <QuizTakeQuestionItem updateAnswers={updateAnswers} question={question} idx={idx} />
      )
    })
    return questionArr;
  }

  return (
    <div className="quiz-take-container">
      {questions[0] ? questionBox() : "Questions is blank"}
      <button type="button">Submit Answers</button>
    </div>
  )
}
