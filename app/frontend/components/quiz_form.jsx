import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuiz } from "../actions/quiz_actions";
import { useSelector } from 'react-redux'

export default () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  
  const currentUser = useSelector(state => state.session.id)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createQuiz({title, subject, user_id: currentUser}))
  }

  const selected = (selectedSubject) => {
    return subject === selectedSubject ? "selected" : ""
  }

  return (
    <div className="create-quiz-form-container">
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="quiz-title">1. Name this quiz
          <input placeholder="Quiz name"type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
        </label>
        <label htmlFor="quiz-subject">2. Choose a subject
          <div className="subject-container">
            <button className={selected("Mathematics")} onClick={()=>setSubject("Mathematics")} >Mathematics</button>
            <button className={selected("English")} onClick={()=> setSubject("Mathematics")} >English</button>
            <button onClick={()=>setSubject("Physics")} className={selected("Physics")}>Physics</button>
            <button onClick={()=>setSubject("Chemistry")} className={selected("Chemistry")}>Chemistry</button>
            <button onClick={()=>setSubject("Science")} className={selected("Science")}>Science</button>
            <button onClick={()=>setSubject("Computers")} className={selected("Computers")}>Computers</button>
            <button onClick={()=>setSubject("Geography")} className={selected("Geography")}>Geography</button>
            <button onClick={()=>setSubject("World Languages")} className={selected("World Languages")}>World Languages</button>
            <button onClick={()=>setSubject("History")} className={selected("History")}>History</button>
            <button onClick={()=>setSubject("Social Studies")} className={selected("Social Studies")}>Social Studies</button>
            <button onClick={()=>setSubject("Physical Ed")} className={selected("Physical Ed")}>Physical Ed</button>
            <button onClick={()=>setSubject("Arts")} className={selected("Arts")}>Arts</button>
            <button onClick={()=>setSubject("Fun")} className={selected("Fun")}>Fun</button>
            <button onClick={()=>setSubject("Professional Development")} className={selected("Professional Development")}>Professional Development</button>
            <button onClick={()=>setSubject("Arcitecture")} className={selected("Arcitecture")}>Arcitecture</button>
            <button onClick={()=>setSubject("Business Design")} className={selected("Business Design")}>Business Design</button>
            <button onClick={()=>setSubject("Design")} className={selected("Design")}>Design</button>
            <button onClick={()=>setSubject("Education")} className={selected("Education")}>Education</button>
            <button onClick={()=>setSubject("Industrial Technology")} className={selected("Industrial Technology")}>Industrial Technology</button>
            <button onClick={()=>setSubject("Journalism")} className={selected("Journalism")}>Journalism</button>
            <button onClick={()=>setSubject("Life Skills")} className={selected("Life Skills")}>Life Skills</button>
            <button onClick={()=>setSubject("Moral Science")} className={selected("Moral Science")}>Moral Science</button>
            <button onClick={()=>setSubject("Performing Arts")} className={selected("Performing Arts")}>Performing Arts</button>
            <button onClick={()=>setSubject("Philosophy")} className={selected("Philosophy")}>Philosophy</button>
            <button onClick={()=>setSubject("Religious Studies")} className={selected("Religious Studies")}>Religious Studies</button>
            <button onClick={()=>setSubject("Special Education")} className={selected("Special Education")}>Special Education</button>
            <button onClick={()=>setSubject("Specialty")} className={selected("Specialty")}>Specialty</button>
            <button onClick={()=>setSubject("Other")} className={selected("Other")}>Other</button>
          </div>
        </label>
      </form>
    </div>
  )
}