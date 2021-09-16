import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped, Map } from 'components/organisms';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {contacts} from '../../../About/data';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title="Contact us for information"
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                <Avatar
                  >
                    <CallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Phone"
                  secondary={contacts.phone}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                   
                  >
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary={contacts.email}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                <Avatar
                   
                   >
                     <LocationOnIcon />
                   </Avatar>
                </ListItemAvatar>
                <div>
                  <a href='https://www.google.com/maps/place/Achiever+Groups+Software+%26+Research+Centre/@27.7021355,85.3200425,700m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39eb195da1bc6e81:0x554ecdb446d5b245!8m2!3d27.7021308!4d85.3222312' target="_blank">
                <ListItemText
                  primary="Head Office"
                  secondary={contacts.address}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
                </a>
                </div>
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                <Avatar
                   
                   >
                     <FacebookIcon />
                   </Avatar>
                </ListItemAvatar>
                <div>
                <a href='https://www.facebook.com/achievergroups' target="_blank"> 
                <ListItemText
                  primary="Facebook Page"
                  secondary={contacts.facebook}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
                </a>
               </div>
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                <Avatar
                   
                   >
                     <InstagramIcon />
                   </Avatar>
                </ListItemAvatar>
                <div>
                <a href = 'https://www.instagram.com/achievergroups/' target="_blank">
                <ListItemText
                  primary="Instagram Page"
                  secondary={contacts.instagram}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
                </a>
                </div>
              </ListItem>
              
            </List>
          </div>
        }
        rightSide={
          <Map
            center={[27.7021308,85.3222312]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
