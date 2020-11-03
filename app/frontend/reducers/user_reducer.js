import {RECEIVE_USER} from '../actions/user_actions';



const userReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    default:
      return state
  }
}

export default userReducer;