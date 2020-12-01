import React  from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getQuiz} from "../../actions/quiz_actions";

export default props => {
  const { quiz } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const goToQuiz = () => {
    history.push("/admin/quiz/" + quiz.id)
  };

  return (<div className="quiz-index-item-container" onClick={() => goToQuiz()}>
    <div className="header-container">
      <div className="image"></div>
      <div className="stats-container">
        <div>{quiz.num_questions} Qs</div>
        {/* <div>{quiz.times_taken}</div> */}
      </div>
    </div>
    <div className="title">{quiz.title}</div>
  </div>)
}
