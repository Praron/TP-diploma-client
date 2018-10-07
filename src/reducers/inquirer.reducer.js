import {
    INQUIRER_REQUEST,
    INQUIRER_SUCCESS,
    INQUIRER_ERROR_SERVER,
    INQUIRER_ADD,
    TEST_ADD_SUCCESS, CATEGORY_ADD_SUCCESS
} from './../actions/actions-types';

import {getString} from '../service/get-string';

const initialState = {
    isLoadingCourse: false,
    inquirers: [
        {
            inquirerId: 0,
            tests: [
                {
                    testId: 0,
                    categories: [
                        {
                            categoryId: 0,
                            questions: []
                        }
                    ]
                }
            ]
        }
    ]
};

export default function inquirer(state = initialState, action) {
    switch (action.type) {
        case INQUIRER_REQUEST:
            return {
                ...state,
                isLoadingCourse: true,
            };
        case INQUIRER_SUCCESS:
            return {
                ...state,
                inquirers: action.payload,
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
                inquirers: state.inquirers.concat(action.payload)
            };
        case TEST_ADD_SUCCESS: {
            const {data, inquirerId} = action.payload;

            const inquirerIndex = state.inquirers.findIndex(element =>
                getString(element.inquirerId) === getString(inquirerId)
            );

            state.inquirers[inquirerIndex].tests.push(data);

            return {
                ...state,
                isLoadingCourse: false,
                inquirers: [...state.inquirers]
            };
        }
        case CATEGORY_ADD_SUCCESS: {
            const {data, inquirerId, testId} = action.payload;

            const inquirerIndex = state.inquirers.findIndex(element =>
                getString(element.inquirerId) === getString(inquirerId)
            );

            const testIndex = state.inquirers[inquirerIndex].tests.findIndex(element =>
                getString(element.testId) === getString(testId)
            );

            state.inquirers[inquirerIndex].tests[testIndex].categories.push(data);

            return {
                ...state,
                isLoadingCourse: false,
                inquirers: [...state.inquirers]
            };
        }
        default:
            return state;
    }
}
