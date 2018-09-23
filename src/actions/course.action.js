import {
    GET_COURSE
} from './actions-types';


export function getCourses() {
    return (dispatch) => {
        dispatch({
            type: GET_COURSE,
        });
    };
}
