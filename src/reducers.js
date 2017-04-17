import { combineReducers } from 'redux-immutable';

import rootModalReducer from 'containers/RootModal/reducer';
import gameReducer from 'containers/Game/reducer';

const CLEAR_STATE = '@@cn_chkrs/CLEAR_STATE';

const clearState = () => ({ type: CLEAR_STATE });

const mainReducer = combineReducers({
  modal: rootModalReducer,
  game: gameReducer,
});

const createReducer = (state, action) =>
  action.type === CLEAR_STATE
    ? mainReducer(undefined, action)
    : mainReducer(state, action);

export default createReducer;
export {
  clearState,
};
