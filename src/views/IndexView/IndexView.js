import React from 'react';
import { makeStyles, Divider,} from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { QuickStart,  Hero , AskExpert,Works, VideoSection, Categories, Reviews, Work, Process} from './components';
import {
  partners,
  workReviews,
  work,
  process,
  quikeStart,
  response,
} from './data';
import {page} from '../CourseDetail/data'
import {Helmet} from 'react-helmet'
const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
      

      <Hero themeMode={themeMode} />

      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart data={quikeStart}/>
      </SectionAlternate>
      <SectionAlternate>
        <VideoSection data={partners} />
      </SectionAlternate>
      <Section>
        <Works data={workReviews} />
      </Section>
      <Section>
        <AskExpert/>
      </Section>
      <Section>
        <div>
        <Work data={work} />
        </div>
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <div id="course">
      <Section className={classes.dividerSection}>
      <Categories data={page} />
      </Section>
      </div>
      <Section narrow>
        <Process data={process} />
      </Section>
      <Section>
      <Reviews data={response} />
      </Section>
    </div>
  );
};

export default IndexView;
