/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { ActionsContext } from '../../contexts/ActionsContext';

function UnitCard({ unit: { name, id } }) {
  const [open, setOpen] = useState(false);
  const {
    unitActions: { deleteUnit },
  } = useContext(ActionsContext);
  function deleteSelectedUnit(unitId) {
    deleteUnit(unitId);
    setOpen(false);
  }
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button>Edit</Button>
        <Button onClick={() => setOpen(true)}>Delete</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Delete Unit</DialogTitle>
          <DialogContent>{`Are you sure you want to delete ${name}`}</DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => deleteSelectedUnit(id)}>Save</Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
}

export default UnitCard;
