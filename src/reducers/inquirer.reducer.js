import {
    INQUIRER_REQUEST,
    INQUIRER_SUCCESS,
    INQUIRER_ERROR_SERVER,
    INQUIRER_ADD
} from './../actions/actions-types';

const initialState = {
    isLoadingCourse: false,
    courses: []
};

export default function course(state = initialState, action) {
    switch (action.type) {
        case INQUIRER_REQUEST:
            return {
                ...state,
                isLoadingCourse: true,
            };

        case INQUIRER_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                isLoadingCourse: false
            };

        case INQUIRER_ERROR_SERVER:
            return {
                ...state,
                errorMsg: action.payload,
                isLoadingCourse: false,
            };
        case INQUIRER_ADD:
            return {
                ...state,
                isLoadingCourse: false,
                courses: state.courses.concat(action.payload)
            };
        default:
            return state;
    }
}
