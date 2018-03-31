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
  GET_MESSAGES,
  GET_SUCCESS,
  GET_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  messages: [],
  loading: false,
  error: false,
});

function bottleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return state
        .set('loading', true);
    case GET_SUCCESS:
      return state
        .set('messages', action.messages)
        .set('loading', false)
        .set('error', false);
    case GET_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default bottleReducer;
