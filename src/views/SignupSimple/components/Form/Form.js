import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  btn: {
    background: '#013220',
    borderRadius: 3,
    border: 0,
    height:47,
    color: 'white',
    padding: '0 30px',
    '&:hover': {
      background: 'black',
      color: 'white'

    }
    
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  fullName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  phoneNo: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      window.location.replace('/');
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="First name"
              label="First Name *"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              helperText={
                hasError('fullName') ? formState.errors.fullName[0] : null
              }
              error={hasError('fullName')}
              onChange={handleChange}
              type="fullName"
              value={formState.values.fullName || ''}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Phone No"
              label="Phone No*"
              variant="outlined"
              size="medium"
              name="phoneNo"
              fullWidth
              helperText={
                hasError('phoneNo') ? formState.errors.phoneNo[0] : null
              }
              error={hasError('phoneNo')}
              onChange={handleChange}
              type="phoneNo"
              value={formState.values.phoneNo || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          
          <Grid item xs={12}>
          <TextField
          id="outlined-multiline-static"
          placeholder="Write your message here ..."
          label="Message"
          multiline
          fullWidth
          rows={4}
          variant="outlined"
        />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              //color="primary"
              fullWidth
              className={classes.btn}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        
      </form>
    </div>
  );
};

export default Form;
