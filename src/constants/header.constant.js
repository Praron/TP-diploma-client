import {
    VIDEO,
    COURSE,
    RESULT,
    LOGOUT
} from '../constants/routes-map.constant';

export const MENU_ITEMS = [
    {
        text: 'Курсы',
        size: 'medium',
        type: 'default',
        pathTo: COURSE,
    },
    {
        text: 'Проверить тесты',
        size: 'medium',
        type: 'default',
        pathTo: VIDEO,
    },
    {
        text: 'Результаты',
        size: 'medium',
        type: 'default',
        pathTo: RESULT,
    },
    {
        center: '_center'
    },
    {
        text: 'Выход',
        size: 'medium',
        type: 'default',
        pathTo: LOGOUT,
    },
];
