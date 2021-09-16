import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
  Card,
  Divider,
} from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AlarmIcon from '@material-ui/icons/Alarm';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  // coverContent: {
  //   [theme.breakpoints.up('md')]: {
  //     position: 'absolute',
  //     // top: '60%',
  //     //  transform: 'translateY(-50%)',
  //     // padding: theme.spacing(2),
  //   },
  // },
  line: {
    display: 'flex',
  },
  space: {
    padding: '20px',
    marginBottom: '5px',
  },
  divider: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  color:{
    color:'#013220'
  },
}));

const SidePage = props => {
  const {data} = props;
  const classes = useStyles();

  return (
    <div >
      <Box
        marginBottom={2}
        justifyContent="space-evenly"
        alignItems="centere"
        padding={2}
        border="1px solid #ccc"
        borderRadius="4px"
        width="350px"
        height="100%"
      >
        <Typography variant="h5" gutterBottom>
          Upcoming Class Schedule
        </Typography>
        <Card className={classes.space}>
          <Grid className={classes.line}>
            <DateRangeIcon />
            <Typography variant="h5" gutterBottom>
              11 th jul, 2021 Sunday
            </Typography>
          </Grid>
          <Grid className={classes.line}>
            <AlarmIcon />
            <Typography variant="subtitle" gutterBottom>
              09:30 Am - 11:00 AM Sunday
            </Typography>
          </Grid>
        </Card>
        <Card className={classes.space}>
          <Grid className={classes.line}>
            <DateRangeIcon />
            <Typography variant="h5" gutterBottom>
              11 th jul, 2021 Sunday
            </Typography>
          </Grid>
          <Grid className={classes.line}>
            <AlarmIcon />
            <Typography variant="subtitle" gutterBottom>
              09:30 Am - 11:00 AM Sunday
            </Typography>
          </Grid>
        </Card>
      </Box>
      <Box
        marginBottom={2}
        justifyContent="space-evenly"
        alignItems="centere"
        padding={2}
        border="1px solid #ccc"
        borderRadius="4px"
        width="350px"
        height="100%"
      >
        <Typography variant="h5" gutterBottom>
          Related Courses
        </Typography>
        {data.map((tit, id)=> (
        <List className={classes.divider}>

          <ListItem  button component={Link} href={`/course-detail/${tit.id}`} >
            <ListItemAvatar>
                <ImageIcon />
              
            </ListItemAvatar>
            
              <ListItemText primary={tit.title} />
          </ListItem>
          <Divider variant="inset" component="li" />

        </List>
        ))}
      </Box>
    </div>
  );
};

export default SidePage;
