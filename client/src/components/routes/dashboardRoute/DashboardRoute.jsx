import React from 'react';
import PrivateRoute from '../../auth/PrivateRoute';
import Dashboard from '../../dashboard/Dashboard';

function DashboardRoute () {
  return <PrivateRoute
    exact
    path='/dashboard'
    component={Dashboard}
  />;
}

export default DashboardRoute;