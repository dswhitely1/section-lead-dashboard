import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function CopyRight() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©{' '}
      <Link color="inherit" href="https://www.donwhitely.com">
        Don Whitely
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default CopyRight;
