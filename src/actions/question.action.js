import {
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_ERROR_SERVER
} from './actions-types';

import Http from '../service/http';

const questionRequest = () => ({
    type: QUESTION_REQUEST,
});

export const questionSuccess = (data) => ({
    type: QUESTION_SUCCESS,
    payload: data
});

const questionServerError = (msg) => ({
    type: QUESTION_ERROR_SERVER,
    payload: msg
});

export function getQuestion(id) {
    return (dispatch) => {
        dispatch(questionRequest());
        // console.log(id);
        // dispatch(questionSuccess({
        //     title: 'Почему океан глубокий',
        //     id: 5,
        //     type: 'checkbox',
        //     answers: [
        //         {
        //             answerId: 0,
        //             answerTitle: 'ответ1',
        //             answerScore: '1'
        //         },
        //         {
        //             answerId: 1,
        //             answerTitle: 'ответ2',
        //             answerScore: '5'
        //         },
        //         {
        //             answerId: 2,
        //             answerTitle: 'ответ3',
        //             answerScore: '4'
        //         },
        //         {
        //             answerId: 3,
        //             answerTitle: 'ответ4',
        //             answerScore: '5'
        //         }
        //     ]
        // }));
        Http.get(`api/admin/testing/question/${id}`)
            .then(res => {
                    dispatch(questionSuccess(res));
            })
            .catch((err) => {
                dispatch(questionServerError(err));
            });
    };
}
