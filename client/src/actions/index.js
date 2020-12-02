import axios from 'axios';
import { FETCH_LOCATIONS, FETCH_USER, SET_ADMIN } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const checkAdmin = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  if (!res.data.admin) {
    dispatch({ type: SET_ADMIN, payload: res.data.admin })
  }
}

export const submitLocation = (values, history) => async dispatch => {
  const res = await axios.post('/api/locations', values);

  history.push('/admin');
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchLocations = () => async dispatch => {
  const res = await axios.get('/api/locations');

  dispatch({ type: FETCH_LOCATIONS, payload: res.data })
}