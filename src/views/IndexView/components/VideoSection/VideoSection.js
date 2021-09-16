import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid,Button } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  color:{
    
color: '#013220'
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
  videoIframe: {
    boxShadow: `0 5px 12px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
  },
  listGrid: {
    overflow: 'hidden',
  },
  partnerImage: {
    maxWidth: 120,
  },
}));

const VideoSection = props => {
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
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        className={classes.listGrid}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
              //  align='left'
                title="We have recently conducted Machine learning workshops from the experience  machine learning engineers from the global market ;
                (keeping the video of the machine learning workshop).
                "
                subtitle="Artificial Intelligence (AI), Data Science (DS), and Machine Learning (ML) are the pillars of the Fourth Industrial Revolution, or what is commonly known as Industry 4.0. AI is a branch of Computer Science that deals with the ability of a machine to closely imitate intelligent human behavior. ML is an application of AI that is based on the idea that when machines are provided new data, they can learn, grow, and develop on their own without explicit human intervention/programming."
                ctaGroup={[
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    onClick={()=>scrollTo('course')}
                    
                  >
                    See Courses
                  </Button>,
                  
                ]}
                align={isMd ? 'left' : 'left'}
                disableGutter
              />
            </Grid>

            {/* <Grid item xs={12}>
              <Grid container spacing={2} data-aos="fade-up">
                <Grid item xs={12}>
                  <Typography
                  
                    variant="h6"
                    color="primary"
                    align={isMd ? 'left' : 'center'}
                  >
                    Our sponsors and partners
                  </Typography>
                </Grid>
                <Grid item container justify="space-between" xs={12}>
                  {data.map((partner, index) => (
                    <Grid
                      item
                      container
                      justify="center"
                      xs={6}
                      sm={2}
                      key={index}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className={classes.partnerImage}
                        lazy={false}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
         
          */}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container justify="center">
            
            <ReactPlayer url='https://www.youtube.com/watch?v=lfZW0JmQiks'
            controls 
          
            className={classes.videoIframe}
            
            />
          </Grid>
        </Grid>
      
      </Grid>
    </div>
  );
};

VideoSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default VideoSection;
