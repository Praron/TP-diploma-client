import {
    // QUESTION_REQUEST,
    QUESTION_SUCCESS,
    // QUESTION_ERROR_SERVER
} from './actions-types';

// import Http from '../service/Http';

// const questionRequest = () => ({
//     type: QUESTION_REQUEST,
// });

export const questionSuccess = (data) => ({
    type: QUESTION_SUCCESS,
    payload: data
});

// const questionServerError = (msg) => ({
//     type: QUESTION_ERROR_SERVER,
//     payload: msg
// });

export function getQuestion(id) {
    return (dispatch) => {
        // dispatch(questionRequest());
        console.log(id);
        dispatch(questionSuccess({
            title: 'Почему океан глубокий',
            id: 0,
            type: 'checkbox',
            data: [
                {
                    answerId: 0,
                    answerTitle: 'ответ1'
                },
                {
                    answerId: 1,
                    answerTitle: 'ответ2'
                },
                {
                    answerId: 2,
                    answerTitle: 'ответ3'
                },
                {
                    answerId: 3,
                    answerTitle: 'ответ4'
                }
            ]
        }));
        // Http.get(`question/${id}`)
        //     .then(res => {
        //             dispatch(questionSuccess(res));
        //     })
        //     .catch((err) => {
        //         dispatch(questionServerError(err));
        //     });
    };
}
