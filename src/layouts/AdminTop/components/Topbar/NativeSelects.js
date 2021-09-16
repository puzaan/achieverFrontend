import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        
    },
    
}));
export default function NativeSelects() {
    const classes = useStyle();
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
                Schedal 
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <Link to="/demoClassLists" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose} >Demo Class Schedual</MenuItem>
                </Link>
                <Link to="/counsellingLists" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose} >Counselling Schedual</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
