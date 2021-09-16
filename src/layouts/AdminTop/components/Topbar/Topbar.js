import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {  DarkModeToggler } from 'components/atoms';
import Dropdown from './Dropdown';
import NativeSelects from './NativeSelects'
const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(2),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 280,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 30,
    [theme.breakpoints.up('md')]: {
      width: 100,
      height: 30,
    },
  },
  logoImage: {
    width: '150px',
    height: '50',
    marginTop:'-15px'
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(1),
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
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [openedPopoverId, setOpenedPopoverId] = useState(null);

  // const handleClick = (event, popoverId) => {
  //   setAnchorEl(event.target);
  //   setOpenedPopoverId(popoverId);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setOpenedPopoverId(null);
  // };


  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/dashboard" title="Achievers Group">
      <img src={
              themeMode === 'light'
                ? '/Achiever_Groups_DARK.png'
                : '/Achiever_Groups_LIGHT.png'
            } alt="Acheiver" 
          className={classes.logoImage}
            />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(classes.listItemText, 'menu-item')}
              component={Link}
              to="/dashboard"
            >
              Dashboard
            </Typography>
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(classes.listItemText, 'menu-item')}
              component={Link}
              to="/form"
            >
              Forms Details
            </Typography>
          </ListItem>
          
          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              className={clsx(classes.listItemText, 'menu-item')}
              component={Link}
              to="/form"
            >
              Users Detail
            </Typography>
          </ListItem>
          <ListItem>
            <NativeSelects />

          </ListItem>
          <ListItem
                    className={clsx(classes.listItem, 'menu-item--no-dropdown')}

          >
            <Dropdown />
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <DarkModeToggler
              themeMode={themeMode}
              onClick={() => themeToggler()}
            />
          </ListItem>
          
        </List>
      </Hidden>
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
