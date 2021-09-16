import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid,List,ListItem, Typography, ListItemAvatar, } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const WhoWeAre = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const list = [
    'Improved Scalability',
    "Better Fault Isolation for More Resilient",
    "Application",
    "Free form Programming Language and Technology Anostic",
    "Better Data Security and Compliance",
    "Future-Proofing",
    'Greter Business Agility and Support for DevOps',
    "Support"
  ]

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
      <Grid item xs={12} sm={12} data-aos="fade-up">
          <SectionHeader
            title="About our company"
            subtitle="Achiever Group  is a full-stack technology services company focused on product engineering, data engineering, IoT, blockchain and AI. Hire us to scale your technology innovation."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Our Vision"
            subtitle="Most startups to enterprises who work on software have a huge traditional approach focused on developers i.e cater to developers over any staff by promising large salaries or even with equity share option with room for growth, bonus packages, interesting work and accommodations during moves. Their offices are filled with perks like vending machines, video games, free organic juices, pool tables and even hot tubs in some cases.
            companies cater to developers in a belief that by having the best talent on board, the best overall products will be created with overall growth resulting from this. They also try to do everything possible to prevent developers from being swooned by other companies, poached or leaving due to other reasons, such as forming their own startups
              However, they are often not in a position to focus entirely on them as they still have products to sell that need to be marketed, advertised and showcased
            We envision a future where startups, big companies and enterprises have a developer focused platform of their own."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Our Mission"
            subtitle="To provide developer focussed platforms and tools that fits all business domain. Our primary focus is on developing and enhanching our own inbuilt microservices framework that can be integrated to develop any kind of scalable applications. Our key values for application are:"
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
          <List>
            {list.map((item, index) => (
              
              <ListItem disableGutters  key = {index}data-aos="fade-up">
                  <ListItemAvatar>
                    <FiberManualRecordIcon fontSize = 'small'/>
                  </ListItemAvatar>
                  
                  <Typography
                    variant="body1"
                    color="textwhite" 
                    
                  >
{item}                 </Typography>

                </ListItem>
                
              ))}

          </List>
        </Grid>
        
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
