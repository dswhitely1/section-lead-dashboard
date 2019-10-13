import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function SignOut() {
  return (
    <>
      <Button component={RouterLink} to="/register" color="inherit">
        Register
      </Button>
      <Button component={RouterLink} to="/login" color="inherit">
        Login
      </Button>
    </>
  );
}

export default SignOut;
