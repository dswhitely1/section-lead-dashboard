/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function StudentMenuButton({ handleClose, anchorEl: { student }, handleMenu }) {
  return (
    <>
      <Button color="inherit" onClick={handleMenu} name="student">
        Students
      </Button>
      <Menu
        id="menu-student"
        anchorEl={student}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(student)}
        onClose={() => handleClose('student')}
        name="student"
      >
        <MenuItem name="student" onClick={() => handleClose('student')}>
          Add Student
        </MenuItem>
        <MenuItem name="student" onClick={() => handleClose('student')}>
          All Students
        </MenuItem>
      </Menu>
    </>
  );
}

export default StudentMenuButton;
