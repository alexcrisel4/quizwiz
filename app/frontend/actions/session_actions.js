import * as SessionUtil from '../util/session_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveUser = user => {

  return ({
    type: RECEIVE_USER,
    user
  }) 
}

export const logoutUser = () => {
  return({
    type: LOGOUT_USER
  })
}

export const login = user => dispatch => (
  SessionUtil.login(user).then(user => (dispatch(receiveUser(user))))
)

export const logout = () => dispatch => (
  SessionUtil.logout().then(() => dispatch(logoutUser()))
)

export const signup = user => dispatch => (
  SessionUtil.signup(user).then(user => (dispatch(receiveUser(user))))
)

