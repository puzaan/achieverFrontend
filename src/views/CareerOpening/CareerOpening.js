import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Application, Main} from './components';
import { jobs } from '../CareerListingMinimal/data/index';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));
const CareerOpening = ({ match }) => {
  const jobData = jobs.find(p => p.id === match.params.id);
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title>Career Opening Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
      <Section className={classes.pagePaddingTop}>
        <Main data={jobData} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Application />
      </SectionAlternate>
      
    </div>
  );
};

export default CareerOpening;
