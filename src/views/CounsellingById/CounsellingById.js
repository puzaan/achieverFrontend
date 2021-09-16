import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counsellingByid, deleteCounselling } from 'action/counselingAction';
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
const CounsellingById = ({history, match}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;


    const counsellingDetail = useSelector((state) => state.counsellingDetail);
    const {details} = counsellingDetail;



    const counsellingDelete = useSelector((state) => state.counsellingDelete);
    const {success} = counsellingDelete
    useEffect(() => {
      if (!userInfo && userInfo.isAdmin) {
        history.push("/login");
        dispatch(logout())
    }
        dispatch(counsellingByid(match.params.id));
    }, [dispatch, match.params.id, success,history,userInfo]);

    const goBack = (e) => {
      
      history.push("/counsellingLists");
    };
    const deletets = (id) => {
      
    dispatch(deleteCounselling(match.params.id))

  history.push("/counsellingLists");
    }
    return (
        <div >
          <Helmet>
        <title>Counselling Detail Page</title>
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
          Name: {details.name}
        </Typography>
        
        <Typography variant="h5" component="h2">
          Email : {details.email}
        </Typography>
        <Typography variant="h5" component="h2">
          Contact No : {details.number}
        </Typography>
        <Typography variant="h5" component="h2">
          Course : {details.topic}
        </Typography>
        <Typography variant="h5" component="h2">
          Schedual For demo class : {details.date}
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

export default CounsellingById
