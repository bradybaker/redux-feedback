import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const nameReducer = (state = {}, action) => {
    if (action.type === 'NAME') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = {}
    } //end if
    return state
}

const feelingReducer = (state = {}, action) => {
    if (action.type === 'FEELING') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = {}
    } //end if
    return state
}

const understandingReducer = (state = {}, action) => {
    if (action.type === 'UNDERSTANDING') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = {}
    }//end if
    return state
}

const supportReducer = (state = {}, action) => {
    if (action.type === 'SUPPORT') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = {}
    }//end if
    return state
}

const commentReducer = (state = {}, action) => {
    if (action.type === 'COMMENT') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = {}
    }//end if
    return state
}

const responseReducer = (state = [], action) => {
    if (action.type === 'GET_RESPONSES') {
        return action.payload
    }//end if
    return state
}

const storeInstance = createStore(
    combineReducers({
        nameReducer,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        responseReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
