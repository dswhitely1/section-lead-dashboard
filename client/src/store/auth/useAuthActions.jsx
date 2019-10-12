import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { axiosWithOutAuth as axios } from '../utils/axiosConfig';
import {
  LOGIN_START,
  REGISTER_START,
  LOGOUT,
  WELCOME_BACK,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './authTypes';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const useAuthActions = () => {
  const dispatch = useDispatch();
  const tokenService = useLocalStorage('sl_token');
  const login = useCallback(
    credentials => {
      dispatch({ type: LOGIN_START });
      axios()
        .post('/auth/login', credentials)
        .then(response => {
          tokenService.setLocalStorage(response.data.token);
          dispatch({ type: LOGIN_SUCCESS });
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.response }));
    },
    [dispatch, tokenService]
  );

  const register = useCallback(
    credentials => {
      dispatch({ type: REGISTER_START });
      axios()
        .post('/auth/register', credentials)
        .then(response => {
          tokenService.setLocalStorage(response.data.token);
          dispatch({ type: REGISTER_SUCCESS });
        })
        .catch(err =>
          dispatch({ type: REGISTER_FAILURE, payload: err.response })
        );
    },
    [dispatch, tokenService]
  );

  const logout = useCallback(() => {
    tokenService.delLocalStorage();
    dispatch({ type: LOGOUT });
  }, [dispatch, tokenService]);

  const welcomeBack = useCallback(() => dispatch({ type: WELCOME_BACK }), [
    dispatch,
  ]);

  return { login, register, logout, welcomeBack };
};
