import { combineReducers } from 'redux';
import auth from './auth/authReducer';
import unit from './unit/unitReducer';

export default combineReducers({ auth, unit });
