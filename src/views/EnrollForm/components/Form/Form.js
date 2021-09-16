import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { EnrollForm } from '../../../../action/enrollAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Message } from 'components/message.js';
import Loder from 'views/Loder'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px',
  },
}));

const data = [
  {
    id: '1',
    courseName: 'Machine Learning (Foundation/Intermediate/Advanced)',
  },
  {
    id: '2',
    courseName: 'Python (Django)',
  },
  {
    id: '3',
    courseName: 'Database (Beginner to advance complete solution)',
  },
  {
    id: '4',
    courseName: 'Flutter (Complete Application Development)',
  },
  {
    id: '5',
    courseName: 'JavaScript Fundamental',
  },
  {
    id: '6',
    courseName: 'Wordpress',
  },
  {
    id: '7',
    courseName: 'Quality Assurance QA (Beginner to Advance) ',
  },
  {
    id: '8',
    courseName: 'React Development (In Typescript)',
  },
  {
    id: '9',
    courseName: 'MERN/MEVN (Full stack development)',
  },
  {
    id: '10',
    courseName: '.Net (Enterprise Web Application Development)',
  },
  {
    id: '11',
    courseName: 'UI/UX Essential Training',
  },
  {
    id: '12',
    courseName: 'IOT Training (complete guide to IOT)',
  },
  {
    id: '13',
    courseName: 'Digital Marketing',
  },
];

const Form = () => {
  const classes = useStyles();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [message, setMessage] = useState('');
  const [education, setEducation] = useState('Bachlores');
  const [inputs, setInputs] = useState([]);

  console.log(inputs);
  const dispatch = useDispatch();
  const enrollList = useSelector(state => state.enrollList);
  const { loading, error, FormData } = enrollList;
  const history = useHistory();

  useEffect(() => {
    if (FormData) {
      history.push('/');
    }
  });
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      EnrollForm(fullName, email, phone, education, college, message, inputs),
    );
  };

  return (
    <div className={classes.root}>
      <form name="password-reset-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">Full Name *</Typography>
            <TextField
              placeholder="Full name *"
              variant="outlined"
              size="medium"
              name="fullname"
              onChange={e => setFullName(e.target.value)}
              value={fullName}
              fullWidth
            />
          </Grid>
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
            <Typography variant="body1">Phone No *</Typography>
            <TextField
              placeholder="Phone No *"
              variant="outlined"
              size="medium"
              name="phone"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              fullWidth
              type="number"
            />
          </Grid>

          <Grid item xs={12}>
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
          </Grid>

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
          <Grid item xs={12}>
          {loading && <Loder />}
            {error && <Message severity="error">{error}</Message>}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
