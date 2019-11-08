import initialState from './initialState';
import { FETCH_USER, RECIEVE_USER } from '../actions/actionTypes';

export default function setup(state = initialState.user, action) {
  let newState;

  switch (action.type) {
    case FETCH_USER:
      return action;
    case RECIEVE_USER:
      newState = action.user;
      return newState;
    default:
      return state;
  }
}
