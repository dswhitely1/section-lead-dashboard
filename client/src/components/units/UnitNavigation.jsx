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
import { useForm } from '../../hooks/useForm';
import { ActionsContext } from '../../contexts/ActionsContext';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function UnitNavigation() {
  const classes = useStyles();
  const {
    unitActions: { addUnit },
  } = useContext(ActionsContext);
  const [open, setOpen] = useState(false);
  const [values, handleChange] = useForm(
    {
      name: '',
    },
    submit
  );

  function submit() {
    addUnit(values);
    setOpen(false);
  }
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Units
        </Typography>
        <Button color="inherit" onClick={() => setOpen(true)}>
          Add Unit
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add New Unit</DialogTitle>
          <DialogContent>Add a Unit to the Database</DialogContent>
          <TextField
            id="name"
            value={values.name}
            onChange={handleChange}
            name="name"
            label="Unit Name"
            margin="dense"
            autoFocus
            fullWidth
          />
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

export default UnitNavigation;
