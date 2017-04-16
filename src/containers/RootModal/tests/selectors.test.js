import { selectRootModalDomain } from '../selectors';
import { fromJS } from 'immutable';

it('returns the root modal slice from the state', () => {
  const modalState = 'Some string';
  const state = fromJS({ modal: modalState });
  expect(selectRootModalDomain()(state)).toEqual(modalState);
});
