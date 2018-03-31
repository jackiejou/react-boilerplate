import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectMessage,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectMessage', () => {
  const messageSelector = makeSelectMessage();
  it('should select the message', () => {
    const message = 'test123';
    const mockedState = fromJS({
      home: {
        message,
      },
    });
    expect(messageSelector(mockedState)).toEqual(message);
  });
});
