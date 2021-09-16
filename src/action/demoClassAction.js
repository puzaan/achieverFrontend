import axios from 'axios';
import {
    DEMOCLASS_CREATE_FAIL,
    DEMOCLASS_CREATE_REQUEST,
    DEMOCLASS_CREATE_SUCESS,
    DEMOCLASS_DELETE_FAIL,
    DEMOCLASS_DELETE_REQUEST,
    DEMOCLASS_DELETE_SUCCESS,
    DEMOCLASS_DETAIL_FAIL,
    DEMOCLASS_DETAIL_ID_FAIL,
    DEMOCLASS_DETAIL_ID_REQUEST,
    DEMOCLASS_DETAIL_ID_SUCESS,
    DEMOCLASS_DETAIL_REQUEST,
    DEMOCLASS_DETAIL_SUCESS,
} from 'constants/demoClass';
import { logout } from './userAction';

export const createDemoClass = (
    name,
    email,
    number,
    course,
    date,
) => async dispatch => {
    try {
        dispatch({
            type: DEMOCLASS_CREATE_REQUEST,
        });
        const { data } = await axios.post(
            'http://13.233.151.81:5000/api/scedual/add',
            {
                name,
                email,
                number,
                course,
                date,
            },
        );
        dispatch({
            type: DEMOCLASS_CREATE_SUCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DEMOCLASS_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const DemoClassByid = id => async (dispatch, getState) => {
    try {
        dispatch({ type: DEMOCLASS_DETAIL_ID_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `http://13.233.151.81:5000/api/scedual/id/${id}`,
            config,
        );
        dispatch({
            type: DEMOCLASS_DETAIL_ID_SUCESS,
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
            type: DEMOCLASS_DETAIL_ID_FAIL,
            payload: message,
        });
    }
};

export const deleteDemoClass = id => async (dispatch, getState) => {
    try {
        dispatch({
            type: DEMOCLASS_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        await axios.delete(
            `http://13.233.151.81:5000/api/scedual/id/${id}`,
            config,
        );
        dispatch({
            type: DEMOCLASS_DELETE_SUCCESS,
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
            type: DEMOCLASS_DELETE_FAIL,
        });
    }
};

export const DemoClasslist = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DEMOCLASS_DETAIL_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(
            `http://13.233.151.81:5000/api/scedual/list`,
            config,
        );

        dispatch({
            type: DEMOCLASS_DETAIL_SUCESS,
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
            type: DEMOCLASS_DETAIL_FAIL,
            payload: message,
        });
    }
};
