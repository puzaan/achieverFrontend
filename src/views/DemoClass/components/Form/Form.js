import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import {createDemoClass} from 'action/demoClassAction'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Message } from 'components/message.js';
import { page } from 'views/CourseDetail/data';
import Loder from 'views/Loder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px',
  },
}));

const Form = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('Machine Learning Course');
  const [selectedDate, setSelectedDate] = useState(new Date());
const DemoClass = useSelector(state => state.DemoClass);
const {loading, error, demoClassData} = DemoClass;
const history = useHistory();  
const dispatch = useDispatch();

  useEffect(() => { 
    if(demoClassData){
      history.push('/');
    }
    
  });
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      createDemoClass(name, email, number, course, selectedDate),
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
              onChange={e => setName(e.target.value)}
              value={name}
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
              onChange={e => setNumber(e.target.value)}
              value={number}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl size='small' component="fieldset">
              <Typography variant="body1">Choose course</Typography>
              <RadioGroup
                aria-label="Course"
                name="Course *"
                onChange={e => setCourse(e.target.value)}
                value={course}
                size='small'
              >
                {page.traning.children.course.pages.map((page, i) => (
                  <FormControlLabel
                    key={i}
                    value={page.title}
                    control={<Radio />}
                    label={page.title}
                    size='small'
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Choose Schedual Date</Typography>

            <TextField
              id="date"
              type="date"
              defaultValue={selectedDate}
              onChange={e => setSelectedDate(e.target.defaultValue)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
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
            {error && <Message severity="error">{error}</Message>}
            {loading && <Loder/>}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
