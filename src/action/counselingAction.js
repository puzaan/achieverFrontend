import axios from 'axios';
import {
    COUNSELING_CREATE_FAIL,
    COUNSELING_CREATE_REQUEST,
    COUNSELING_CREATE_SUCESS,

    COUNSELING_DELETE_FAIL,
    COUNSELING_DELETE_REQUEST,
    COUNSELING_DELETE_SUCCESS,

    COUNSELING_DETAIL_FAIL,
    COUNSELING_DETAIL_REQUEST,
    COUNSELING_DETAIL_SUCESS,

    COUNSELING_DETAIL_ID_FAIL,
    COUNSELING_DETAIL_ID_REQUEST,
    COUNSELING_DETAIL_ID_SUCESS,
} from 'constants/counseling';
import { logout } from './userAction';

export const CreateCounselling = (
    name,
    email,
    number,
    date,
    topic
) => async (dispatch) => {
    try {
        dispatch({
            type: COUNSELING_CREATE_REQUEST,
        });
        const { data } = await axios.post(
            'http://13.233.151.81:5000/api/counseling/add',
            {
                name,
                email,
                number,
                date,
                topic
            },
        );
        dispatch({
            type: COUNSELING_CREATE_SUCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: COUNSELING_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const counsellingByid = id => async (dispatch, getState) => {
    try {
        dispatch({ type: COUNSELING_DETAIL_ID_REQUEST});
        const {userLogin: {userInfo},} = getState();
        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`,
            }
        }
        const { data } = await axios.get(
            `http://13.233.151.81:5000/api/counseling/id/${id}`, config
        );
        dispatch({
            type: COUNSELING_DETAIL_ID_SUCESS,
            payload: data,
        });
    } catch (error) { 
        dispatch({
            type: COUNSELING_DETAIL_ID_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
};

export const deleteCounselling = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COUNSELING_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        await axios.delete(`http://13.233.151.81:5000/api/counseling/id/${id}`, config);
        dispatch({
            type: COUNSELING_DELETE_SUCCESS,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === 'Not Authorized! Token Failed!') {
            dispatch(logout());
        }
        dispatch({
            type: COUNSELING_DELETE_FAIL,
        });
    }
};




export const counsellingLists = () => async (dispatch, getState) => {
    try {
        dispatch({ type: COUNSELING_DETAIL_REQUEST, });
        const {userLogin: {userInfo},} = getState();

        const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          };

        const { data } = await axios.get(`http://13.233.151.81:5000/api/counseling/list`, config);

        dispatch({
            type: COUNSELING_DETAIL_SUCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (
            message === 'Not Authorized! Token Failed!' ||
            'Not authorized as an admin'
        ) {
            dispatch(logout());
        }
        dispatch({
            type: COUNSELING_DETAIL_FAIL,
            payload:
            message
        });
    }
};