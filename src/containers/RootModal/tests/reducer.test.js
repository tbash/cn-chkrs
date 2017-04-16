import rootModalReducer from '../reducer';
import { fromJS } from 'immutable';

describe('rootModalReducer', () => {
  it('returns the initial state', () => {
    expect(rootModalReducer(undefined, {})).toEqual(fromJS({
      modalType: '',
      modalProps: {},
    }));
  });
});
