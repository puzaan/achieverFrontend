import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Helmet } from 'react-helmet';

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

const Counseling = ({history}) => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Counselling Form Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Counselling Schedual Form"
            
            titleProps={{
              variant: 'h6',
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default Counseling;
