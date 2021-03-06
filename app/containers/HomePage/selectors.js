/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectMessage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('message')
);

const makeSelectSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('success')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectMessage,
  makeSelectSuccess,
  makeSelectError,
};
