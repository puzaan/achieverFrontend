import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../action/userAction';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        minWidth: 160,
    },
    menu:{
        minWidth: 160,
    }
}));
export default function Dropdown() {
    const classes = useStyle();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Button variant="outlined" onClick={handleClick}>
                {userInfo.name}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
                </Link>{' '}
            </Menu>
        </div>
    );
}
