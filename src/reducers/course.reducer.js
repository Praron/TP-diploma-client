import {GET_COURSE} from '../actions/actions-types';

const initialState = {
    courses: [
        {
            name: 'Опросник1',
            tests: [
                {
                    name: 'Тест1',
                    categories: [
                        {
                            name: 'Категория1',
                            issues: [
                                'Сколько время на Марсе?',
                                'Почему океан глубокий',
                                'Сколько зубов у птиц'
                            ]
                        },
                        {
                            name: 'Категория2',
                            issues: [
                                'Сколько время на Марсе?',
                                'Почему океан глубокий',
                                'Сколько зубов у птиц'
                            ]
                        },
                        {
                            name: 'Категория3',
                            issues: [
                                'Сколько время на Марсе?',
                                'Почему океан глубокий',
                            ]
                        },
                    ]
                },
                {
                    name: 'Тест2',
                    categories: [
                        {
                            name: 'Категория1',
                            issues: [
                                'Сколько время на Марсе?',
                                'Почему океан глубокий',
                                'Сколько зубов у птиц'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Опросник2',
            tests: [
                {
                    name: 'Тест1',
                    categories: [
                        {
                            name: 'Категория1',
                            issues: [
                                'Сколько время на Марсе?',
                                'Почему океан глубокий',
                                'Сколько зубов у птиц'
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};

export default function document(state = initialState, action) {
    switch (action.type) {
        case GET_COURSE:
            return state;
    }

    return state;
}
