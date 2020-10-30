

import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import quizReducer from "./quiz_reducer"

export default combineReducers({
  session: sessionReducer, 
  quizzes: quizReducer
})

