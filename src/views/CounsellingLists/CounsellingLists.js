import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { counsellingLists} from "action/counselingAction";
//import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import Loder from 'views/Loder';
import Alerts from 'views/Alert/Alert';
import { makeStyles } from "@material-ui/styles";
import {logout} from 'action/userAction'
import { Helmet } from "react-helmet";

const useStyle = makeStyles(() => ({
    userListEdit: {
        border: "none",
        borderRadius: "5px 10px",
        cursor: "pointer",
        marginRight: '20px',
        backgroundColor: '#3bb077',
        color: "white",
    },
}))

const CounsellingLists = ({ history, match}) => {

    const classes = useStyle();
    const columns = [
        {
            field: "name",
            headerName: "Name",
            width: 180,
        },
        {
            field: "email",
            headerName: "Email",
            sortable: false,
            width: 180,
        },
        {
            field: "number",
            headerName: "Contact No",
            sortable: false,
            width: 160,
        },
        {
            field: "topic",
            headerName: "Course for Counselling",
            width: 200,
            sortable: false,
        },
        {
            field: "date",
            headerName: "Date",
            width: 200,
        },
        
        {
            field: "action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <div>
                   
                        <Link to={`/counsellingLists/${params.row._id}`}>
                            <button className={classes.userListEdit}>View</button>
                        </Link>
                   </div>
                );
            },
        },
    ];
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const counsellingList = useSelector((state) => state.counsellingList);
    const { loding, error, lists } = counsellingList;
    
    // const formDelete = useSelector((state) => state.formDelete);
    // const {success} = formDelete
    useEffect(() => {

        if (userInfo && userInfo.isAdmin) {
            dispatch(counsellingLists());
        }else{
            history.push('/login?redirect=counsellingLists')
            dispatch(logout())
        }
        
    }, [dispatch, history,userInfo]);
    
  


    return (
        <div>
    <Helmet>
        <title>Counselling List Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
            <div style={{ height: 400,width:'90% ', padding: "20px" , marginLeft: "50px"}}>
                <Typography variant="h4"> All Counselling Lists</Typography>
                {error && <Alerts severity="error"> {error}</Alerts>}
                {loding && <Loder />}
                <DataGrid
                    rows={lists}
                    
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
};

export default CounsellingLists;

