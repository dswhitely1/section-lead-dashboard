import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { ActionsContext } from '../../contexts/ActionsContext';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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

function UnitForm ({ history: { push } }) {
  const classes = useStyles();
  const { unitActions: { addUnit } } = useContext(ActionsContext);
  const [values, handleChange, handleSubmit] = useForm({
    name: '',
  }, submit);

  function submit () {
    addUnit(values);
    push('/dashboard/units');
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
          Add Unit
        </Typography>'
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
            label='Unit Name'
            name='name'
            onChange={handleChange}
            value={values.name}
            autoFocus
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >Submit</Button>
        </form>
      </div>
    </Container>
  );
}

export default UnitForm;