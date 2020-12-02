import { FETCH_USER, SET_ADMIN } from '../actions/types'


export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SET_ADMIN:
      return action.payload || false;
    default: 
      return state;
  }
}