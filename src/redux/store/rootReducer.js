import { combineReducers } from 'redux';
import signUpReducer from '../reducers/signUpReducer';
import apiReducer from '../reducers/apiReducer';

const rootReducer = combineReducers({
  signUpReducer,
  apiReducer,
});

export default rootReducer;
