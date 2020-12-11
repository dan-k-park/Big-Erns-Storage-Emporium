import axios from 'axios';
import { FETCH_LOCATIONS, FETCH_UNITS, FETCH_USER, FETCH_ADMINS, FETCH_TENANTS } from './types'

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

export const submitLocation = (values) => async dispatch => {
  const res = await axios.post('/api/locations', values);


  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchUnits = () => async dispatch => {
  const res = await axios.get('/api/units');

  dispatch({ type: FETCH_UNITS, payload: res.data })
}

export const fetchTenants = () => async dispatch => {
  const res = await axios.get('/api/users');

  let tenants = []
  res.data.forEach(user => {
    if (!user.admin) {
      tenants.push(user)
    }
  })

  dispatch({ type: FETCH_TENANTS, payload: tenants })
}

export const fetchAdmins = () => async dispatch => {
  const res = await axios.get('/api/users');

  let admins = [];
  res.data.forEach(user => {
    if (user.admin) {
      admins.push(user)
    }
  })

  dispatch({ type: FETCH_ADMINS, payload: admins })
}



export const fetchLocations = () => async dispatch => {
  const res = await axios.get('/api/locations');

  dispatch({ type: FETCH_LOCATIONS, payload: res.data })
}