import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardJobMinimal } from 'components/organisms';

const Jobs = props => {
  const { data, className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Current Openings"
        subtitleColor="textPrimary"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index}>
            <CardJobMinimal
            href= {`/career-opening/${item.id}`}
              title={item.title}
              subtitle={`${item.jobTitle} /  ${item.type}`}
              showArrow
              titleProps={{
                variant: 'h6',
              }}
              subtitleProps={{
                variant: 'subtitle1',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Jobs.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Jobs;
