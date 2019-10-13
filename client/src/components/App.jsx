import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ActionsProvider } from '../contexts/ActionsContext';
import { useAuthActions } from '../store/auth/useAuthActions';
import NavBar from './navigation/NavBar';
import LoginRegister from './auth/LoginRegister';
import theme from '../themes/mainTheme';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import { useUnitActions } from '../store/unit/useUnitActions';
import UnitDashboard from './units/UnitDashboard';

function App() {
  const authActions = useAuthActions();
  const unitActions = useUnitActions();
  return (
    <MuiThemeProvider theme={theme}>
      <ActionsProvider value={{ authActions, unitActions }}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <PrivateRoute path="/dashboard/units" component={UnitDashboard} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/register" component={LoginRegister} />
          <Route path="/login" component={LoginRegister} />
        </Switch>
      </ActionsProvider>
    </MuiThemeProvider>
  );
}

export default App;
