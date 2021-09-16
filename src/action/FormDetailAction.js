import axios from "axios";
import {
    FORM_DELETE_FAIL,
    FORM_DELETE_REQUEST,
    FORM_DELETE_SUCCESS,
    FORM_DETAIL_FAIL,
    FORM_DETAIL_ID_FAIL,
    FORM_DETAIL_ID_REQUEST,
    FORM_DETAIL_ID_SUCESS,
    FORM_DETAIL_REQUEST,
    FORM_DETAIL_SUCESS,
} from "../constants/FormDetailConstants";


export const formLists = () => async (dispatch) => {
    try {
        dispatch({ type: FORM_DETAIL_REQUEST });
        const { data } = await axios.get("http://13.233.151.81:5000/api/form/show");

        dispatch({
            type: FORM_DETAIL_SUCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FORM_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const formDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: FORM_DETAIL_ID_REQUEST });
        const { data } = await axios.get(
            `http://13.233.151.81:5000/api/form/showBy/${id}`
        );
        dispatch({
            type: FORM_DETAIL_ID_SUCESS,
            payload: data,
        });
    } catch (error) { 
        dispatch({
            type: FORM_DETAIL_ID_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
};

export const formRemove = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FORM_DELETE_REQUEST });
        await axios.delete(
            `http://13.233.151.81:5000/api/form/delete/${id}`
        );
        dispatch({
            type: FORM_DELETE_SUCCESS,

        });
    } catch (error) { 
        dispatch({
            type: FORM_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
};


export const adminFormLists = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FORM_DETAIL_REQUEST });
        const {userLogin: {userInfo},} = getState();

        const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          };

        const { data } = await axios.get(`http://13.233.151.81:5000/api/form/admin/show`, config);

        dispatch({
            type: FORM_DETAIL_SUCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FORM_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const adminFormDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FORM_DETAIL_ID_REQUEST });
        const {userLogin: {userInfo},} = getState();
        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`,
            }
        }
        const { data } = await axios.get(
            `http://13.233.151.81:5000/api/form/admin/showBy/${id}`, config
        );
        dispatch({
            type: FORM_DETAIL_ID_SUCESS,
            payload: data,
        });
    } catch (error) { 
        dispatch({
            type: FORM_DETAIL_ID_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
};