/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_GAME_STARTED,
  RECEIVE_PLAYERS,
  INCREMENT_SCORE,
  DECREMENT_SCORE,
  RECEIVE_BOARD,
  RESET_GAME,
} from './constants';
import { Player, Position } from './records';

const initialState = fromJS({
  gameStarted: false,
  players: [],
  board: [],
  currentPlayer: 0,
});

const mapPlayers = (ps) => fromJS(ps.map(p => new Player(p)));
const mapBoard = (ps) => fromJS(ps.map(p => new Position(p)));

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GAME_STARTED:
      return state.update('gameStarted', v => !v);
    case RECEIVE_PLAYERS:
      return state.set('players', mapPlayers(action.payload.players));
    case RECEIVE_BOARD:
      return state.set('board', mapBoard(action.payload.positions));
    case INCREMENT_SCORE:
      return state.updateIn(['players', action.payload.playerId], v => v + 1);
    case DECREMENT_SCORE:
      return state.updateIn(['players', action.payload.playerId], v => v - 1);
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
}

export default gameReducer;
