
import {RECEIVE_USER, LOGOUT_USER} from "../actions/session_actions";

const _nullUser = {id: null}
const sessionReducer = (state = _nullUser, action ) => {

  switch (action.type) {
    case RECEIVE_USER:
      return {id: action.user.id}
    case LOGOUT_USER:
      return _nullUser
    default:
      return state
  }
}

export default sessionReducer;