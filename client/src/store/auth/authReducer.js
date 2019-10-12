import createReducer from '../utils/createReducer';

import {
  LOGIN_START,
  REGISTER_START,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
  WELCOME_BACK,
} from './authTypes';

const initialState = {
  isLoading: false,
  isAuth: false,
  errors: null,
};

const authStart = state => ({
  ...state,
  isLoading: true,
  isAuth: false,
  errors: null,
});

const authFail = (state, payload) => ({
  ...state,
  isLoading: false,
  isAuth: false,
  errors: payload,
});

const authSuccess = state => ({
  ...state,
  isLoading: false,
  isAuth: true,
  errors: null,
});

const logout = state => ({ ...state, isAuth: false });

const welcomeBack = state => ({ ...state, isAuth: true });

export default createReducer(initialState, {
  [LOGIN_START]: authStart,
  [REGISTER_START]: authStart,
  [LOGIN_FAILURE]: authFail,
  [REGISTER_FAILURE]: authFail,
  [LOGIN_SUCCESS]: authSuccess,
  [REGISTER_SUCCESS]: authSuccess,
  [LOGOUT]: logout,
  [WELCOME_BACK]: welcomeBack,
});
