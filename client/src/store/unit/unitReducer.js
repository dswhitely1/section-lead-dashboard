import createReducer from '../utils/createReducer';
import {
  GET_UNITS_START,
  POST_UNIT_START,
  PUT_UNIT_START,
  DELETE_UNIT_START,
  POST_UNIT_SUCCESS,
  PUT_UNIT_SUCCESS,
  DELETE_UNIT_SUCCESS,
  GET_UNITS_SUCCESS,
  GET_UNITS_FAILURE,
  POST_UNIT_FAILURE,
  PUT_UNIT_FAILURE,
  DELETE_UNIT_FAILURE,
} from './unitTypes';

const initialState = {
  isLoading: false,
  errors: null,
  units: [],
};

const unitStart = state => ({ ...state, isLoading: true, errors: null });

const unitSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  errors: null,
  units: payload,
});

const unitFail = (state, payload) => ({
  ...state,
  isLoading: false,
  errors: payload,
  units: [],
});

export default createReducer(initialState, {
  [GET_UNITS_START]: unitStart,
  [POST_UNIT_START]: unitStart,
  [PUT_UNIT_START]: unitStart,
  [DELETE_UNIT_START]: unitStart,
  [GET_UNITS_SUCCESS]: unitSuccess,
  [POST_UNIT_SUCCESS]: unitSuccess,
  [PUT_UNIT_SUCCESS]: unitSuccess,
  [DELETE_UNIT_SUCCESS]: unitSuccess,
  [GET_UNITS_FAILURE]: unitFail,
  [POST_UNIT_FAILURE]: unitFail,
  [PUT_UNIT_FAILURE]: unitFail,
  [DELETE_UNIT_FAILURE]: unitFail,
});
