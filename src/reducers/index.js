import { combineReducers } from 'redux';

import Login from './Login';
import nav from './nav';

const rootReducer = combineReducers({
  Login,
  nav,
});

export default rootReducer;