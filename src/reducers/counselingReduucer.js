const {
    COUNSELING_CREATE_REQUEST,
    COUNSELING_CREATE_SUCESS,
    COUNSELING_CREATE_FAIL,
    COUNSELING_DETAIL_REQUEST,
    COUNSELING_DETAIL_FAIL,
    COUNSELING_DETAIL_SUCESS,
    COUNSELING_DETAIL_ID_SUCESS,
    COUNSELING_DELETE_SUCCESS,
    COUNSELING_DETAIL_ID_FAIL,
    COUNSELING_DETAIL_ID_REQUEST,
    COUNSELING_DELETE_FAIL,
    COUNSELING_DELETE_REQUEST,
    COUNSELING_DETAIL_RESET,
} = require('constants/counseling');

export const createCounseling = (state = {}, action) => {
    switch (action.type) {
        case COUNSELING_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case COUNSELING_CREATE_SUCESS:
            return {
                loading: false,
                success: true,
                counselingData: action.payload,
            };
        case COUNSELING_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export const counsellingListReducer = (state = { lists: [] }, action) => {
    switch (action.type) {
        case COUNSELING_DETAIL_REQUEST:
            return {
                loading: true,
                lists: [],
            };
        case COUNSELING_DETAIL_SUCESS:
            return {
                loading: false,
                lists: action.payload,
            };
        case COUNSELING_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
            case COUNSELING_DETAIL_RESET:
                return {
                    lists: []

                }
        default:
            return state;
    }
};

export const counsellingDetailReducer = (
    state = { details: { topic: []} },
    action,
) => {
    switch (action.type) {
        case COUNSELING_DETAIL_ID_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case COUNSELING_DETAIL_ID_SUCESS:
            return {
                loading: false,
                details: action.payload,
            };
        case COUNSELING_DETAIL_ID_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const counsellingDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNSELING_DELETE_REQUEST:
            return {
                loading: true,
            };
        case COUNSELING_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case COUNSELING_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
