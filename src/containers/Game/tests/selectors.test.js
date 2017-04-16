import { selectGameDomain } from '../selectors';
import { fromJS } from 'immutable';

it('returns the app slice from the state', () => {
  const gameState = 'Some string';
  const state = fromJS({ game: gameState });
  expect(selectGameDomain()(state)).toEqual(gameState);
});
