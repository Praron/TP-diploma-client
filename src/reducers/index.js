import {combineReducers} from 'redux';
import login from './login.reducer.js';
import inquirer from './inquirer.reducer.js';
import question from './question.reducer.js';

export default combineReducers({
    login,
    inquirer,
    question
});
