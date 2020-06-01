import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  users: usersReducer,
});

export default createRootReducer;
