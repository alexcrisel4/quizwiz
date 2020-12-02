import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../../actions/quiz_actions";
import { getQuestion, getQuizQuestions, getQuestions } from "../../../actions/question_actions";
import { useLocation } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.pathname.split("/")[3];
  // let quiz = useSelector(state=>state.quizzes[quizId])
  const [questions, setQuestions] = useState([]);
  

  const updateQuiz = () => {
    dispatch(getQuestions(quizId)).then( data => {
      setQuestions(Object.values(data.questions)) 
    })  
  }

  useEffect(() => {
    updateQuiz()
  }, [])

  const questionBox = () => {
    let questionArr = [];
    questions.forEach(question => {
      questionArr.push(
        <div className="question-container">
          <div className="question-number">Question</div>
          <div className="question-body">{question.body}</div>
          <div className="divider">
            <div className="text">answer choices</div>
          </div>
          <div className="answers">
            <div className="side">
              <div className="choice">
                <div className={"circle"}></div>
                <div> {question.answer_one}</div>
              </div>
              <div className="choice">
                <div className={"circle"}></div>
                <div> {question.answer_two}</div>
              </div>
            </div>
            <div className="side">
              <div className="choice">
                <div className={"circle"}></div>
                <div> {question.answer_three}</div>
              </div>
              <div className="choice">
                <div className={"circle"}></div>
                <div> {question.answer_four}</div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return questionArr;
  }
  
  return (
    <div>
      {questions[0] ? questionBox() : "Questions is blank"}
    </div>
  )



}

