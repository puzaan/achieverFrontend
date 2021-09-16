import axios from 'axios'
import { ENROLL_CREATE_FAIL, ENROLL_CREATE_REQUEST, ENROLL_CREATE_SUCESS } from 'constants/enrollContants'


export const EnrollForm = (fullName, email,phone,education ,college, message, course) => async(dispatch) => {
    try{
        dispatch({
            type: ENROLL_CREATE_REQUEST
        });
        const {data} = await axios.post('http://13.233.151.81:5000/api/form/add', {
            fullName, email,phone,education ,college, message, course
        })
            
        
        dispatch({
            type: ENROLL_CREATE_SUCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: ENROLL_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}