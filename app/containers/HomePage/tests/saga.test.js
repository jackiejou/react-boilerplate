/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { SAVE_MESSAGE } from '../constants';
import { saveSuccess, saveError } from '../actions';

import bottleData, { addMessage } from '../saga';

const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('addMessage Saga', () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = addMessage();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the saveSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }, {
      name: 'Second repo',
    }];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(saveSuccess(response, username)));
  });

  it('should call the saveError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(saveError(response)));
  });
});

describe('bottleDataSaga Saga', () => {
  const bottleDataSaga = bottleData();

  it('should start task to watch for SAVE_MESSAGE action', () => {
    const takeLatestDescriptor = bottleDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SAVE_MESSAGE, addMessage));
  });
});
