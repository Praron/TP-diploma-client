import {
    COURSE_REQUEST,
    COURSE_SUCCESS,
    COURSE_ERROR_SERVER
} from './actions-types';

import Http from '../service/Http';

const courseRequest = () => ({
    type: COURSE_REQUEST,
});

export const courseSuccess = (data) => ({
    type: COURSE_SUCCESS,
    payload: data
});

const courseServerError = (msg) => ({
    type: COURSE_ERROR_SERVER,
    payload: msg
});

export function getInquirer() {
    return (dispatch) => {
        dispatch(courseRequest());
        //
        // dispatch(courseSuccess({
        //     courses: [
        //         {
        //             inquirerId: 0,
        //             inquirerTitle: 'Опросник1',
        //             inquirerStartTime: '2018-07-22',
        //             inquirerEndTime: '2018-08-22',
        //
        //             tests: [
        //                 {
        //                     testId: 0,
        //                     testTitle: 'Тест1',
        //                     timeLimit: '00:00:32',
        //
        //                     categories: [
        //                         {
        //                             categoryId: 0,
        //                             categoryTitle: 'Категория1',
        //
        //                             questions: [
        //                                 {
        //                                     questionId: 0,
        //                                     questionTitle: 'Сколько время на Марсе?'
        //                                 },
        //                                 {
        //                                     questionId: 1,
        //                                     questionTitle: 'Почему океан глубокий'
        //                                 },
        //                                 {
        //                                     questionId: 2,
        //                                     questionTitle: 'Сколько зубов у птиц'
        //                                 }
        //                             ]
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             inquirerId: 2,
        //             inquirerTitle: 'Опросник2',
        //             inquirerStartTime: '2018-07-22',
        //             inquirerEndTime: '2018-08-22',
        //
        //             tests: [
        //                 {
        //                     testId: 0,
        //                     testTitle: 'Тест1',
        //                     timeLimit: '00:00:32',
        //
        //                     categories: [
        //                         {
        //                             categoryId: 0,
        //                             categoryTitle: 'Категория1',
        //
        //                             questions: [
        //                                 {
        //                                     questionId: 0,
        //                                     questionTitle: 'Сколько время на Марсе?'
        //                                 },
        //                                 {
        //                                     questionId: 1,
        //                                     questionTitle: 'Почему океан глубокий'
        //                                 },
        //                                 {
        //                                     questionId: 2,
        //                                     questionTitle: 'Сколько зубов у птиц'
        //                                 }
        //                             ]
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // }));

        Http.get('api/admin/testing/inquirer')
            .then(res => {

                    console.log(res);

                    dispatch(courseSuccess(res));
            })
            .catch((err) => {
                dispatch(courseServerError(err));
            });
    };
}
