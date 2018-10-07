import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
    LOG_IN_ERROR_SERVER,
    USER_AUTH_SUCCESS,
    // USER_AUTH_ERROR
} from './actions-types';

import checkResponse from '../service/check-response';
import Http from '../service/http';


const loginRequest = () => ({
    type: LOG_IN_REQUEST,
});

export const loginSuccess = (data) => ({
    type: LOG_IN_SUCCESS,
    payload: data
});

const loginError = (msg) => ({
    type: LOG_IN_FAILURE,
    payload: msg
});

const loginServerError = (msg) => ({
    type: LOG_IN_ERROR_SERVER,
    payload: msg
});

const logout = () => ({
    type:  LOG_OUT
});

const checkUserSuccess = () => ({
    type: USER_AUTH_SUCCESS
});

// const checkUserError = () => ({
//     type: USER_AUTH_ERROR
// });

export function checkUser() {
    return (dispatch) =>
        Http.get('api/auth/me')
            .then((res) => {
                console.log(res);
                dispatch(checkUserSuccess());
            })
            .catch(() => dispatch(loginServerError('')));
}

export function logIn({email, password}) {
    return (dispatch) => {
        dispatch(loginRequest());
        Http.post('api/auth/login', {email, password})
            .then(res => {
                console.log(res);
                if (checkResponse(res)) {
                    dispatch(loginSuccess(res));
                } else {
                    dispatch(loginError(res));
                }
            })
            .catch((err) => {
                dispatch(loginServerError(err));
            });
    };
}

export function logOut() {
    return (dispatch) => {
        Http.post('api/auth/logout')
            .then((res) => {
                if (res.status === 'success') {
                    dispatch(logout());
                }
            })
            .catch(() => {});
    };
}
