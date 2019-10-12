import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ActionsProvider } from '../contexts/ActionsContext';
import { useAuthActions } from '../store/auth/useAuthActions';
import NavBar from './navigation/NavBar';
import LoginRegister from './auth/LoginRegister';
import theme from '../themes/mainTheme';

function App() {
  const authActions = useAuthActions();
  return (
    <MuiThemeProvider theme={theme}>
      <ActionsProvider value={{ authActions }}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route path="/register" component={LoginRegister} />
          <Route path="/login" component={LoginRegister} />
        </Switch>
      </ActionsProvider>
    </MuiThemeProvider>
  );
}

export default App;
