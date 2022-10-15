import { compose, applyMiddleware } from 'redux';
import persistStore  from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';

import { legacy_createStore as createStore } from "redux"

import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage, //= storage: storage,
    whitelist: ['cart'] //string with types that you want to persist (in rootReducer const)
    //if you don't want to persist some states - change 'whitelist' to 'backlist'
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean); 


    

//Allow Redux devtool Chrome extension. If there is no Redux devtools - uses standart compose.
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);