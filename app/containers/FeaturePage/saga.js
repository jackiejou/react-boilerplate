import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { SAVE_MESSAGE } from './constants';
import { saveSuccess, saveError } from './actions';
import { makeSelectMessage } from './selectors';

export function* addMessage() {
  const message = yield select(makeSelectMessage());
  const requestURL = 'http://127.0.0.1:3000/get';
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ message }),
  };
  try {
    yield call(request, requestURL, options);
    yield put(saveSuccess());
  } catch (err) {
    yield put(saveError(err));
    // yield put(saveSuccess());
  }
}

export default function* bottleData() {
  yield takeLatest(SAVE_MESSAGE, addMessage);
}
