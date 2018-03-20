import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const Logger = store => next => action => {
    const LOG_GROUP = 'Log: ' + (new Date()).toString();

    console.group(LOG_GROUP);
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(LOG_GROUP);

    return result;
}

export default createStore(reducers, applyMiddleware(Logger));
