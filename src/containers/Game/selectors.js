import { createSelector } from 'reselect';

/**
 * Direct selector to the game state domain
 */
const selectGameDomain = () => state => state.get('game');

/**
 * Other specific selectors
 */

const selectGameStarted = () => createSelector(
  selectGameDomain(),
  substate => substate.get('gameStarted')
);

const selectScoreOrderedPlayers = () => createSelector(
  selectGameDomain(),
  substate => substate.get('players').sortBy(p => p.score())
);

const selectBoard = () => createSelector(
  selectGameDomain(),
  substate => substate.get('board').groupBy(p => p.row())
);

const selectCurrentPlayer = () => createSelector(
  selectGameDomain(),
  substate => substate.get('currentPlayer')
);

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
  selectGameStarted,
  selectScoreOrderedPlayers,
  selectBoard,
  selectCurrentPlayer,
};
