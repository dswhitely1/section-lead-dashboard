/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { ActionsContext } from '../../contexts/ActionsContext';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    width: 480,
  },
}));

function SprintCard ({ sprint }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const unit = useSelector(state =>
    state.unit.units.length !== 0
      ? state.unit.units.filter(result => result.id === sprint.unitId)[0]
      : [],
  );
  const {
    sprintActions: { deleteSprint },
  } = useContext(ActionsContext);

  function deleteSelectedSprint (id) {
    deleteSprint(id);
    setOpen(false);
  }

  return (
    <Grid
      item
      xs
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant='h5'
            component='h1'
          >
            {sprint.name}
          </Typography>
          <Typography
            variant='h6'
            component='h2'
            color='textSecondary'
            gutterBottom
          >
            {unit.name}
          </Typography>
          <Link href={`${sprint.sprintLink}`}>Sprint Link</Link>
        </CardContent>
        <CardActions>
          <Button>Edit</Button>
          <Button onClick={() => setOpen(true)}>Delete</Button>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
          >
            <DialogTitle>Delete Sprint</DialogTitle>
            <DialogContent>{`Are you sure you want to delete ${sprint.name}`}</DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => deleteSelectedSprint(sprint.id)}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default SprintCard;
