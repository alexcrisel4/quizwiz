import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {updateQuiz} from "../actions/quiz_actions";
import {createQuestion, getQuestions} from "../actions/question_actions"
import {useDispatch, useSelector} from "react-redux";
import QuestionForm from "./question_form";



export default () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState(useSelector(state=>Object.values(state.questions)));
  const location = useLocation()
  const quizID = location.pathname.split("/")[3]
  const [openForm, setOpenForm] = useState(false);
 
  useEffect(()=> {
    if(!questions.length && !openForm) {
      dispatch(getQuestions(quizID))
      .then(data => {
        setQuestions(Object.values(data.questions))
        if(!questions.length) {
          displayForm()
        }
      })
      
    }
  })

  useEffect(()=>{
    dispatch(getQuestions(quizID))
      .then(data => setQuestions(Object.values(data.questions)))
  },[])

  const displayQuestions = () =>{
    const questionContainers = []
    questions.forEach((question, idx) => {
      questionContainers.push(
      <div className="question-container">
        <div classname="question-number">Question {idx + 1}</div>
        <div className="question-body">{question.body}</div>
      </div>)
     
    })
    return questionContainers
  }

  const displayForm = () => {
   setOpenForm(true)

  }

  const closeForm = () => {
    
    dispatch(getQuestions(quizID))
      .then(data => {
        setQuestions(Object.values(data.questions))
        setOpenForm(false)
      })
  }

  return ( 
   
    <div className="quiz-container">
      <button onClick={()=>displayForm()}>New Question</button>
        {displayQuestions()}
      {openForm ? <QuestionForm closeForm={closeForm} /> : ""}
        
    </div>
    
  )
}