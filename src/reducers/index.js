import {combineReducers} from 'redux';
import login from './login.reducer.js';
import course from './inquirer.reducer.js';
import question from './question.reducer.js';

export default combineReducers({
    login,
    course,
    question
});
