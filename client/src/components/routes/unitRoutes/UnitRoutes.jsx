import React from 'react';
import PrivateRoute from '../../auth/PrivateRoute';
import UnitForm from '../../units/UnitForm';
import UnitDashboard from '../../units/UnitDashboard';

function UnitRoutes () {
  return (
    <>
      <PrivateRoute
        path='/dashboard/units/unit'
        component={UnitForm}
      />
      <PrivateRoute
        path='/dashboard/units'
        component={UnitDashboard}
      />
    </>
  );
}

export default UnitRoutes;