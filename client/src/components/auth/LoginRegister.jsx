/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { FormHelperText } from '@material-ui/core';
import CopyRight from '../copyRight/CopyRight';
import { ActionsContext } from '../../contexts/ActionsContext';
import { useForm } from '../../hooks/useForm';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginRegister({ match: { url }, history: { push } }) {
  const [isRegister, setIsRegister] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);
  const {
    authActions: { login, register },
  } = useContext(ActionsContext);
  const authErrors = useSelector(state => state.auth.errors);
  const [values, handleChange, handleSubmit, resetForm] = useForm(
    {
      username: '',
      password: '',
      password2: '',
    },
    submit
  );
  function submit() {
    if (isRegister) {
      register(values);
    } else {
      const { username, password } = values;
      login({ username, password });
    }
  }
  const classes = useStyles();
  useEffect(() => {
    if (url === '/register') {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [url]);
  useEffect(() => {
    if (isAuth) {
      push('/dashboard');
    }
  }, [isAuth, push]);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isRegister ? 'Register' : 'Login'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            error={Boolean(
              authErrors && authErrors.data && authErrors.data.username
            )}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={handleChange}
            value={values.username}
            autoFocus
            aria-describedby="username-error-text"
          />
          {authErrors && authErrors.data && authErrors.data.username && (
            <FormHelperText id="username-error-text" error>
              {authErrors.data.username}
            </FormHelperText>
          )}
          <TextField
            error={Boolean(
              authErrors && authErrors.data && authErrors.data.password
            )}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
          />
          {authErrors && authErrors.data && authErrors.data.password && (
            <FormHelperText id="password-error-text" error>
              {authErrors.data.password}
            </FormHelperText>
          )}
          {isRegister && (
            <TextField
              error={Boolean(
                authErrors && authErrors.data && authErrors.data.password2
              )}
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="password2"
              label="Confirm Password"
              name="password2"
              type="password"
              onChange={handleChange}
              value={values.password2}
            />
          )}
          {authErrors && authErrors.data && authErrors.data.password2 && (
            <FormHelperText id="password2-error-text" error>
              {authErrors.data.password2}
            </FormHelperText>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isRegister ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default LoginRegister;
