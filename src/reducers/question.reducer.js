import {
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_ERROR_SERVER
} from './../actions/actions-types';

const initialState = {
    isLoadingQuestion: false,
    errorMsgQuestion: null,
    questionData: null
};

export default function question(state = initialState, action) {
    switch (action.type) {
        case QUESTION_REQUEST:
            return {
                ...state,
                isLoadingQuestion: true,
                questionData: null
            };

        case QUESTION_SUCCESS:
            return {
                ...state,
                questionData: action.payload,
                isLoadingQuestion: false
            };

        case QUESTION_ERROR_SERVER:
            return {
                ...state,
                errorMsgQuestion: action.payload,
                isLoadingQuestion: false,
                questionData: null
            };

        default:
            return state;
    }
}
