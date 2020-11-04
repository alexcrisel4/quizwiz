import { RECEIVE_QUESTIONS, REMOVE_QUESTION } from "../actions/question_actions";

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions
    case REMOVE_QUESTION:
      let newState = Object.assign({}, state);
      delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default questionsReducer;