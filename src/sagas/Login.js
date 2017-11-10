import { put, all, fork, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import types from '../actions/Login';

const createEmptyNavigation = routeName => NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName })],
});

export function* login({ payload }) {
  yield put({ type: types.LOGIN_SUCCESS, payload });
  yield put(createEmptyNavigation('WelcomScreen'));
}

export function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

function* loginSaga() {
  yield all([
    fork(watchLogin),
  ]);
}

export default loginSaga;
