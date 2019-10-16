import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  },
}));

function HomePage () {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography component='h1' variant='h1'>Section Lead Dashboard</Typography>
    </Container>
  );
}

export default HomePage;