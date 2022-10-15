import { compose, applyMiddleware } from 'redux';
import persistStore  from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { legacy_createStore as createStore } from "redux"

import { rootReducer } from './root-reducer';



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

const persistConfig = {
    key: 'root',
    storage, //= storage: storage,
    blacklist: ['user'] //string with types that you don't want to persist (in rootReducer const)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);