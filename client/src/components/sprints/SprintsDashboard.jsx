import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../contexts/ActionsContext';
import SprintNavigation from './SprintNavigation';
import SprintCard from './SprintCard';
import Container  from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme=>({
  cards: {
    padding: theme.spacing(2)
  }
}))
function SprintsDashboard() {
const classes=useStyles();
  const sprints = useSelector(state => state.sprint.sprints);
  return (
    <>
      <SprintNavigation />
      <Container className={classes.cards}>
        <Grid container spacing={3}>
      {sprints.map(sprint => (
        <SprintCard key={sprint.id} sprint={sprint} />
      ))}
        </Grid>
      </Container>
    </>
  );
}

export default SprintsDashboard;
