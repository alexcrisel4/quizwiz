import React, { useState } from "react";

export default props => {
  const { updateAnswers, question, idx } = props;

  const [answer, setAnswer] = useState(0);

  const handleClick = answer => {
    setAnswer(answer);
    updateAnswers(idx, answer)
  }

  const isAnswer = choice => answer === choice ? " selected" : "";

  return <div className="question-container">
    <div className="question-number">Question {idx + 1}</div>
    <div className="question-body">{question.body}</div>
    <div className="divider">
      <div className="text">answer choices</div>
    </div>
    <div className="answers">
      <div className="side">
        <div className="choice"
          onClick={() => handleClick(1)}>
          <div className={"circle" + isAnswer(1)}></div>
          <div> {question.answer_one}</div>
        </div>
        <div className="choice"
          onClick={() => handleClick(2)}>
          <div className={"circle" + isAnswer(2)}></div>
          <div> {question.answer_two}</div>
        </div>
      </div>
      <div className="side">
        <div className="choice"
          onClick={() => handleClick(3)}>
          <div className={"circle" + isAnswer(3)}></div>
          <div> {question.answer_three}</div>
        </div>
        <div className="choice"
          onClick={() => handleClick(4)}>
          <div className={"circle" + isAnswer(4)}></div>
          <div> {question.answer_four}</div>
        </div>
      </div>
    </div>
  </div>
}
