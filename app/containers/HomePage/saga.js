import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SAVE_MESSAGE } from './constants';
import { saveSuccess, saveError } from './actions';

import { makeSelectMessage } from './selectors';

export function* addMessage() {
  const message = yield select(makeSelectMessage());
  const requestURL = `https://api.github.com/users/${message}/repos?type=all&sort=updated`;

  try {
    yield call(request, requestURL);
    yield put(saveSuccess());
  } catch (err) {
    yield put(saveError(err));
  }
}

export default function* bottleData() {
  yield takeLatest(SAVE_MESSAGE, addMessage);
}
