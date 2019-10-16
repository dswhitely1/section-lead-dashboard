import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from '../../hooks/useForm';
import { ActionsContext } from '../../contexts/ActionsContext';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SprintForm ({ history: { push } }) {

  const classes = useStyles();
  const { sprintActions: { addSprint } } = useContext(ActionsContext);
  const [values, handleChange, handleSubmit, resetForm] = useForm({
    name: '',
    sprintLink: '',
    unitId: '',
  }, submit);
  const units = useSelector(state => state.unit.units);

  function submit () {
    addSprint(values);
    push('/dashboard/sprints');
  }

  return (
    <Container
      component='section'
      maxWidth='xs'
    >
      <div className={classes.paper}>
        <Typography
          component='h1'
          variant='h5'
        >
          Add Sprint
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            variant='filled'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Sprint Name'
            name='name'
            onChange={handleChange}
            value={values.name}
            autoFocus
          />
          <TextField
            variant='filled'
            margin='normal'
            required
            fullWidth
            id='sprintLink'
            label='Sprint Link'
            name='sprintLink'
            onChange={handleChange}
            value={values.sprintLink}
          />
          <Select
            value={values.unitId}
            name='unitId'
            onChange={handleChange}
            fullWidth
          >
            {units.map(({ id, name }) => (
              <MenuItem
                key={id}
                value={id}
              >{`${name}`}</MenuItem>
            ))}
          </Select>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >Submit</Button>
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='secondary'
            onClick={resetForm}
          >Reset Form</Button>
        </form>
      </div>
    </Container>
  );
}

export default SprintForm;
