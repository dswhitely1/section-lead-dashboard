import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import jwtDecode from 'jwt-decode';
import { ActionsProvider } from '../contexts/ActionsContext';
import { useAuthActions } from '../store/auth/useAuthActions';
import NavBar from './navigation/NavBar';
import theme from '../themes/mainTheme';
import { useUnitActions } from '../store/unit/useUnitActions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSprintActions } from '../store/sprints/useSprintActions';
import Routes from './routes/Routes';

function App () {
  const tokenService = useLocalStorage('sl_token');
  const authActions = useAuthActions();
  const unitActions = useUnitActions();
  const sprintActions = useSprintActions();
  useEffect(() => {
    if (tokenService.testLocalStorage()) {
      const expiredTime = jwtDecode(tokenService.getLocalStorage());
      const currentTime = Date.now() / 1000;
      if (expiredTime.exp > currentTime) {
        authActions.welcomeBack();
      } else {
        authActions.logout();
      }
    }
  }, [authActions, tokenService]);

  return (
    <MuiThemeProvider theme={theme}>
      <ActionsProvider value={{ authActions, unitActions, sprintActions }}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Routes />
        </Switch>
      </ActionsProvider>
    </MuiThemeProvider>
  );
}

export default App;
