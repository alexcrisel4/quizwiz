import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createQuestion } from "../actions/question_actions";
import {useLocation, Link} from "react-router-dom"


export default props => {
  const {closeForm} = props
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [answerOne, setAnswerOne] = useState("")
  const [answerTwo, setAnswerTwo] = useState("")
  const [answerThree, setAnswerThree] = useState("")
  const [answerFour, setAnswerFour] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const location = useLocation()

  const quizID = location.pathname.split("/")[3]
 
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(correctAnswer)
    dispatch(createQuestion({
      body, 
      quiz_id: quizID, 
      answer_four: answerFour, 
      answer_one: answerOne, 
      answer_three: answerThree, 
      answer_two: answerTwo,
      correct_answer: correctAnswer
    })).then(() => closeForm())  
   
  }

  const answer = (num) => {
    setCorrectAnswer(num)
  }

  const selected = (correct) => {
    return correctAnswer === correct ? "selected" : ""
  }

  return (
    <div className="question-form-container">
      <form onSubmit={e => handleSubmit(e)}>
          <textarea className="question-input"placeholder="Write your question here" type="text" value={body} onChange={e => setBody(e.currentTarget.value)}/>
          <div className="answers-container">
            <div className="option">
              <button type="button" onClick={()=>answer(1)} className={selected(1)}></button>
              <input value={answerOne} onChange={e=>setAnswerOne(e.currentTarget.value)} placeholder ="Answer option 1" type="text"/>
            </div>
          <div className="option">
            <button type="button" onClick={() => answer(2)} className={selected(2)}></button>
            <input value={answerTwo} onChange={e => setAnswerTwo(e.currentTarget.value)} placeholder="Answer option 2" type="text" />
          </div>
          <div className="option">
            <button type="button" onClick={() => answer(3)} className={selected(3)}></button>
            <input value={answerThree} onChange={e => setAnswerThree(e.currentTarget.value)} placeholder="Answer option 3" type="text" />
          </div>
          <div className="option">
            <button type="button" onClick={() => answer(4)} className={selected(4)}></button>
            <input value={answerFour} onChange={e => setAnswerFour(e.currentTarget.value)} placeholder="Answer option 4" type="text" />
          </div>
          </div>
        <div className="cancel-save-container">
          <Link to={`/admin/quiz/${quizID}`}>Cancel</Link>
          <button type="submit" >Save</button>
        </div>
      </form>

    </div>
  )





}

