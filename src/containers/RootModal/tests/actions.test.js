import {
  clearModal,
  setModal,
} from '../actions';
import {
  CLEAR_MODAL,
  SET_MODAL,
} from '../constants';

describe('RootModal actions', () => {
  describe('clearModal', () => {
    it('has correct type', () => {
      const expected = {
        type: CLEAR_MODAL,
      };

      expect(clearModal()).toEqual(expected);
    });
  });

  describe('setModal', () => {
    it('has correct type and payload', () => {
      const modalType = "SOME_CONSTANT";
      const modalProps = { key: 'value' };
      const expected = {
        type: SET_MODAL,
        payload: {
          modalType,
          modalProps,
        },
      };

      expect(setModal({ modalType, modalProps, })).toEqual(expected);
    });
  });
});
