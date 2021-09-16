import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme,  Grid,  useMediaQuery,} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';


import {  CountUpNumber } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  quickStartSection: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  fontWeightBold: {
    fontWeight: '900',
  },
  editor: {
    paddingLeft: `${theme.spacing(2)}px !important`,
    paddingRight: `${theme.spacing(2)}px !important`,
    borderRadius: theme.spacing(1/2),
    width: '100%',
  },
  logoImg: {
    maxWidth: 100,
  },
  color:{
    
color: '#013220'
  },
}));

const QuickStart =  props => {
  const {data, className, ...rest} = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });



 

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={12} data-aos={'fade-right'}>
              <SectionHeader
                title="Achievers Groups Portfolio"
                align={isMd ? 'left' : 'center'}
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeightBold }}
                className={classes.quickStartSection}
              />
            </Grid>   
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2} direction={isMd ? 'row': 'column-reverse'}>
            <Grid item xs={12} container alignItems="center" md={12} data-aos={'fade-right'}>
              <Grid container alignItems="center" spacing={2}>
              {data.map((lst)=> (
                <Grid item xs={12} md={3}>
                  
                    <CountUpNumber
                    end={lst.end}
                    suffix={lst.suffix}
                    label={lst.lable}
                    textColor="secondary"
                    
                  />
                </Grid>
                ))}

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
