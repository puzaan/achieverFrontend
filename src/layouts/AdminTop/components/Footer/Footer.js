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


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0),
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
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
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
                    secondary="+39 659-657-0133"
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
                  <ListItemText
                    primary="Email"
                    secondary="hi@maccarianagency.com"
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
                  <ListItemText
                    primary="Office"
                    secondary="Putalisadak, kathmandu Nepal"
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
