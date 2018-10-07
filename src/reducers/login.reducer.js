import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
    LOG_IN_ERROR_SERVER,
    USER_AUTH_SUCCESS,
    USER_AUTH_ERROR
} from '../actions/actions-types';

const initialState = {
    user: null,
    isAuth: false,
    errorMsg: null,
    isLoading: false,
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                user: null,
                isLoading: true,
                errorMsg: null,
                isAuth: false
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errorMsg: null,
                isAuth: true,
                isLoading: false,
            };
        case LOG_OUT:
            return {
                ...state,
                user: null,
                errorMsg: null,
                isAuth: false,
                isLoading: false,
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                errorMsg: action.payload,
                isAuth: false,
                isLoading: false,
            };
        case LOG_IN_ERROR_SERVER:
            return {
                ...state,
                isLoadingUser: false,
                errorMsg: action.payload,
                isAuth: false,
                isLoading: false,
            };
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
            };
        case USER_AUTH_ERROR:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
}
