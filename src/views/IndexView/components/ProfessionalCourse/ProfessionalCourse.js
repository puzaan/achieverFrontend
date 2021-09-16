import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {} from '@material-ui/core';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image, } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));



const ProfessionalCourse = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const scrollTo = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };


  return (
    <div className={className} data-aos="fade-up" {...rest}>
      
      <Grid container justify="center">
        
          <Grid
            data-aos="fade-up"
            item
            container
            xs={12}
            spacing={isMd ? 4 : 2}
            direction= 'row' 
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={12} md={6}>
              <div>
              <SectionHeader
                titleVariant="h5"
                title="Professional Courses"
                subtitle="Taking up a professional course is important to improve your performance in a given career. In order to acquire more advanced and better skills, many people today go for these professional courses. It further gives you confidence along with basic information. Professional courses offer a large array of benefits, that is why it is highly recommended to enroll in such courses."
                align="left"
                disableGutter
              />
               
              <Button variant="contained" color="primary" size='medium' onClick={()=>scrollTo('course')} >
            See Courses
          </Button>
          
              </div>
            </Grid>
            <Grid item container justify="center" xs={12} sm={12} md={6}>
              <Image src='https://purpletutor.com/wp-content/uploads/2020/12/purple-tutor11.svg' alt='Professional Courses' />
            </Grid>
          </Grid>
        
      </Grid>
    </div>
  );
};

ProfessionalCourse.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ProfessionalCourse;
