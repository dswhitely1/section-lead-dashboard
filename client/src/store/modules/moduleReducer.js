import createReducer from '../utils/createReducer';
import {
  DELETE_MODULE_FAILURE,
  DELETE_MODULE_START,
  DELETE_MODULE_SUCCESS,
  GET_MODULES_FAILURE,
  GET_MODULES_START,
  GET_MODULES_SUCCESS,
  POST_MODULE_FAILURE,
  POST_MODULE_START,
  POST_MODULE_SUCCESS,
  PUT_MODULE_FAILURE,
  PUT_MODULE_START,
  PUT_MODULE_SUCCESS,
} from './moduleTypes';

const initialState = {
  isLoading: false,
  errors: null,
  modules: [],
};

const moduleStart = (state) => ({ ...state, isLoading: true, errors: null });

const moduleSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  modules: payload,
  errors: null,
});

const moduleFailure = (state, payload) => ({
  ...state,
  isLoading: false,
  modules: [],
  errors: payload,
});

export default createReducer(initialState, {
  [GET_MODULES_START]: moduleStart,
  [POST_MODULE_START]: moduleStart,
  [PUT_MODULE_START]: moduleStart,
  [DELETE_MODULE_START]: moduleStart,
  [GET_MODULES_SUCCESS]: moduleSuccess,
  [POST_MODULE_SUCCESS]: moduleSuccess,
  [PUT_MODULE_SUCCESS]: moduleSuccess,
  [DELETE_MODULE_SUCCESS]: moduleSuccess,
  [GET_MODULES_FAILURE]: moduleFailure,
  [POST_MODULE_FAILURE]: moduleFailure,
  [PUT_MODULE_FAILURE]: moduleFailure,
  [DELETE_MODULE_FAILURE]: moduleFailure,
});