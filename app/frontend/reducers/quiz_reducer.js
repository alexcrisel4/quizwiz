
import {RECEIVE_QUIZ, RECEIVE_QUIZZES, REMOVE_QUIZ} from '../actions/quiz_actions'



const quizReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_QUIZ:
      return Object.assign({}, state, {[action.quiz.id]: action.quiz})
    case RECEIVE_QUIZZES:
      return action.quizzes;
    case REMOVE_QUIZ:
      let newState = Object.assign({}, state);
      delete newState[action.quiz.id]
      return newState
    default:
      return state
  }
}

export default quizReducer;
