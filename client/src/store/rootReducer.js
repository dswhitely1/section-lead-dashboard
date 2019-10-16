import { combineReducers } from 'redux';
import auth from './auth/authReducer';
import unit from './unit/unitReducer';
import sprint from './sprints/sprintReducer';
import module from './modules/moduleReducer';

export default combineReducers({ auth, module, sprint, unit });
