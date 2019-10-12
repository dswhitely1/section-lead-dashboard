/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...otherProps }) {
  const isAuth = useSelector(state => state.auth.isAuth);
  if (isAuth) {
    return <Route {...otherProps} render={props => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
}

export default PrivateRoute;
