import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const CourAcc = props => {
    const { data } = props;
    const classes = useStyles();
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography  className={classes.heading}>Course Features</Typography>
                </AccordionSummary>
                {data.feature.map(syb => (
                    <AccordionDetails>
                        <li>
                        
                        <br />
                        {
                            syb.text.map((list)=> (
<Typography variant="subtitle1">
      {list} 
                        </Typography> 
                            ))
                        }
                        <br />
                        </li>

                    </AccordionDetails>
                    
                    
                ))}
            </Accordion>
        </div>
    );
};

export default CourAcc;
