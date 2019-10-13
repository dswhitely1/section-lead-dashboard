import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { axiosWithAuth as axios } from '../utils/axiosConfig';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  GET_SPRINTS_START,
  GET_SPRINTS_SUCCESS,
  GET_SPRINTS_FAILURE,
  POST_SPRINT_START,
  POST_SPRINT_SUCCESS,
  POST_SPRINT_FAILURE,
  PUT_SPRINT_START,
  PUT_SPRINT_SUCCESS,
  PUT_SPRINT_FAILURE,
  DELETE_SPRINT_START,
  DELETE_SPRINT_SUCCESS,
  DELETE_SPRINT_FAILURE,
} from './sprintTypes';

export const useSprintActions = () => {
  const dispatch = useDispatch();
  const tokenService = useLocalStorage('sl_token');
  const token = tokenService.getLocalStorage();

  const fetchSprints = useCallback(() => {
    dispatch({ type: GET_SPRINTS_START });
    axios(token)
      .get('/sprint')
      .then(res => dispatch({ type: GET_SPRINTS_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({ type: GET_SPRINTS_FAILURE, payload: err.response })
      );
  }, [dispatch, token]);

  const addSprint = useCallback(
    sprint => {
      dispatch({ type: POST_SPRINT_START });
      axios(token)
        .post('/sprint', sprint)
        .then(res => dispatch({ type: POST_SPRINT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: POST_SPRINT_FAILURE, payload: err.response })
        );
    },
    [dispatch, token]
  );

  const updateSprint = useCallback(
    sprint => {
      dispatch({ type: PUT_SPRINT_START });
      axios(token)
        .put(`/sprint/${sprint.id}`, sprint)
        .then(res => dispatch({ type: PUT_SPRINT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: PUT_SPRINT_FAILURE, payload: err.response })
        );
    },
    [dispatch, token]
  );

  const deleteSprint = useCallback(
    id => {
      dispatch({ type: DELETE_SPRINT_START });
      axios(token)
        .delete(`/sprint/${id}`)
        .then(res =>
          dispatch({ type: DELETE_SPRINT_SUCCESS, payload: res.data })
        )
        .catch(err =>
          dispatch({ type: DELETE_SPRINT_FAILURE, payload: err.response })
        );
    },
    [dispatch, token]
  );

  return { fetchSprints, addSprint, updateSprint, deleteSprint };
};
