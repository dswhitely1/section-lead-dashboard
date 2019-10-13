import createReducer from '../utils/createReducer';
import {
  GET_UNITS_START,
  POST_UNIT_START,
  PUT_UNIT_START,
  DELETE_UNIT_START,
} from './unitTypes';

const initialState = {
  isLoading: false,
  errors: null,
  units: [],
};

const unitStart = state => ({ ...state, isLoading: false, errors: null });

export default createReducer(initialState, {
  [GET_UNITS_START]: unitStart,
  [POST_UNIT_START]: unitStart,
  [PUT_UNIT_START]: unitStart,
  [DELETE_UNIT_START]: unitStart,
});
