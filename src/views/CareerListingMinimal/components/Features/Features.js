import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  
  grid: {
    maxWidth: '100%',
    background: theme.palette.primary.main,
  },
  textWhite: {
    color: 'white',
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Image
            src="https://assets.maccarianagency.com/the-front/photos/careers/team.png"
            srcSet="https://assets.maccarianagency.com/the-front/photos/careers/team@2x.png 2x"
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <>
            <SectionHeader
              title="Our mission is to be a role model technology company."
              align="left"
              data-aos="fade-up"
              titleProps={{
                className: clsx(classes.textWhite, classes.title),
              }}
              subtitleProps={{
                className: classes.textWhite,
              }}
            />
            <List>
              {/* {data.map((item, index) => ( */}
                <ListItem disableGutters  data-aos="fade-up">
                  {/* <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      
                      
                    />
                  </ListItemAvatar> */}
                  <Typography
                    variant="body1"
                    color="textwhite" 
                    className= {classes.textWhite}
                  >
                   But mainly we want to be great; defined by the brilliant Leapfroggers that we work with, unrelenting pride in craftsmanship, and creating impact in industries and ecosystems. And we're just getting started. If you can flat out code, design, and understand and embrace complex business and technical problems - please keep reading.
                  </Typography>
                </ListItem>
              {/* // ))} */}
            </List>
            </>
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Features;
