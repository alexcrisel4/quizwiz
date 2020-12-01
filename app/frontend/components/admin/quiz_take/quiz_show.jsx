import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQuiz} from "../../../actions/quiz_actions";
import {getQuestion} from "../../../actions/question_actions";
import {useLocation} from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.pathname.split("/")[3];
  let quiz;
  const [questions, setQuestions] = useState([]);

  let questionList = [];
  let questionIds = [];

  const updateQuiz = () => {
    questionIds.forEach(id => {
      dispatch(getQuestion(parseInt(id))).then(data => {
        questionList.push(data.question)
        setQuestions(questionList)
      })
    }) 
  }


  useEffect(()=>{
    dispatch(getQuiz(quizId)).then(data=>{
      quiz = data.quiz
      questionIds = Object.keys(quiz.questions)
      updateQuiz()
    })
  },[])
  


  
  return (
    <div>
      {questions[0] ? questions[0]["answer_one"]: "Questions is blank"}
      {questionList[0] ? questionList[0]["answer_one"] : "Question list is blank"}
      
    </div>
  )



}

