/*
 *
 * RootModal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_MODAL,
  SET_MODAL,
} from './constants';

const initialState = fromJS({
  modalType: '',
  modalProps: {},
});

function rootModalReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_MODAL:
      return initialState;
    case SET_MODAL:
      return state.merge(action.payload);
    default:
      return state;
  }
}

export default rootModalReducer;
