import { createSelector } from 'reselect';

/**
 * Direct selector to the game state domain
 */
const selectGameDomain = () => state => state.get('game');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Game
 */

const selectGame = () => createSelector(
  selectGameDomain(),
  substate => substate
);

export default selectGame;
export {
  selectGameDomain,
};
