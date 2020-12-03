import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import locationsReducer from './locationsReducer';
import unitReducer from './unitReducer';
import tenantReducer from './tenantReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  locations: locationsReducer,
  units: unitReducer,
  tenants: tenantReducer
})