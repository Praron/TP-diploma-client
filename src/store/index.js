import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';

const middleware = [thunk, createLogger()];

const index = createStore(
    reducer,
    applyMiddleware(...middleware)
);

export default index;
