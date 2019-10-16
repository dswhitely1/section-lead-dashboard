import React from 'react';
import SprintRoutes from './sprintRoutes/SprintRoutes';
import UnitRoutes from './unitRoutes/UnitRoutes';
import DashboardRoute from './dashboardRoute/DashboardRoute';

function PrivateRoutes () {
  return (
    <>
      <SprintRoutes />
      <UnitRoutes />
      <DashboardRoute />
    </>
  );
}

export default PrivateRoutes;