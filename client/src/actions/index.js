import axios from 'axios';
import { FETCH_LOCATIONS, FETCH_UNITS, FETCH_USER, FETCH_TENANTS } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const checkAdmin = (history) => async dispatch => {
  const res = await axios.get('/api/current_user');
  if (!res.data.admin) {
    history.push('/')
  }
}

export const submitLocation = (values, history) => async dispatch => {
  const res = await axios.post('/api/locations', values);

  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchUnits = () => async dispatch => {
  const res = await axios.get('/api/units');

  dispatch({ type: FETCH_UNITS, payload: res.data })
}

export const fetchTenants = () => async dispatch => {
  const res = await axios.get('/api/users');

  dispatch({ type: FETCH_TENANTS, payload: res.data })
}



export const fetchLocations = () => async dispatch => {
  const res = await axios.get('/api/locations');

  dispatch({ type: FETCH_LOCATIONS, payload: res.data })
}