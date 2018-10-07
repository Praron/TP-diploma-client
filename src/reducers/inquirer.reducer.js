import {
    INQUIRER_REQUEST,
    INQUIRER_SUCCESS,
    INQUIRER_ERROR_SERVER,
    INQUIRER_ADD,
    TEST_ADD_SUCCESS
} from './../actions/actions-types';

const initialState = {
    isLoadingCourse: false,
    inquirers: [
        {
            tests:[
                {
                    categories: [
                        {
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

            const inquirerIndex = state.inquirers.findIndex(element => element.inquirerId === inquirerId);
            state.inquirers[inquirerIndex].tests.push(data);

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
