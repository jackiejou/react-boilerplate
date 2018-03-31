import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeMessage,
  saveMessage,
  saveSuccess,
  saveError,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      message: '',
      loading: false,
      success: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeMessage action correctly', () => {
    const fixture = 'testing';
    const expectedResult = state.set('message', fixture);

    expect(homeReducer(state, changeMessage(fixture))).toEqual(expectedResult);
  });
  it('should handle the saveMessage action correctly', () => {
    const expectedResult = state.set('loading', true);

    expect(homeReducer(state, saveMessage())).toEqual(expectedResult);
  });
  it('should handle the saveSuccess action correctly', () => {
    const expectedResult = state.set('success', true);

    expect(homeReducer(state, saveSuccess())).toEqual(expectedResult);
  });
  it('should handle the saveError action correctly', () => {
    const fixture = {};
    const expectedResult = state.set('error', fixture);

    expect(homeReducer(state, saveError(fixture))).toEqual(expectedResult);
  });
});
