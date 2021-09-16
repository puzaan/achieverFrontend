import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardCategoryLink } from 'components/organisms';
const useStyles = makeStyles(theme => ({
  color:{
    fontWeight: 900,
color: '#013220'
  },
}));
const Categories = props => {
  const { data, className, ...rest } = props;
  

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const classes = useStyles();
  return (
    
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            Choose your course by{' '}
            <Typography color="secondary" variant="inherit" component="span" >categories</Typography>
          </span>
        }
        subtitle="Browse the available course categories, choose your favourite one and start learning."
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.traning.children.course.pages.map((item, index) => (
          <Grid
          className={classes.color}
            key={index}
            item
            container
            alignItems="left"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardCategoryLink
            
              variant="outlined"
              align={isMd ? 'left' : 'center'}
              liftUp
              title1={item.title}
              subtitle={item.duration}
              description={item.iternship}
              subdescription={item.class}
              subtitle1={item.time}
              href={`/course-detail/${item.id}`}
              fontIconClass={item.icon}
              color= 'primary'
              
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
