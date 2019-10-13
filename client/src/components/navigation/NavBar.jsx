import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import SignOutLinks from './SignOut';
import SignInLinks from './SignIn';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const isAuth = useSelector(state => state.auth.isAuth);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Section Lead Dashboard
          </Typography>
          {isAuth ? <SignInLinks /> : <SignOutLinks />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
