import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  blacklist: [''],
};

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

let persistor = persistStore(store);

export {store, persistor};
