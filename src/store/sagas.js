import { takeLatest, put, all } from 'redux-saga/effects';
import usersApi from '../api/usersApi';
import usersActions from './actions/usersActions';
import {
  USERS_REQUESTED,
} from './actionTypes';

function* usersRequested() {
  try {
    const promise = usersApi.getUsers();
    const { data } = yield promise;
    const users = data.results;
    yield put(usersActions.getUsers(users));
  } catch (e) {
    yield put(usersActions.getUsers(null));
  }
}
function* usersSaga() {
  yield takeLatest(USERS_REQUESTED, usersRequested);
}

function* rootSaga() {
  yield all([
    usersSaga(),
  ]);
}

export default rootSaga;
