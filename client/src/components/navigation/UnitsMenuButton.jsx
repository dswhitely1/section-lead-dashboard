/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

function UnitsMenuButton({ handleMenu, anchorEl: { units }, handleClose }) {
  return (
    <>
      <Button color="inherit" onClick={handleMenu} name="units">
        Units
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={units}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(units)}
        onClose={() => handleClose('teamLead')}
        name="units"
      >
        <MenuItem
          name="units"
          component={RouterLink}
          to="/dashboard/units"
          onClick={() => handleClose('units')}
        >
          Units
        </MenuItem>
        <MenuItem name="units" onClick={() => handleClose('units')}>
          Sprints
        </MenuItem>
        <MenuItem name="units" onClick={() => handleClose('units')}>
          Modules
        </MenuItem>
      </Menu>
    </>
  );
}

export default UnitsMenuButton;
