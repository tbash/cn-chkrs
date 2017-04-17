/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_GAME_STARTED,
  RECEIVE_PLAYERS,
  SET_SCORE,
  RECEIVE_BOARD,
  RESET_GAME,
  TAKE_TURN,
  SET_CURRENT_PLAYER,
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
    case SET_SCORE:
      return state.setIn(['players', action.payload.playerId, 'score'], action.payload.score);
    case SET_CURRENT_PLAYER:
      return state.set('currentPlayer', action.payload.playerId);
    case TAKE_TURN:
      const { oldIndex, newIndex, currentPlayer } = action.payload;

      return state.withMutations(mutableState => {
        mutableState
          .mergeIn(['board', oldIndex], { occupyingPlayer: null })
          .mergeIn(['board', newIndex], { occupyingPlayer: currentPlayer })
      });
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
}

export default gameReducer;
