import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { axiosWithOutAuth as axios } from '../utils/axiosConfig';
import { LOGIN_START, REGISTER_START, LOGOUT, WELCOME_BACK } from './authTypes';

export const useAuthActions = () => {
  const dispatch = useDispatch();

  const login = useCallback(
    credentials => {
      dispatch({ type: LOGIN_START });
      axios()
        .post('/auth/login', credentials)
        .then(response => console.log(response.data))
        .catch(err => console.log(err.response));
    },
    [dispatch]
  );

  const register = useCallback(
    credentials => {
      dispatch({ type: REGISTER_START });
      axios()
        .post('/auth/register', credentials)
        .then(response => console.log(response.data))
        .catch(err => console.log(err.response));
    },
    [dispatch]
  );

  const logout = useCallback(() => dispatch({ type: LOGOUT }), [dispatch]);

  const welcomeBack = useCallback(() => dispatch({ type: WELCOME_BACK }), [
    dispatch,
  ]);

  return { login, register, logout, welcomeBack };
};
