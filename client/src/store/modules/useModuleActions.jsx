import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { axiosWithAuth as axios } from '../utils/axiosConfig';
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

export const useModuleActions = () => {
  const dispatch = useDispatch();

  const allModules = useCallback(() => {
    dispatch({ type: GET_MODULES_START });
    axios()
      .get('/module')
      .then(res => dispatch({ type: GET_MODULES_SUCCESS, payload: res.data }))
      .catch(
        err => dispatch({ type: GET_MODULES_FAILURE, payload: err.response }));
  }, [dispatch]);

  const addModule = useCallback(newModule => {
    dispatch({ type: POST_MODULE_START });
    axios()
      .post('/module', newModule)
      .then(res => dispatch({ type: POST_MODULE_SUCCESS, payload: res.data }))
      .catch(
        err => dispatch({ type: POST_MODULE_FAILURE, payload: err.response }));
  }, [dispatch]);

  const updateModule = useCallback(updateModule => {
    dispatch({ type: PUT_MODULE_START });
    axios()
      .put(`/module/${updateModule.id}`, updateModule)
      .then(res => dispatch({ type: PUT_MODULE_SUCCESS, payload: res.data }))
      .catch(
        err => dispatch({ type: PUT_MODULE_FAILURE, payload: err.response }));
  }, [dispatch]);

  const deleteModule = useCallback(id => {
    dispatch({ type: DELETE_MODULE_START });
    axios()
      .delete(`/module/${id}`)
      .then(res => dispatch({ type: DELETE_MODULE_SUCCESS, payload: res.data }))
      .catch(
        err => dispatch(
          { type: DELETE_MODULE_FAILURE, payload: err.response }));
  }, [dispatch]);

  return { allModules, addModule, updateModule, deleteModule };
};