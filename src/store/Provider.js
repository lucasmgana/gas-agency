/* eslint-disable prettier/prettier */
import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';

import {authReducer} from './reducers/authenticationReducer';
import thunk from 'redux-thunk';

const StoreProvider = ({children}) => {
  const mainReducer = combineReducers({
    authState: authReducer,
  });

  const store = createStore(mainReducer, applyMiddleware(thunk));

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
