import React, { useEffect, useContext } from 'react';
import { ActionsContext } from '../../contexts/ActionsContext';

function Dashboard() {
  const {
    unitActions: { fetchUnits },
  } = useContext(ActionsContext);

  useEffect(() => {
    fetchUnits();
  }, [fetchUnits]);

  return <h1>Dashboard</h1>;
}

export default Dashboard;
