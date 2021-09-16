import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Hero,Questions, SidePage} from './components';

import { page } from './data';
import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
  root: {
    
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    background: theme.palette.alternate.dark,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    //paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-8),
      marginRight: theme.spacing(-8),
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '30%',
      maxWidth: 450,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 500,
      paddingBottom: 0,
    },
  },
  coverContent: {
    
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: '60%',
      transform: 'translateY(-50%)',
      
    },
  },

  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 70%',
      maxWidth: '70%',
    },
  },
  contentSection: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(12),
    },
  },
  pagePaddingTop: {
    paddingTop: 50,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));

const CourseDetail = ({ match }) => {
  const classes = useStyles();
  const related = page.traning.children.course.pages 
  const course = page.traning.children.course.pages.find(p =>p.id === match.params.id )
  console.log(course)

  return (
<div>
<Helmet>
        <title>Course Detail Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
<Hero data={course}/>
    <div className={classes.root}>
      <Section className={clsx(classes.pagePaddingTop, classes.section)}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <div>
              <div className={classes.coverContent}>
                <SidePage data={related}/> 
              </div>
            </div>
          </div>
          <div className={classes.content} >
            <Questions data={course} className={classes.contentSection} />
          </div>
        </div>
      </Section>
      <Divider />
    </div>
    </div>
  );

};

export default CourseDetail;
