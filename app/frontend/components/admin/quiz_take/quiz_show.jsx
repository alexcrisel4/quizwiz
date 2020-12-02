import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQuiz} from "../../../actions/quiz_actions";
import {getQuizQuestions} from "../../../actions/question_actions";
import {useLocation} from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.pathname.split("/")[3];
  let quiz;
  const [questions, setQuestions] = useState([]);
  let questionArr = [];
  // let questionList = [];
  // let questionIds = [];

  const updateQuiz = () => {
    // questionIds.forEach(id => {
    //   dispatch(getQuestion(parseInt(id))).then(data => {
    //     questionList.push(data.question)
    //     setQuestions(questionList)
        // questionArr.push(questionBox(data.question))
        // debugger;
    //   })
    // })
    

  }


  useEffect(()=>{
    // dispatch(getQuiz(quizId)).then(data=>{
    //   quiz = data.quiz
    //   questionIds = Object.keys(quiz.questions)
      updateQuiz()
    // })
  },[])

 
  const questionBox = () => {
      questions.forEach(question=>{
        questionArr.push(
          <div className="question-container">
            <div className="question-number">Question</div>
            <div className="question-body">{question.body}</div>
            <div className="divider">
              <div className="text">answer choices</div>
            </div>
            <div className="answers">
              <div className="side">
                <div className="choice">
                  <div className={"circle"}></div>
                  <div> {question.answer_one}</div>
                </div>
                <div className="choice">
                  <div className={"circle"}></div>
                  <div> {question.answer_two}</div>
                </div>
              </div>
              <div className="side">
                <div className="choice">
                  <div className={"circle"}></div>
                  <div> {question.answer_three}</div>
                </div>
                <div className="choice">
                  <div className={"circle"}></div>
                  <div> {question.answer_four}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })
        
        
  }
  

 

  return (
    <div className="quiz-take-container">
      <div>{questionArr.length ? questionArr : "No questions"}</div>
    </div>
  )



}

