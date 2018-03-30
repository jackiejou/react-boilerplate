/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_MESSAGE,
  SAVE_MESSAGE,
  SAVE_SUCCESS,
  SAVE_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  message: '',
  loading: false,
  success: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state
        .set('message', action.msg);
    case SAVE_MESSAGE:
      return state
        .set('loading', true);
    case SAVE_SUCCESS:
      return state
        .set('message', '')
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case SAVE_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
