import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formDetails, formRemove } from '../../action/FormDetailAction';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {

      minWidth: 275,
      width: '90%',
      
      // margin: "50px",
      borderRadius: '10px',
      padding:"50px"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    btn: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));
const FormById = ({history, match}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const formById = useSelector((state) => state.formById);
    const {form} = formById;
    const formDelete = useSelector((state) => state.formDelete);
    const {success} = formDelete
    useEffect(() => {
      if (!userInfo) {
        history.push("/");
    }
        dispatch(formDetails(match.params.id));
    }, [dispatch, match.params.id, success, userInfo, history]);

    const goBack = (e) => {
      history.push("/form");
    };
    const deletets = (id) => {
      
     dispatch(formRemove(match.params.id))
     history.push("/form");
      
    }
    return (
        <div >

<Helmet>
        <title>User Details</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
         
          <div className={classes.root}>
          <Typography variant="h4"> User Form Details</Typography>
            <Card >
      <CardContent>
        <Typography  variant="h5" component="h2">
          Name: {form.fullName}
        </Typography>
        
        <Typography variant="h5" component="h2">
          Email : {form.email}
        </Typography>
        <Typography variant="h5" component="h2">
          Contact No : {form.phone}
        </Typography>
        <Typography variant="h5" component="h2">
          Education : {form.education}
        </Typography>
        <Typography variant="h5" component="h2">
          College : {form.college}
        </Typography>
        <Typography variant="h5" component="h2">
          Course to Enroll : {form.course}
        </Typography>
        
        <Typography variant="h5" component="h2">
         Form Filled Date : {form.createdAt}
        </Typography>
        <Typography variant="h5" component="h2">
          Message : {form.message}
        </Typography>
      </CardContent>
      <div className= {classes.btn}>
      <CardActions>
        <Button size="small" onClick={goBack}>Go Back</Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick={deletets}>delete</Button>
      </CardActions>
      </div>
    </Card>
    </div>
            
        </div>
    )
}

export default FormById
