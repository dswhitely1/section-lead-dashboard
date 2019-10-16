import React from 'react';
import PrivateRoute from '../../auth/PrivateRoute';
import SprintForm from '../../sprints/SprintForm';
import SprintsDashboard from '../../sprints/SprintsDashboard';

function SprintRoutes () {
  return (
    <>
      <PrivateRoute
        path='/dashboard/sprints/sprint'
        component={SprintForm}
      />
      <PrivateRoute
        path='/dashboard/sprints'
        component={SprintsDashboard}
      />
    </>
  );
}

export default SprintRoutes;