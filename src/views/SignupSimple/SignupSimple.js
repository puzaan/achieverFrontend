import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Contact} from './components';
import { Section } from 'components/organisms';
import {  mapData} from './data';
const useStyles = makeStyles(theme => ({
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const SignupSimple = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.section}>
        <Contact data={mapData} />
      </Section>
    </div>
  );
};

export default SignupSimple;
