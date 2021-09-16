import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import { SectionHeader} from 'components/molecules';
import { CardReview } from 'components/organisms';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import {response} from '../../data/index'
const useStyles = makeStyles(theme => ({
  swiperContainer: {
    width: '100%',
    textAlign: "left",
  
  },
  swiperNav: {
    '& .swiper-button-prev, & .swiper-button-next': {
      margin:'30px',
      width: theme.spacing(4),
      height: theme.spacing(4),
      padding: theme.spacing(1),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      boxShadow: `0 2px 2px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper,
      },
    },
  },
}));

const Reviews = props => {
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
      spaceArround: isXs ? 50 : 0,
      
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 15000,
      },
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
      },
      
    });
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <div>
        <Grid container spacing={isMd ? 2 : 0}>
    <Grid item xs={12} sm={12} data-aos="fade-up">
      <SectionHeader
        title="Students Review"
        subtitle="Take a quick glance at some of our student response."
      />
      <div className={clsx('swiper-container', classes.swiperContainer)}>
        <div className="swiper-wrapper">
          {response.map((item, index) => (
            <CardReview
              key={index}
              className={'swiper-slide'}
              noBorder
              noShadow
              text={<Typography align = 'left' variant = "h6"> {item.review} </Typography>}
              authorName={item.name}
              authorTitle={` Enrolled in: ${item.enroll}`}
              authorPhoto={item.authorPhoto}
            />
          ))}
        </div>
        {!isXs ? null : <div className="swiper-pagination" />}
        {isXs ? null : (
          <div className={classes.swiperNav}>
            <div className={clsx('swiper-button-prev')} />
            <div className={clsx('swiper-button-next')} />
          </div>
        )}
      </div>
      
      </Grid>
      </Grid>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
