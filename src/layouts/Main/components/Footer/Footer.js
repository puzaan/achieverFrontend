import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemText,
  
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {contacts} from '../../../../views/About/data'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(14, 0),
    },
    background: theme.palette.background.footer,
  },

  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
    
  },
  logoContainer: {
    width: 200,
    height: 50,
  },
  logoImage: {
    marginTop: '50px',
    width: '200px',
    height: '50',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    marginTop: '50px',
    paddingTop: '20px',
    padding: 0,
    marginRight: theme.spacing(1),
    
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
    color: 'white'
    
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,

    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
  tcolor: {
    color: 'white',
  },
  middle: {
    alignContent: 'center',
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  const traningPages = pages.traning;

  const MenuGroup = props => {

    


    const { item } = props;
    return (
      <List>
        
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={`/course-detail/${page.id}`}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const TraningPages = () => {
    const { course } = traningPages.children;
    return <MenuGroup item={course} />;
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} >
            <List  >
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="Achievers Groups">
                    <img
                      src={'/Achiever_Groups_LIGHT.png'}
                      alt="Acheiver"
                      className={classes.logoImage}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <a href='https://www.facebook.com/achievergroups' target="_blank">
                  <FacebookIcon className={classes.icon} />
                  </a>
                </IconButton>
                
                <IconButton className={classes.socialIcon}>
                <a href=" https://www.instagram.com/achievergroups/" target="_blank">
                  <InstagramIcon className={classes.icon} />
                  </a>
                </IconButton>
                {/* <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton> */}
                <IconButton className={classes.socialIcon}>
                  <a href='https://www.google.com/maps/place/Achiever+Groups+Software+%26+Research+Centre/@27.7021308,85.3203425,700m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39eb195da1bc6e81:0x554ecdb446d5b245!8m2!3d27.7021308!4d85.3222312' target='_blank' >
                  <LocationOnIcon className={classes.icon} />
                  </a>
                </IconButton>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={3} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              
              <List disablePadding>
                <Typography
                  color="textPrimary"
                  className={classes.menuGroupTitle}
                  
                  
                >
                  Usefull Links
                </Typography>
                <ListItem
                  className={classes.menuGroupItem}
                  disableGutters
                  data-aos="fade-up"
                >
                  <Typography
                    
                    className={clsx(classes.navLink, 'submenu-item')}
                    component={Link}
                    to="/about"
                  >
                    About
                  </Typography>
                </ListItem>
                <ListItem
                  className={classes.menuGroupItem}
                  disableGutters
                  data-aos="fade-up"
                >
                  <Typography
                    
                    className={clsx(classes.navLink, 'submenu-item')}
                    component={Link}
                    to="/service"
                  >
                    Services
                  </Typography>
                </ListItem>
                
                <ListItem
                  className={classes.menuGroupItem}
                  disableGutters
                  data-aos="fade-up"
                >
                  <Typography
                    color="textPrimary"
                    className={clsx(classes.navLink, 'submenu-item')}
                    component={Link}
                    to="/career-list"
                  >
                    Career
                  </Typography>
                </ListItem>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <TraningPages />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          
          <Grid item xs={12} md={3} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <List disablePadding>
                <Typography
                  color="textPrimary"
                  className={classes.menuGroupTitle}
                  
                >
                  Contact Us
                </Typography>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <ListItemText
                    primary="Phone"
                    secondary={contacts.phone}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                  />
                </ListItem>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <div>
                    <a>
                  <ListItemText
                    primary="Email"
                    secondary={contacts.email}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                  />
                  </a>
                  </div>
                </ListItem>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <div>
                    <a href='https://www.google.com/maps/place/Achiever+Groups+Software+%26+Research+Centre/@27.7021355,85.3200425,700m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39eb195da1bc6e81:0x554ecdb446d5b245!8m2!3d27.7021308!4d85.3222312' target="_blank">
                  <ListItemText
                    primary="Office"
                    secondary={contacts.address}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                  />
                  </a>
                  </div>
                </ListItem>
              
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <div>
                    <a href='https://www.facebook.com/achievergroups'  target="_blank">
                  <ListItemText
                    primary="Facebook Page"
                    secondary={contacts.facebook}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                  />
                  </a>
                  </div>
                </ListItem>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <div>
                    <a href='https://www.instagram.com/achievergroups/' target="_blank">
                  <ListItemText
                    primary="Instagram Page"
                    secondary={contacts.instagram}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                  />
                  </a>
                  </div>
                </ListItem>
              
              
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <List disablePadding>
                <Typography
                  color="textPrimary"
                  className={classes.menuGroupTitle}
                  
                >
                  Our Services
                </Typography>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <ListItemText
                    primary="App Development"
                    
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    
                  />
                </ListItem>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <ListItemText
                    primary="Web Devlopment"
                    
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                    
                  />
                </ListItem>
                <ListItem
                  className={classes.menuListContainer}
                  disableGutters
                  data-aos="fade-up"
                >
                  <ListItemText
                    primary="Research"
                    
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      color: 'textSecondary',
                    }}
                   
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        
        </Grid>
        
      </div>
      
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
