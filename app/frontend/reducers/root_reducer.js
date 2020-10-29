import {combineReducers} from "redux";
import session_reducer from './session_reducer';
import quizReducer from "./quiz_reducer"

const rootReducer = combineReducers({
  session: session_reducer,
  quiz: quizReducer
})

export default rootReducer 