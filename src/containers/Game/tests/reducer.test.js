import gameReducer from '../reducer';
import { fromJS } from 'immutable';

describe('gameReducer', () => {
  it('returns the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(fromJS({}));
  });
});
