import { call, put, takeLatest } from 'redux-saga/effects';
import { parseJSON, request } from 'utils/request';

import { GET_MESSAGES } from './constants';
import { getSuccess, getError } from './actions';

export function* getMessages() {
  const requestURL = 'http://127.0.0.1:3000/get';
  try {
    const rawMessage = yield call(request, requestURL);
    const messages = yield call(parseJSON, rawMessage);
    yield put(getSuccess({ messages }));
  } catch (err) {
    yield put(getError(err));
  }
}

export default function* bottleData() {
  yield takeLatest(GET_MESSAGES, getMessages);
}
