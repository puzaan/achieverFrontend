import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { CardReview } from 'components/organisms';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import {clientReview} from '../../data/index'
const useStyles = makeStyles(theme => ({
  swiperContainer: {
    width: '100%',
    textAlign: 'left',
  },
}));

const Works = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween:isXs ? 5 : 0,

      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 15000,
      },
    });
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <div>
        <Grid container spacing={isMd ? 5 : 0}>
          <Grid item xs={12} sm={12} md={6} data-aos="fade-up">
            <SectionHeader title="Our success Story" />
            <div className={clsx('swiper-container', classes.swiperContainer)}>
              <div className="swiper-wrapper">
                {data.map((item, index) => (
                  <CardReview
                    key={index}
                    className={'swiper-slide'}
                    noBorder
                    noShadow
                    text={
                      <Typography align="left" variant="h6">
                        {' '}
                        {item.authorReview}{' '}
                      </Typography>
                    }
                    authorName={` Name: ${item.authorName}`}
                    authorPhoto={item.authorPhoto}
                    authorTitle={` Position: ${item.position}`}
                  />
                ))}
              </div>
              <div className="swiper-pagination" />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md = {6} data-aos="fade-up">
            <SectionHeader title="Client Review" />
            <div className={clsx('swiper-container', classes.swiperContainer)}>
              <div className="swiper-wrapper">
                {clientReview.map((item, index) => (
                  <CardReview
                    key={index}
                    className={'swiper-slide'}
                    noBorder
                    noShadow
                    text={
                      <Typography align="left" variant="h6">
                        
                        {item.review}
                      </Typography>
                    }
                    // authorName={` Name:${item.authorName}`}
                    // // authorTitle={` Enrolled in: ${item.enroll}`}
                    authorPhoto={item.authorPhoto}
                  />
                ))}
              </div>
              <div className="swiper-pagination" />
            </div>
          </Grid>
        
        </Grid>
      </div>
    </div>
  );
};

Works.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Works;
