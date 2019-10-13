/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function TeamLeadMenuButton({
  handleClose,
  anchorEl: { teamLead },
  handleMenu,
}) {
  return (
    <>
      <Button color="inherit" onClick={handleMenu} name="teamLead">
        Team Leads
      </Button>
      <Menu
        id="menu-teamLead"
        anchorEl={teamLead}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(teamLead)}
        onClose={() => handleClose('teamLead')}
        name="teamLead"
      >
        <MenuItem name="teamLead" onClick={() => handleClose('teamLead')}>
          Add Team Lead
        </MenuItem>
        <MenuItem name="teamLead" onClick={() => handleClose('teamLead')}>
          All Team Leads
        </MenuItem>
      </Menu>
    </>
  );
}

export default TeamLeadMenuButton;
