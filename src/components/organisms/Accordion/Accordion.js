/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
    
  },
  listItem: {
    cursor: 'pointer',
  },
}));

/**
 * Component to display accordion view
 *
 * @param {*} props
 */
const Accordion = props => {
  const {
    items,
    className,
    titleProps,
    textProps,
  
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx('accordion', classes.root, className)}>
      <h2>Course Sylabus</h2>
      {items.map(item => (
        <MuiAccordion
          className={clsx('accordion__item-wrapper', classes.listItem)}
          key={item.id}
        >
          <MuiAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={item.id}
          >
            <Grid
              container
              spacing={10}
              className="accorion__item-text-container"
            >
              <Grid item xs={12} className="accorion__item-title-container">
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className="accorion_item-title"
                  {...titleProps}
                >
                  {item.title}
                </Typography>
              </Grid>
            </Grid>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <Grid
              container
              spacing={2}
              className="accordion__collapsable-text-container"
            >
              <Grid
                item
                xs={12}
                className="accordion__collapsable-text-wrapper"
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className="accordion__collapsable-text"
                  {...textProps}
                >
                  {
                    item.text.map((lst) => (
<li> {lst} </li>
                    ))
                    
                  }
                </Typography>
              </Grid>
              
            </Grid>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};

Accordion.defaultProps = {
  titleProps: {},

  textProps: {},

};

Accordion.propTypes = {
  /**
   * Classname from the parent component
   */
  className: PropTypes.string,
  /**
   * Items to show inside the accordion
   */
  items: PropTypes.array.isRequired,
  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: PropTypes.object,
  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: PropTypes.object,
  /**
   * Additional properties to pass to the text Typography component
   */
  textProps: PropTypes.object,
  /**
   * Additional properties to pass to the link component
   */
  linkProps: PropTypes.object,
};

export default Accordion;
