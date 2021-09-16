import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        // use for sending email and password
        // const { data } = await axios.post("http://13.233.151.81:5000/api/users/admin", {
        //     email,
        //     password,
        // });
        const { data } = await axios.post("http://localhost:5000/api/users/admin", {
            email,
            password,
        });
        dispatch({
            type: USER_LOGIN_SUCESS,
            payload: data,
        });
        // save user info into local storage name as usnerInfo
        localStorage.setItem("userInfo", JSON.stringify(data));
        //to save token only
        //localStorage.setItem("token", JSON.stringify(data.token));
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

// remove item from localStorage
export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    
    dispatch({
        type: USER_LOGIN_LOGOUT,
    });
    
};