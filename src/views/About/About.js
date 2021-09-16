import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  
  Gallery,
  Hero,
  Story,
  WhoWeAre,
} from './components';
import {Contact} from '../SignupSimple/components'
import {   gallery } from './data';
import { mapData} from '../SignupSimple/data';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>About Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
      <Hero />
      <Section>
        <Story />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <WhoWeAre />
      </Section>
      <Contact data={mapData} />
      <SectionAlternate>
        <Gallery data={gallery} />
      </SectionAlternate>
    </div>
  );
};

export default About;
