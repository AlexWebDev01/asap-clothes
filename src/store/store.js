import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from "redux"
import { rootReducer } from './root-reducer';
// import logger from 'redux-logger';



const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('current state: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);