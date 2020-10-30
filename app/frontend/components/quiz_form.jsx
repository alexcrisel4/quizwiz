import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuiz } from "../actions/quiz_actions";
import { useSelector } from 'react-redux'

export default () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  
  const currentUser = useSelector(state => state.user.id)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createQuiz({title, subject, currentUser}))
  }

  const buttonSwitch = () => {
    
  }

  return (
    <div className="create-quiz-form-container">
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="quiz-title">1. Name this quiz
          <input placeholder="Quiz name"type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
        </label>
        <label htmlFor="quiz-subject">2. Choose a subject
          <div className="subject-container">
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Mathematics" className="subject">Mathematics</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="English" className="subject">English</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Physics" className="subject">Physics</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Chemistry" className="subject">Chemistry</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Science" className="subject">Science</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Computers" className="subject">Computers</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Geography" className="subject">Geography</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="World Languages" className="subject">World Languages</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="History" className="subject">History</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Social Studies" className="subject">Social Studies</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Physical Ed" className="subject">Physical Ed</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Arts" className="subject">Arts</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Fun" className="subject">Fun</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Professional Development" className="subject">Professional Development</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Arcitecture" className="subject">Arcitecture</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Business Design" className="subject">Business Design</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Design" className="subject">Design</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Education" className="subject">Education</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Industrial Technology" className="subject">Industrial Technology</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Journalism" className="subject">Journalism</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Life Skills" className="subject">Life Skills</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Moral Science" className="subject">Moral Science</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Performing Arts" className="subject">Performing Arts</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Philosophy" className="subject">Philosophy</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Religious Studies" className="subject">Religious Studies</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Special Education" className="subject">Special Education</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Specialty" className="subject">Specialty</button>
            <button onClick={e=>e.setSubject(e.currentTarget.value)} value="Other" className="subject">Other</button>
          </div>
        </label>
      </form>
    </div>
  )
}