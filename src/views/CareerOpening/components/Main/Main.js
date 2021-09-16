import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  color:{
    color:'#013220'
  },

  root: {
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: '#013220',
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
  <div className={clsx(classes.root, className)}{...rest}>
          <DescriptionCta
            title={`${data.title}`}
            subtitle={`${data.jobTitle} \n ${data.location} `}
            align={'left'}
            titleProps={{
              variant: 'h3',
              className: classes.title,
              color: 'textPrimary',
            }}
            subtitleProps={{
              color: 'textPrimary',
            }}
          />
          <Divider className={classes.divider} />
          <SectionHeader
            title="Job Type"
            subtitle={data.type}
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: 'textPrimary',
            }}
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12}  data-aos="fade-up">
              <SectionHeader
                title="Requirement"
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: classes.title,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                {data.jobReq.map(req => (
                  <ListItem disableGutters data-aos="fade-up" alignItems='center' >
                    <ListItemAvatar>
                      <Avatar
                        src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="body1" color="textPrimary">
                      {req}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <SectionHeader
                title="Exprences"
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: classes.title,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                {data.exprences.map(exp => (
                  <ListItem disableGutters data-aos="fade-up">
                    <ListItemAvatar>
                      <Avatar
                        src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="body1" color="textPrimary">
                      {exp}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <SectionHeader
                title="Education Requirement"
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: classes.title,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                <ListItem disableGutters data-aos="fade-up">
                  <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    {data.educationRequirement}
                  </Typography>
                </ListItem>
              </List>

              <SectionHeader
                title="Additional Requirements"
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: classes.title,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                {data.addInfo.map(addInfo => (
                  <ListItem disableGutters data-aos="fade-up">
                    <ListItemAvatar>
                      <Avatar
                        src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="body1" color="textPrimary">
                      {addInfo}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <SectionHeader
                title="Salary"
                subtitle={data.salary}
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: classes.title,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
              />
              <SectionHeader
                title="Vacancies"
                subtitle={data.vacancy}
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: classes.title,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
              />
            </Grid>
            
          </Grid> 
        </div>
        


  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
