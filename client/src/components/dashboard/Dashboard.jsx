import React, { useContext, useEffect } from 'react';
import { ActionsContext } from '../../contexts/ActionsContext';
import HomePage from '../homepage/HomePage';

function Dashboard () {
  const {
    sprintActions: { fetchSprints },
    unitActions: { fetchUnits },
  } = useContext(ActionsContext);

  useEffect(() => {
    fetchSprints();
    fetchUnits();
  }, []);

  return (
    <HomePage />
  );
}

export default Dashboard;
