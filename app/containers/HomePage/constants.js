/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_MESSAGE = 'messageBottle/Home/CHANGE_MESSAGE';
export const SAVE_MESSAGE = 'messageBottle/Home/SAVE_MESSAGE';
export const SAVE_SUCCESS = 'messageBottle/Home/SAVE_SUCCESS';
export const SAVE_ERROR = 'messageBottle/Home/SAVE_ERROR';
