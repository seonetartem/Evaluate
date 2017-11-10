import { all, fork } from 'redux-saga/effects';
import LoginSaga from './Login';
function* rootSaga() {
  yield all([
    fork(LoginSaga),
  ]);
}


export default rootSaga;