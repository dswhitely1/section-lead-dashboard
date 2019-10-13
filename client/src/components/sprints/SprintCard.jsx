/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

function SprintCard({ sprint }) {
  console.log(sprint);
  const unit = useSelector(
    state => state.unit.units.filter(result => result.id === sprint.unitId)[0]
  );
  console.log(unit);
  return <h1>Card</h1>;
}

export default SprintCard;
