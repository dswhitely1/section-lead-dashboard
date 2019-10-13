import createReducer from '../utils/createReducer';
import {
  GET_SPRINTS_START,
  POST_SPRINT_START,
  PUT_SPRINT_START,
  DELETE_SPRINT_START,
  POST_SPRINT_SUCCESS,
  PUT_SPRINT_SUCCESS,
  DELETE_SPRINT_SUCCESS,
  GET_SPRINTS_SUCCESS,
  GET_SPRINTS_FAILURE,
  POST_SPRINT_FAILURE,
  PUT_SPRINT_FAILURE,
  DELETE_SPRINT_FAILURE,
} from './sprintTypes';

const initialState = {
  isLoading: false,
  errors: null,
  sprints: [],
};

const sprintStart = state => ({ ...state, isLoading: true, errors: null });

const sprintSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  errors: null,
  sprints: payload,
});

const sprintFail = (state, payload) => ({
  ...state,
  isLoading: false,
  errors: payload,
  sprints: [],
});

export default createReducer(initialState, {
  [GET_SPRINTS_START]: sprintStart,
  [POST_SPRINT_START]: sprintStart,
  [PUT_SPRINT_START]: sprintStart,
  [DELETE_SPRINT_START]: sprintStart,
  [GET_SPRINTS_SUCCESS]: sprintSuccess,
  [POST_SPRINT_SUCCESS]: sprintSuccess,
  [PUT_SPRINT_SUCCESS]: sprintSuccess,
  [DELETE_SPRINT_SUCCESS]: sprintSuccess,
  [GET_SPRINTS_FAILURE]: sprintFail,
  [POST_SPRINT_FAILURE]: sprintFail,
  [PUT_SPRINT_FAILURE]: sprintFail,
  [DELETE_SPRINT_FAILURE]: sprintFail,
});
