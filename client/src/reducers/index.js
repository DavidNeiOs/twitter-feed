import { combineReducers } from 'redux';
import usersReducer from './users';
import visibleReducer from './visible';

export default combineReducers({
  users: usersReducer,
  visible: visibleReducer,
});
