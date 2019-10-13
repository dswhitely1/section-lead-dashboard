/* eslint-disable no-use-before-define */
import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import UnitCard from './UnitCard';
import UnitNavigation from './UnitNavigation';
import { ActionsContext } from '../../contexts/ActionsContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
function UnitDashboard() {
  const classes = useStyles();
  const {
    unitActions: { fetchUnits },
  } = useContext(ActionsContext);
  const units = useSelector(state => state.unit.units);
  useEffect(() => {
    fetchUnits();
  }, [fetchUnits]);
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
