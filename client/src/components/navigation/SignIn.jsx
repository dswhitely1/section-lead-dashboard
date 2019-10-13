import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ActionsContext } from '../../contexts/ActionsContext';
import TeamLeadMenuButton from './TeamLeadMenuButton';
import StudentMenuButton from './StudentMenuButton';
import UnitsMenuButton from './UnitsMenuButton';

function SignIn() {
  const [anchorEl, setAnchorEl] = useState({
    teamLead: null,
    student: null,
    units: null,
  });
  const {
    authActions: { logout },
  } = useContext(ActionsContext);
  const handleMenu = e =>
    setAnchorEl({ ...anchorEl, [e.currentTarget.name]: e.currentTarget });
  const handleClose = key => setAnchorEl({ ...anchorEl, [key]: null });

  return (
    <>
      <TeamLeadMenuButton
        handleClose={handleClose}
        handleMenu={handleMenu}
        anchorEl={anchorEl}
      />
      <StudentMenuButton
        handleClose={handleClose}
        handleMenu={handleMenu}
        anchorEl={anchorEl}
      />
      <UnitsMenuButton
        handleClose={handleClose}
        handleMenu={handleMenu}
        anchorEl={anchorEl}
      />
      <Button color="inherit" onClick={() => logout()}>
        Logout
      </Button>
    </>
  );
}

export default SignIn;
