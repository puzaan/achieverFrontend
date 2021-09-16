import React from 'react';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Features, Hero, Jobs} from './components';

import { features, jobs } from './data';
import { Helmet } from 'react-helmet';

const CareerListingMinimal = () => (
  <div>
    <Helmet>
        <title>Career Listing Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
    <Hero />
    <Section>
      <About />
    </Section>
    <Features data={features} />
    <div id="job">
    <SectionAlternate>
      <Jobs data={jobs} />
    </SectionAlternate>
    </div>
  </div>
);

export default CareerListingMinimal;
