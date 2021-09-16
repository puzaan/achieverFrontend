import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { useDispatch,} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px',
  },
  formControl: {
    minWidth: 120,
    width: 500
  },
}));

const Form = () => {
  const classes = useStyles();

  const [subject, setSubject] = useState('hello');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();

  // useEffect(() => {
  //   if (FormData) {
  //     history.push('/');
  //   }
  // });
  const handleSubmit = event => {
    event.preventDefault();
    const dataToSend = {
      email,subject
    }

    axios.post('http://localhost:5000/api/sendMail',dataToSend)
    history.push('/');
  };

  
  return (
    <div className={classes.root}>
      <form name="password-reset-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}>
            <Typography variant="body1">Full Name *</Typography>
            <TextField
              placeholder="Full name *"
              variant="outlined"
              size="medium"
              name="fullname"
              onChange={e => setSubject(e.target.value)}
              value={subject}
              fullWidth
            />
          </Grid> */}

          <Grid item xs={12}>
            <Typography variant="body1">Email *</Typography>
            <TextField
              placeholder="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              fullWidth
              autoComplete="off"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">Subject*</Typography>
            {/* <TextField
              placeholder="subject*"
              variant="outlined"
              size="medium"
              name="subject"
              onChange={e => setSubject(e.target.value)}
              value={subject}
              fullWidth
              
            /> */}
            <FormControl variant="outlined" size="medium" className={classes.formControl}>

<InputLabel id="demo-simple-select-outlined-label"></InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          
        >
          <MenuItem value={'hello'}>Hello</MenuItem>
          <MenuItem value={'thanks'}>Thanks</MenuItem>
          
        </Select>
        </FormControl>


          </Grid>

          {/* <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="body1">
                In which course you want to enroll in? *
              </Typography>
              <FormGroup>
                {data.map(form => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={form.courseName}
                          size='small'
                          onClick={() => {
                            const index = inputs.findIndex(
                              item => item === form.courseName,
                            );
                            if (~index) {
                              setInputs([
                                ...inputs.slice(0, index),
                                ...inputs.slice(index + 1),
                              ]);
                            } else {
                              setInputs([...inputs, form.courseName]);
                            }
                          }}
                        />
                      }
                      label={form.courseName}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="body1">Your Qualification?</Typography>
              <RadioGroup
                aria-label="Qualification"
                name="Qualification"
                onChange={e => setEducation(e.target.value)}
                value={education}
              >
                <FormControlLabel
                  value="Masters"
                  control={<Radio />}
                  label="Masters Running/ Completed"
                />
                <FormControlLabel
                  value="Bachlores"
                  control={<Radio />}
                  label="Bachlores Running/ Completed"
                />
                <FormControlLabel
                  value="college"
                  control={<Radio />}
                  label="+2 Running/ Completed"
                />
                <FormControlLabel
                  value="SEE"
                  control={<Radio />}
                  label="SEE Completed"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              Your college/ Institution Name? *
            </Typography>
            <TextField
              placeholder="Your college/ Institution Name? *"
              variant="outlined"
              size="medium"
              name="college"
              type="text"
              onChange={e => setCollege(e.target.value)}
              value={college}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Do you want to ask anything?</Typography>
            <TextField
              placeholder="Do you want to ask anything? "
              variant="outlined"
              size="medium"
              name="message"
              type="text"
              onChange={e => setMessage(e.target.value)}
              value={message}
              fullWidth
            />
          </Grid> */}

          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
          {/* <Grid item xs={12}>
          {loading && <Loder />}
            {error && <Message severity="error">{error}</Message>}
          </Grid> */}
        </Grid>
      </form>
    </div>
  );
};

export default Form;
