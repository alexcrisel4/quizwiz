import {RECEIVE_QUIZ} from '../actions/quiz_actions'

const _nullQuiz = { id: null }
let newState
const quizReducer = (state = _nullQuiz, action) => {

  switch (action.type) {
    case RECEIVE_QUIZ:
      newState = Object.assign({}, state, {[action.quiz.id]: action.quiz})
    default:
      return state
  }
}

export default quizReducer;