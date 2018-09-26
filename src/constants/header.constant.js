import {
    VIDEO,
    INQUIRER,
    RESULT,
    LOGOUT
} from '../constants/routes-map.constant';

export const MENU_ITEMS = [
    {
        text: 'Опросник',
        size: 'medium',
        type: 'default',
        pathTo: INQUIRER ,
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
