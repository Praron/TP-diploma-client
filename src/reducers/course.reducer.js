import {
    COURSE_REQUEST,
    COURSE_SUCCESS,
    COURSE_ERROR_SERVER
} from './../actions/actions-types';

const initialState = {
    isLoadingCourse: false,
    courses: []
};

export default function course(state = initialState, action) {
    switch (action.type) {
        case COURSE_REQUEST:
            return {
                ...state,
                isLoadingCourse: true,
            };

        case COURSE_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoadingCourse: false
            };

        case COURSE_ERROR_SERVER:
            return {
                ...state,
                errorMsg: action.payload,
                isLoadingCourse: false,
            };

        default:
            return state;
    }
}
