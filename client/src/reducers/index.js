import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import locationsReducer from './locationsReducer';
import unitReducer from './unitReducer';
import tenantReducer from './tenantReducer';
import adminReducer from './adminReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  locations: locationsReducer,
  units: unitReducer,
  tenants: tenantReducer,
  admins: adminReducer
})