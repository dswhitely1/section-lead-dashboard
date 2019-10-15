/* eslint-disable no-use-before-define */
import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { ActionsContext } from '../../contexts/ActionsContext';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function SprintNavigation() {
  const units = useSelector(state => state.unit.units);
  const classes = useStyles();
  const {
    sprintActions: { addSprint },
  } = useContext(ActionsContext);
  const [open, setOpen] = useState(false);
  const [values, handleChange, handleSubmit] = useForm(
    {
      name: '',
      sprintLink: '',
      unitId: 0,
    },
    submit
  );

  function submit() {
    addSprint(values);
    setOpen(false);
  }
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Sprints
        </Typography>
        <Button color="inherit" onClick={() => setOpen(true)}>
          Add Sprint
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add New Sprint</DialogTitle>
          <DialogContent>Add a Sprint to the Database</DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              value={values.name}
              onChange={handleChange}
              name="name"
              label="Unit Name"
              fullWidth
              autoFocus
            />
            <TextField
              id="sprintLink"
              value={values.sprintLink}
              onChange={handleChange}
              name="sprintLink"
              label="Sprint Link"
              fullWidth
            />
            <Select value={values.unitId} name="unitId" onChange={handleChange}>
              {units.map(({ id, name }) => (
                <MenuItem key={id} value={id}>{`${name}`}</MenuItem>
              ))}
            </Select>
          </form>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={submit}>Save</Button>
          </DialogActions>
        </Dialog>
        <Button color="inherit" component={RouterLink} to="/dashboard">
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default SprintNavigation;
