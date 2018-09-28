import {
    // LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    // LOG_IN_FAILURE,
    LOG_OUT,
    // LOG_IN_ERROR_SERVER
} from './actions-types';

//TODO соеденить с бэком, убрать комментарии

// import checkResponse from '../service/check-response';
// import Http from '../service/Http';


// const loginRequest = () => ({
//     type: LOG_IN_REQUEST,
// });

export const loginSuccess = (data) => ({
    type: LOG_IN_SUCCESS,
    payload: data.user
});

// const loginError = (msg) => ({
//     type: LOG_IN_FAILURE,
//     payload: msg.message
// });
//
// const loginServerError = (msg) => ({
//     type: LOG_IN_ERROR_SERVER,
//     payload: msg
// });

const logout = () => ({
    type:  LOG_OUT
});

export function logIn({email, password}) {
    return (dispatch) => {
        // dispatch(loginRequest());
        dispatch(loginSuccess({user: `top ${email} ${password}`}));
        // Http.post('login', {email, password})
        //     .then(res => {
        //         if (checkResponse(res)) {
        //             dispatch(loginSuccess(res));
        //         } else {
        //             dispatch(loginError(res));
        //         }
        //     })
        //     .catch((err) => {
        //         dispatch(loginServerError(err));
        //     });
    };
}

export function logOut() {
    return (dispatch) => {
        dispatch(logout());
    };
}
