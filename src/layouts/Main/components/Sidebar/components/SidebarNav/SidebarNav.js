/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();


  const traningPages = pages.traning

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={`/course-detail/${page.id}`}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textPrimary"
              onClick={() => onClose()}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };


  const TraningPages = () => {
    const {
      course,
      
    } = traningPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={course} />
        </div>
      </div>
    );
  };

  

  
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem} onClick={() => onClose()}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/about"
          // href="/about"
        >
          About
        </Typography>
      </ListItem>

      <ListItem className={classes.listItem} onClick={() => onClose()}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/service"
        >
          Services
        </Typography>
      </ListItem>

      <ListItem className={classes.listItem} onClick={() => onClose()}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/career-list"
        >
          Careers
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => onClose()}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/contact"
        >
          Contact Us
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => onClose()}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Traning
        </Typography>
        <TraningPages />
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
