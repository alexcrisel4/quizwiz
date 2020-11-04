import { RECEIVE_QUIZ, RECEIVE_QUIZZES } from '../actions/quiz_actions'


let newState
const quizReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_QUIZ:
      return Object.assign({}, state, {[action.quiz.id]: action.quiz})
    case RECEIVE_QUIZZES:
      return action.quizzes;
    default:
      return state
  }
}

export default quizReducer;
