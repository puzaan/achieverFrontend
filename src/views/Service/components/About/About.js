import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid,} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import {servces} from '../../data'

const useStyles = makeStyles(theme => ({
  headerSection:{
marginBottom: '150px'
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  promoLogo: {
    maxWidth: 100,
  },
dowmMargin:{
marginBottom: '20px'
},
  video: {
    position: 'relative',
  },
  videoCover: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
    opacity: '0.3',
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
  },
  videoPlayButton: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: 70,
    zIndex: 1300,
    boxShadow: `0 8px 21px 0 ${theme.palette.cardShadow}`,
    borderRadius: '100%',
  },
  videoIframe: {
    boxShadow: `0 5px 12px 0 ${theme.palette.cardShadow}`,
    borderRadius: '20px',

  },
}));

const About = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
      className = {classes.headerSection}
        title="Web and Mobile Software Development Services"
        subtitle="A successful AchieversGroups software application development company, providing a full range of website and mobile app development,and other IT services and solutions globally."
      />
      
      <Grid container justify="center">
        {servces.map((item, index) => (
          <Grid
            data-aos="fade-up"
            key={index}
            item
            container
            xs={12}
            spacing={isMd ? 4 : 2}
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={12} md={6}>
              <SectionHeader
                titleVariant="h5"
                title={item.title}
                subtitle={item.body}
                // ctaGroup={[<LearnMoreLink title="Learn more" variant="h6" />]}
                align="left"
                disableGutter
              />

            </Grid>
            <Grid item container justify="center" xs={12} sm={12} md={6}>
              <Image src={item.image} alt= {item.title}
            //   {
            //   <ReactPlayer url={item.url} 
            // controls 
          
            // className={classes.videoIframe}
            
            // />} 
            />
            </Grid>
          </Grid>
        ))}
        
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default About;
