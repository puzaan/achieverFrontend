import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { DemoClasslist} from "action/demoClassAction";
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

const DemoClassLists = ({ history, match}) => {

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
            field: "course",
            headerName: "Course ",
            width: 200,
            sortable: false,
        },
        {
            field: "date",
            headerName: "Schedual For",
            width: 200,
        },
        
        {
            field: "action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <div>

                        <Link to={`/demoClassLists/${params.row._id}`}>
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

    const democlassList = useSelector((state) => state.democlassList);
    const { loding, error, schedual } = democlassList;
    
    // const formDelete = useSelector((state) => state.formDelete);
    // const {success} = formDelete
    useEffect(() => {

        if (userInfo && userInfo.isAdmin) {
            dispatch(DemoClasslist());
        }else{
            history.push('/login?redirect=demoClassLists')
            dispatch(logout())
        }
        
    }, [dispatch, history, userInfo]);
    
  


    return (
        <div>
            <Helmet>
        <title>Class Demo list</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
            <div style={{ height: 400,width:'90% ', padding: "20px" , marginLeft: "50px"}}>
                <Typography variant="h4"> Demo Class Schedual</Typography>
                {error && <Alerts severity="error"> {error}</Alerts>}
                {loding && <Loder />}
                <DataGrid
                    rows={schedual}
                    
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
};

export default DemoClassLists;

