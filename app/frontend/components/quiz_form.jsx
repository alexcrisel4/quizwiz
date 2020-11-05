import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuiz } from "../actions/quiz_actions";
import { useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

export default () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const history = useHistory();
  const currentUser = useSelector(state => state.session.id)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createQuiz({title, subject, user_id: currentUser}))
    
    .then(data=> {
      
      history.push(`/admin/quiz/${data.quiz.id}/edit`)})
  }

  const selected = (selectedSubject) => {
    return subject === selectedSubject ? "selected" : ""
  }

  return (
    <div className="quiz-form-container">
      <form className="quiz-form" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="quiz-title">1. Name this quiz
          <input placeholder="Quiz name"type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
        </label>
        <label htmlFor="quiz-subject">2. Choose a subject
          <div className="subject-container">
            <button type="button" className={selected("Mathematics")} onClick={()=>setSubject("Mathematics")} >Mathematics</button>
            <button type="button" className={selected("English")} onClick={()=> setSubject("Mathematics")} >English</button>
            <button type="button" onClick={()=>setSubject("Physics")} className={selected("Physics")}>Physics</button>
            <button type="button" onClick={()=>setSubject("Chemistry")} className={selected("Chemistry")}>Chemistry</button>
            <button type="button" onClick={()=>setSubject("Science")} className={selected("Science")}>Science</button>
            <button type="button" onClick={()=>setSubject("Computers")} className={selected("Computers")}>Computers</button>
            <button type="button" onClick={()=>setSubject("Geography")} className={selected("Geography")}>Geography</button>
            <button type="button" onClick={()=>setSubject("World Languages")} className={selected("World Languages")}>World Languages</button>
            <button type="button" onClick={()=>setSubject("History")} className={selected("History")}>History</button>
            <button type="button" onClick={()=>setSubject("Social Studies")} className={selected("Social Studies")}>Social Studies</button>
            <button type="button" onClick={()=>setSubject("Physical Ed")} className={selected("Physical Ed")}>Physical Ed</button>
            <button type="button" onClick={()=>setSubject("Arts")} className={selected("Arts")}>Arts</button>
            <button type="button" onClick={()=>setSubject("Fun")} className={selected("Fun")}>Fun</button>
            <button type="button" onClick={()=>setSubject("Professional Development")} className={selected("Professional Development")}>Professional Development</button>
            <button type="button" onClick={()=>setSubject("Arcitecture")} className={selected("Arcitecture")}>Arcitecture</button>
            <button type="button" onClick={()=>setSubject("Business Design")} className={selected("Business Design")}>Business Design</button>
            <button type="button" onClick={()=>setSubject("Design")} className={selected("Design")}>Design</button>
            <button type="button" onClick={()=>setSubject("Education")} className={selected("Education")}>Education</button>
            <button type="button" onClick={()=>setSubject("Industrial Technology")} className={selected("Industrial Technology")}>Industrial Technology</button>
            <button type="button" onClick={()=>setSubject("Journalism")} className={selected("Journalism")}>Journalism</button>
            <button type="button" onClick={()=>setSubject("Life Skills")} className={selected("Life Skills")}>Life Skills</button>
            <button type="button" onClick={()=>setSubject("Moral Science")} className={selected("Moral Science")}>Moral Science</button>
            <button type="button" onClick={()=>setSubject("Performing Arts")} className={selected("Performing Arts")}>Performing Arts</button>
            <button type="button" onClick={()=>setSubject("Philosophy")} className={selected("Philosophy")}>Philosophy</button>
            <button type="button" onClick={()=>setSubject("Religious Studies")} className={selected("Religious Studies")}>Religious Studies</button>
            <button type="button" onClick={()=>setSubject("Special Education")} className={selected("Special Education")}>Special Education</button>
            <button type="button" onClick={()=>setSubject("Specialty")} className={selected("Specialty")}>Specialty</button>
            <button type="button" onClick={()=>setSubject("Other")} className={selected("Other")}>Other</button>
          </div>
        </label>
        <div className="finish-buttons">
        <Link to="/admin">Cancel</Link>
        <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}