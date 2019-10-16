/* eslint-disable no-use-before-define */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function SprintNavigation () {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant='h6'
          className={classes.title}
        >
          Sprints
        </Typography>
        <Button
          color='inherit'
          component={RouterLink}
          to='/dashboard/sprints/sprint'
        >
          Add Sprint
        </Button>
        <Button
          color='inherit'
          component={RouterLink}
          to='/dashboard'
        >
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default SprintNavigation;
