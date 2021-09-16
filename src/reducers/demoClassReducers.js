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

export const createDemoReducer = (state = {}, action) => {
    switch (action.type) {
        case DEMOCLASS_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DEMOCLASS_CREATE_SUCESS:
            return {
                loading: false,
                success: true,
                demoClassData: action.payload,
            };
        case DEMOCLASS_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const demoClassListReducer = (state = { schedual: [] }, action) => {
    switch (action.type) {
        case DEMOCLASS_DETAIL_REQUEST:
            return {
                loading: true,
                schedual: [],
            };
        case DEMOCLASS_DETAIL_SUCESS:
            return {
                loading: false,
                schedual: action.payload,
            };
        case DEMOCLASS_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const demoClassDetailReducer = (
    state = { lists: { course: [] } },
    action,
) => {
    switch (action.type) {
        case DEMOCLASS_DETAIL_ID_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case DEMOCLASS_DETAIL_ID_SUCESS:
            return {
                loading: false,
                lists: action.payload,
            };
        case DEMOCLASS_DETAIL_ID_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const demoClassDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DEMOCLASS_DELETE_REQUEST:
            return {
                loading: true,
            };
        case DEMOCLASS_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case DEMOCLASS_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
