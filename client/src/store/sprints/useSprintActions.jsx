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

  const fetchSprints = useCallback(() => {
    dispatch({ type: GET_SPRINTS_START });
    axios()
      .get('/sprint')
      .then(res => dispatch({ type: GET_SPRINTS_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({ type: GET_SPRINTS_FAILURE, payload: err.response })
      );
  }, [dispatch]);

  const addSprint = useCallback(
    sprint => {
      dispatch({ type: POST_SPRINT_START });
      axios()
        .post('/sprint', sprint)
        .then(res => dispatch({ type: POST_SPRINT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: POST_SPRINT_FAILURE, payload: err.response })
        );
    },
    [dispatch]
  );

  const updateSprint = useCallback(
    sprint => {
      dispatch({ type: PUT_SPRINT_START });
      axios()
        .put(`/sprint/${sprint.id}`, sprint)
        .then(res => dispatch({ type: PUT_SPRINT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: PUT_SPRINT_FAILURE, payload: err.response })
        );
    },
    [dispatch]
  );

  const deleteSprint = useCallback(
    id => {
      dispatch({ type: DELETE_SPRINT_START });
      axios()
        .delete(`/sprint/${id}`)
        .then(res =>
          dispatch({ type: DELETE_SPRINT_SUCCESS, payload: res.data })
        )
        .catch(err =>
          dispatch({ type: DELETE_SPRINT_FAILURE, payload: err.response })
        );
    },
    [dispatch]
  );

  return { fetchSprints, addSprint, updateSprint, deleteSprint };
};
