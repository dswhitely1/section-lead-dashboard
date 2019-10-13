import { combineReducers } from 'redux';
import auth from './auth/authReducer';
import unit from './unit/unitReducer';
import sprint from './sprints/sprintReducer';

export default combineReducers({ auth, sprint, unit });
