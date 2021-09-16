import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Helmet } from 'react-helmet';
import './form.css'




const useStyles = makeStyles(theme => ({
  formContainer: {
    // height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    // maxWidth: 500,
    // margin: `0 auto`,


    //display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
    // overflow: 'hidden',
   // paddingTop: "56.25%"




    position: 'relative',
    width: '100 %',
    height: '2500',
    overflow: 'hidden',
    paddingTop: '2040px',


    
   
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  responsive: {
    // position: 'bsolute',
    // top: 0,
    // left: 50,
    // bottom: 0,
    // right: 20,
    // width: '100 %',
    // height: '100 %',
    

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: "2359",
    border: 'none',
    
  }
}));

const EnrollForm = ({ history }) => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Enrollment Form</title>
        <meta
          name="description"
          content="Achievers Groups Research and Traning center"
        />
      </Helmet>
      {/* <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Enrollment Form"
            
            titleProps={{
              variant: 'h6',
            }}
          />
         
          <Form />
        </div>
      </Section> */}
      <div className={classes.formContainer} >
        <p align="center"> 
          <iframe className={ classes.responsive }src="https://docs.google.com/forms/d/e/1FAIpQLSehTLqktyBG0k413051ktf_mdWAM4ckYX-4WBjro2ergczRgg/viewform?embedded=true" width="1000" height="2359" frameborder="0" marginheight="0" marginwidth="0"  scrolling="no">Loading…</iframe>
      </p>
      </div>
    </div>
  );
};

export default EnrollForm;
