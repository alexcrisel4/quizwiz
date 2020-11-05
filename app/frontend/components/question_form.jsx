import React from "react";
import { useDispatch } from "react-redux";
import { createQuestion } from "../actions/question_actions";
import {useLocation} from "react-router-dom"


export default () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const location = useLocation()
  const quizID = location.pathname.split("/")[2]


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createQuestion({ body, quiz_id: quizID }))
  }



  return (
    <div className="question-form-contianer">
      <form onSubmit={e => handleSubmit(e)}>
   
          <input placeholder="Write your question here" type="text" value={body} onChange={e => setBody(e.currentTarget.value)}/>
        <div className="cancel-save-container">
          <Link to="/admin/quiz/`${quizID}">Cancel</Link>
          <button type="submit" >Next</button>
        </div>
      </form>

    </div>
  )





}

