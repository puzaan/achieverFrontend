import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DemoClassByid, deleteDemoClass } from 'action/demoClassAction';
import {logout} from 'action/userAction'
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

const DemoClassById = ({history, match}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;


    const democlassDetail = useSelector((state) => state.democlassDetail);
    const {lists} = democlassDetail;



    const democlassDelete = useSelector((state) => state.democlassDelete);
    const {success} = democlassDelete
    useEffect(() => {
      if (!userInfo && userInfo.isAdmin) {
        history.push("/login");
        dispatch(logout())
    }
        dispatch(DemoClassByid(match.params.id));
    }, [dispatch, match.params.id, success, userInfo,history]);

    const goBack = (e) => {
      
      history.push("/counsellingLists");
    };
    const deletets = (id) => {
      
    dispatch(deleteDemoClass(match.params.id))

      history.push("/counsellingLists");

    }
    return (
        <div >
          <Helmet>
        <title>Demo class list details</title>
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
          Name: {lists.name}
        </Typography>
        
        <Typography variant="h5" component="h2">
          Email : {lists.email}
        </Typography>
        <Typography variant="h5" component="h2">
          Contact No : {lists.number}
        </Typography>
        <Typography variant="h5" component="h2">
          Course : {lists.course}
        </Typography>
        <Typography variant="h5" component="h2">
          Schedual For demo class : {lists.date}
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

export default DemoClassById
