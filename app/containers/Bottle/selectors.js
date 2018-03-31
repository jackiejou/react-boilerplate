/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectBottle = (state) => state.get('bottle');

const makeSelectAllMessages = () => createSelector(
  selectBottle,
  (homeState) => homeState.get('messages')
);

const makeSelectError = () => createSelector(
  selectBottle,
  (homeState) => homeState.get('error')
);

export {
  selectBottle,
  makeSelectAllMessages,
  makeSelectError,
};
