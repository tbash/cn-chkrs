/*
 *
 * RootModal actions
 *
 */

import {
  CLEAR_MODAL,
  SET_MODAL,
} from './constants';

export const clearModal = () => ({
  type: CLEAR_MODAL,
});

export const setModal = ({ modalType, modalProps }) => ({
  type: SET_MODAL,
  payload: {
    modalType,
    modalProps,
  },
});
