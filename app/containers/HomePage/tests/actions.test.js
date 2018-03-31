import {
  CHANGE_MESSAGE,
  SAVE_MESSAGE,
  SAVE_SUCCESS,
  SAVE_ERROR,
} from '../constants';

import {
  changeMessage,
  saveMessage,
  saveSuccess,
  saveError,
} from '../actions';

describe('Home Actions', () => {
  describe('changeMessage', () => {
    it('should return the correct type and the passed message', () => {
      const fixture = 'Test';
      const expectedResult = {
        type: CHANGE_MESSAGE,
        msg: fixture,
      };
      expect(changeMessage(fixture)).toEqual(expectedResult);
    });
  });
  describe('saveMessage', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SAVE_MESSAGE,
      };
      expect(saveMessage()).toEqual(expectedResult);
    });
  });
  describe('saveSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SAVE_SUCCESS,
      };
      expect(saveSuccess()).toEqual(expectedResult);
    });
  });
  describe('changeMessage', () => {
    it('should return the correct type and the passed error', () => {
      const error = {};
      const expectedResult = {
        type: SAVE_ERROR,
        error,
      };
      expect(saveError(error)).toEqual(expectedResult);
    });
  });
});
