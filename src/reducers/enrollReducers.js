import { ENROLL_CREATE_FAIL, ENROLL_CREATE_REQUEST, ENROLL_CREATE_SUCESS } from "constants/enrollContants";

export const enrollReducer = (state= {}, action) => {
    switch(action.type){
        case ENROLL_CREATE_REQUEST:
            return{
                ...state,
                loading: true};
            case ENROLL_CREATE_SUCESS:
                return{loadin: false, sucess:true, FormData: action.payload};
                case ENROLL_CREATE_FAIL:
                    return{loading: false, error: action.payload};
                    default:
                        return state;
    }
}