import {
    INQUIRER_REQUEST,
    INQUIRER_SUCCESS,
    INQUIRER_ERROR_SERVER,
    INQUIRER_ADD
} from './actions-types';

import Http from '../service/Http';

const inquirerRequest = () => ({
    type: INQUIRER_REQUEST,
});

export const inquirerSuccess = (data) => ({
    type: INQUIRER_SUCCESS,
    payload: data
});

const inquirerServerError = (msg) => ({
    type: INQUIRER_ERROR_SERVER,
    payload: msg
});

const inquirerAdd = (data) => ({
    type: INQUIRER_ADD,
    payload: data
});

export function addTest() {
    return (dispatch) => {
        dispatch(inquirerRequest());
    };
}

export function addInquirer(data) {
    return (dispatch) => {
        dispatch(inquirerAdd(data));
    };
}

export function getInquirer() {
    return (dispatch) => {
        dispatch(inquirerRequest());
        //
        // dispatch(inquirerSuccess({
        //     inquirers: [
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
        Http.get('api/admin/testing/inquirer')
            .then(res => {

                    console.log(res);

                    dispatch(inquirerSuccess(res));
            })
            .catch((err) => {
                dispatch(inquirerServerError(err));
            });
    };
}
