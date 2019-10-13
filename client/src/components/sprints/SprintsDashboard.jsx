import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../contexts/ActionsContext';
import SprintNavigation from './SprintNavigation';
import SprintCard from './SprintCard';

function SprintsDashboard() {
  const {
    sprintActions: { fetchSprints },
    unitActions: { fetchUnits },
  } = useContext(ActionsContext);
  const sprints = useSelector(state => state.sprint.sprints);
  useEffect(() => fetchUnits(), [fetchUnits]);
  useEffect(() => fetchSprints(), [fetchSprints]);
  return (
    <>
      <SprintNavigation />
      {sprints.map(sprint => (
        <SprintCard sprint={sprint} />
      ))}
    </>
  );
}

export default SprintsDashboard;
