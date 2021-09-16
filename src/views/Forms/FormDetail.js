import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { adminFormLists} from "../../action/FormDetailAction";
//import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import Loder from 'views/Loder';
import Alerts from 'views/Alert/Alert';
import { makeStyles } from "@material-ui/styles";
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

const FormDetail = ({ history, match}) => {

    const classes = useStyle();
    const columns = [
        // { field: "_id", headerName: "ID", width: 90, hide: true},
        {
            field: "fullName",
            headerName: "Name",
            width: 140,
        },
        {
            field: "email",
            headerName: "Email",
            sortable: false,
            width: 160,
        },
        {
            field: "phone",
            headerName: "Contact No",
            sortable: false,
            width: 120,
        },
        {
            field: "education",
            headerName: "Education",
            width: 140,
            sortable: false,
        },
        {
            field: "createdAt",
            headerName: "Date",
            width: 170,
        },
        {
            field: "course",
            headerName: "Course To Enroll",
            sortable: false,
            width: 160,
        },

        {
            field: "college",
            headerName: "Collage Name",
            sortable: false,
            width: 160,
        },

        {
            field: "message",
            headerName: "Messages",
            sortable: false,
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <div>
                   
                        <Link to={`/form/${params.row._id}`}>
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

    const adminFormList = useSelector((state) => state.adminFormList);
    const { loding, error, lists } = adminFormList;
    
    // const formDelete = useSelector((state) => state.formDelete);
    // const {success} = formDelete
    useEffect(() => {

        if (userInfo && userInfo.isAdmin) {
            dispatch(adminFormLists());
        }else{
            history.push('/login?redirect=/form')
        }
        
    }, [dispatch, history, userInfo]);
    
  


    return (
        <div>
            <Helmet>
        <title>Enrollment form list</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
    
            <div style={{ height: 400, padding: "20px" }}>
                <Typography variant="h4"> All User Forms</Typography>
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

export default FormDetail;


