import {RECEIVE_QUIZ} from '../actions/quiz_actions'


let newState
const quizReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_QUIZ:
      return Object.assign({}, state, {[action.quiz.id]: action.quiz})
    default:
      return state
  }
}

export default quizReducer;