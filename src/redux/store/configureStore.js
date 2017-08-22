import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const store = createStore(rootReducer, enhancer);
  return store;
};

export default configureStore;
