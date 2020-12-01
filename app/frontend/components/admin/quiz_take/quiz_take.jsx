import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../../actions/quiz_actions";
import { getQuestion, getQuestions } from "../../../actions/question_actions";
import { useLocation } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.pathname.split("/")[3];
  // let quiz = useSelector(state=>state.quizzes[quizId])
  const [questions, setQuestions] = useState([]);

  let questionList = [];
  let questionIds = [];

  const updateQuiz = () => {
    // if (!questionList.length) {
      // questionIds.forEach(id => {
      //   dispatch(getQuestion(parseInt(id))).then(data => (
      //     questionList.push(data.question))
      //   )
        dispatch(getQuestions(quizId)).then
          (data=>{
            setQuestions(Object.values(data.questions))
            debugger
          })
      // }

      // setQuestions(questionList)

      // console.log("questionList", questionList[0])
      console.log(questions)
      
    // }
  }

  useEffect(() => {
    // questionIds = Object.keys(quiz.questions)
    updateQuiz()
  }, [])

  useEffect(() => {
    if (!questions.length) {
      updateQuiz()
      // debugger;
    }
  })


 




  return (
    <div>
      {questions[0] ? questions[0]["answer_one"]: "Questions is blank"}
      {questionList[0] ? questionList[0]["answer_one"] : "Question list is blank"}

    </div>
  )



}

