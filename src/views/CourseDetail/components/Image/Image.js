import React from 'react';
import PropTypes from 'prop-types';
import { Grid,} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(()=> ({
    logoImage:{
        width:'100%',
        height:'100%'
    }
}))
const Image = props => {
    const classes = useStyles();
    const { data,className, ...rest } = props;
    return (
        <div className={className} {...rest}>
            
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                        <img
                            src={data.courseImage}
                            alt={data.alt}
                            className={classes.logoImage}
                        />
                    </Grid>
                </Grid>
            
        </div>
    );
};
Image.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default Image;
