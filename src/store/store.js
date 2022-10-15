import { compose, applyMiddleware } from 'redux';
import persistStore  from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { legacy_createStore as createStore } from "redux"

import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage, //= storage: storage,
    blacklist: ['user'] //string with types that you don't want to persist (in rootReducer const)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(
    Boolean
    ); //the same logger that we made is in middleware folder
       //if I don't need redux console.logs, just change 'production' to 'development'

    

//Allow Redux devtool Chrome extension. If there is no Redux devtools - uses standart compose.
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);