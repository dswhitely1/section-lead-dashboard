import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { axiosWithAuth as axios } from '../utils/axiosConfig';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  GET_UNITS_START,
  GET_UNITS_SUCCESS,
  GET_UNITS_FAILURE,
  POST_UNIT_SUCCESS,
  POST_UNIT_START,
  POST_UNIT_FAILURE,
  PUT_UNIT_START,
  PUT_UNIT_SUCCESS,
  PUT_UNIT_FAILURE,
  DELETE_UNIT_START,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_FAILURE,
} from './unitTypes';

export const useUnitActions = () => {
  const dispatch = useDispatch();

  const fetchUnits = useCallback(() => {
    dispatch({ type: GET_UNITS_START });
    axios()
      .get('/unit')
      .then(res => dispatch({ type: GET_UNITS_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({ type: GET_UNITS_FAILURE, payload: err.response })
      );
  }, [dispatch]);

  const addUnit = useCallback(
    unit => {
      dispatch({ type: POST_UNIT_START });
      axios()
        .post('/unit', unit)
        .then(res => dispatch({ type: POST_UNIT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: POST_UNIT_FAILURE, payload: err.response })
        );
    },
    [dispatch]
  );

  const updateUnit = useCallback(
    unit => {
      dispatch({ type: PUT_UNIT_START });
      axios()
        .put(`/unit/${unit.id}`, unit)
        .then(res => dispatch({ type: PUT_UNIT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: PUT_UNIT_FAILURE, payload: err.response })
        );
    },
    [dispatch]
  );

  const deleteUnit = useCallback(
    id => {
      dispatch({ type: DELETE_UNIT_START });
      axios()
        .delete(`/unit/${id}`)
        .then(res => dispatch({ type: DELETE_UNIT_SUCCESS, payload: res.data }))
        .catch(err =>
          dispatch({ type: DELETE_UNIT_FAILURE, payload: err.response })
        );
    },
    [dispatch]
  );

  return { fetchUnits, addUnit, updateUnit, deleteUnit };
};
