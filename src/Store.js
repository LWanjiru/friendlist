import {applyMiddleware, createStore}  from 'redux';

//middlewares
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducers/DocumentReducer';

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducer, middleware, window.__REDUX_DEVTOOLS_EXTENSION__());