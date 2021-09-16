import React from 'react';
import PropTypes from 'prop-types';
import { Grid, colors, makeStyles,Button } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';


const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 1000,
    
  },
  btn: {
    background: '#013220',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: 'black',
      color: 'white'

    }
    
  },
  btnGrid:{
    
    marginTop:'50px'
  },
  color:{
    color:'#013220'
  },
}));



const data = [ {
  icon: 'fas fa-palette',
  color: colors.green,
  title: 'Digital Consulting',
  subtitle: 'Our research based and goal driven approach in consulting, lays the perfect foundation and strategy.',
}, {
  icon: 'fas fa-code',
  color: colors.indigo,
  title: `Web Design & Development`,
  subtitle: 'Be it complex web applications, or informative lead-gen websites, we have a portfolio which speaks.',
}, {
  icon: 'fas fa-moon',
  color: colors.green,
  title: 'Mobile App Solutions',
  subtitle: 'Immersive mobile app solutions, that transforms businesses and deliver great customer experience.',
}, {
  icon: 'fas fa-rocket',
  color: colors.indigo[50],
  title: 'UX/UI Design',
  subtitle: 'World Class UX/UI Design solutions, following the best-in-class process and practices.',
}, {
  icon: 'fas fa-hand-holding-heart',
  color: colors.indigo,
  title: `Custom Software Development`,
  subtitle: 'Expert engineered, robust & custom tailored software, that are ready to fulfill business goals.',
}];

const Features = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our Services"
        subtitle='End-to-end expertise across the digital ecosystem.'
        fadeUp
        titleProps={{
          variant: 'h3',
          color: 'textPrimary',
          className: classes.fontWeight900,

        }}
      />
      <Grid container spacing={2}>
        {data.map((adv, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            md={4}
            data-aos="fade-up"
          >
            <CardBase
            className={classes.color}
              liftUp
              variant="outlined"
              style={{ borderTop: `5px solid`}}
            >
              <DescriptionListIcon
                icon={
                  <IconAlternate
                  className={classes.color}
                    fontIconClass={adv.icon}
                    color='colors.green'
                    shape="circle"
                    size="small"
                  />
                }
                title={adv.title}
                subtitle={adv.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
      
      <Grid item container justify="center" xs={12} className={classes.btnGrid}>
          <Button variant="contained" color="primary" href='/service'>
            Read More
          </Button>
        </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
