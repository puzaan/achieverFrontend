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

export const formListReducer = (state = { lists: [] }, action) => {
    switch (action.type) {
        case FORM_DETAIL_REQUEST:
            return { loding: true, lists: [] };
        case FORM_DETAIL_SUCESS:
            return { loding: false, lists: action.payload };
        case FORM_DETAIL_FAIL:
            return { loding: false, error: action.payload };
        default:
            return state;
    }
};

export const formDetailReducer = (state = { form: { course: [] } }, action) => {
    switch (action.type) {
        case FORM_DETAIL_ID_REQUEST:
            return { loading: true, ...state };
        case FORM_DETAIL_ID_SUCESS:
            return { loading: false, form: action.payload };
        case FORM_DETAIL_ID_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const formDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_DELETE_REQUEST:
            return { loading: true};
        case FORM_DELETE_SUCCESS:
            return { loading: false, success: true};
        case FORM_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const adminFormListReducer = (state = { lists: [] }, action) => {
    switch (action.type) {
        case FORM_DETAIL_REQUEST:
            return { loding: true, lists: [] };
        case FORM_DETAIL_SUCESS:
            return { loding: false, lists: action.payload };
        case FORM_DETAIL_FAIL:
            return { loding: false, error: action.payload };
        default:
            return state;
    }
};