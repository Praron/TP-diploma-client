import {
    COURSE_REQUEST,
    COURSE_SUCCESS,
    COURSE_ERROR_SERVER
} from './../actions/actions-types';

const initialState = {
    isLoading: false,
    courses: [
        // {
        //     inquirerId: 0,
        //     inquirerTitle: 'Опросник1',
        //     inquirerStartTime: '2018-07-22',
        //     inquirerEndTime: '2018-08-22',
        //
        //     tests: [
        //         {
        //             testId: 0,
        //             testTitle: 'Тест1',
        //             timeLimit: '0:40',
        //
        //             categories: [
        //                 {
        //                     categoryId: 0,
        //                     categoryTitle: 'Категория1',
        //
        //                     questions: [
        //                         {
        //                             questionId: 0,
        //                             questionTitle: 'Сколько время на Марсе?'
        //                         },
        //                         {
        //                             questionId: 1,
        //                             questionTitle: 'Почему океан глубокий'
        //                         },
        //                         {
        //                             questionId: 2,
        //                             questionTitle: 'Сколько зубов у птиц'
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ]
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
