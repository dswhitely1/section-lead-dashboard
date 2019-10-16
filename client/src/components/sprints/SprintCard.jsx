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
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  card: {
    width: 480,
    padding: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex',
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
    <Paper className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant='h4'
            component='h1'
          >
            {sprint.name}
          </Typography>
          <Typography
            variant='h5'
            component='h2'
            color='textSecondary'
            gutterBottom
          >
            {unit.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={`${sprint.sprintLink}`}
            component={Button}
          >Sprint Link</Link>
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
    </Paper>
  );
}

export default SprintCard;
