import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  })
}

export const getUser = user => dispatch => (
  UserUtil.getUser(user).then(user => dispatch(receiveUser(user)))
)