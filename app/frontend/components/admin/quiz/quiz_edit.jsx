import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {updateQuiz} from "../../../actions/quiz_actions";
import {createQuestion, getQuestions} from "../../../actions/question_actions"
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

      const correctAnswer = (choice) => { 
       return question.correct_answer === choice ? " correct" : ""
      }


      questionContainers.push(
      <div className="question-container">
        <div className="question-number">Question {idx + 1}</div>
        <div className="question-body">{question.body}</div>
        <div className="divider">
            <div className="text">answer choices</div>
        </div>
        <div className="answers">
          <div className="side">
            <div className="choice">
                <div className={"circle" + correctAnswer(1)}></div>
                <div> {question.answer_one}</div>
            </div>
              <div className="choice">
                <div className={"circle" + correctAnswer(2)}></div>
                <div> {question.answer_two}</div>
              </div>
              </div>
            <div className="side">
                <div className="choice">
                <div className={"circle" + correctAnswer(3)}></div>
                  <div> {question.answer_three}</div>
                </div>
                <div className="choice">
                <div className={"circle" + correctAnswer(4)}></div>
                  <div> {question.answer_four}</div>
                </div>
          </div>
        </div>
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