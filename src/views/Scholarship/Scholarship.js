import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';
import { SectionAlternate } from 'components/organisms';
import { Application, } from './components';
import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));
const Scholarship = () => {

  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title>Scholarship Form Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
      <SectionAlternate innerNarrowed>
        <Application className={classes.pagePaddingTop} />
      </SectionAlternate>
    </div>
  );
};

export default Scholarship;
