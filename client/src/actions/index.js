import axios from 'axios';
import { FETCH_USER } from './types'

export const fetchUser = (history) => async dispatch => {
  const res = await axios.get('/api/current_user');
  // console.log(res.data)
  // this console log shows admin
  // can we do something to store with this?
  // if (res.data.admin) {
  //   history.push('/admindashboard')
  // } else {
  //   history.push('/')
  // }
  dispatch({ type: FETCH_USER, payload: res.data });
}
