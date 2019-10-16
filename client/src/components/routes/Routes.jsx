import React from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

function Routes () {
  return (
    <>
      <PrivateRoutes />
      <PublicRoutes />
    </>
  );
}

export default Routes;