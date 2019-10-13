/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import UnitCard from './UnitCard';
import UnitNavigation from './UnitNavigation';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
function UnitDashboard() {
  const classes = useStyles();
  const units = useSelector(state => state.unit.units);

  return (
    <div className={classes.root}>
      <UnitNavigation />
      {units.map(unit => (
        <UnitCard key={unit.id} name={unit.name} />
      ))}
    </div>
  );
}

export default UnitDashboard;
