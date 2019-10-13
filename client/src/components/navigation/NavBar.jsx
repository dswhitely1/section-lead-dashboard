import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { ActionsContext } from '../../contexts/ActionsContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
function NavBar() {
  const {
    authActions: { logout },
  } = useContext(ActionsContext);
  const isAuth = useSelector(state => state.auth.isAuth);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Section Lead Dashboard
          </Typography>
          {!isAuth && (
            <Button component={RouterLink} to="/register" color="inherit">
              Register
            </Button>
          )}
          {!isAuth && (
            <Button component={RouterLink} to="/login" color="inherit">
              Login
            </Button>
          )}
          {isAuth && (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
