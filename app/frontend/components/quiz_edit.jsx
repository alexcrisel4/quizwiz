import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {updateQuiz} from "../actions/quiz_actions";
import {createQuestion, getQuestions} from "../actions/question_actions"
import {useDispatch} from "react-redux";
import QuestionForm from "./question_form";



export default () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([])
  const location = useLocation()
  const quizID = location.pathname.split("/")[3]

  const [openForm, setOpenForm] = useState(false);
 
  dispatch(getQuestions(quizID)).then(data=>setQuestions(data.questions))
  
  const displayQuestions = () =>{
    questions.forEach((question, idx) => {
      <div className="question-container">
        <div classname="question-number">Question {idx + 1}</div>
        <div className="question-body">{question.body}</div>
      </div>
     
    })
  }

  const displayForm = () => {
   setOpenForm(true)

  }

  const closeForm = () => {
    setOpenForm(false)
  }

  return ( 
   
    <div className="quiz-container">
      <button onClick={()=>displayForm()}>New Question</button>
        {displayQuestions()}
      {openForm ? <QuestionForm closeForm={closeForm} /> : ""}
        
    </div>
    
  )
}