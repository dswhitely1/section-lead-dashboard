import React from 'react';
import { Route } from 'react-router-dom';
import LoginRegister from '../auth/LoginRegister';
import HomePage from '../homepage/HomePage';

function PublicRoutes () {
  return (
    <>
      <Route
        path='/register'
        component={LoginRegister}
      />
      <Route
        path='/login'
        component={LoginRegister}
      />
      <Route
        exact
        path='/'
        component={HomePage}
      />
    </>
  );
}

export default PublicRoutes;