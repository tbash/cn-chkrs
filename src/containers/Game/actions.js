/*
 *
 * Game actions
 *
 */

import {
  TOGGLE_GAME_STARTED,
  RECEIVE_PLAYERS,
  RECEIVE_BOARD,
  INCREMENT_SCORE,
  DECREMENT_SCORE,
  SET_PLAYER_COUNT,
  RESET_GAME,
} from './constants';

export const toggleGameStarted = () => ({
  type: TOGGLE_GAME_STARTED,
});

export const receivePlayers = ({ players }) => ({
  type: RECEIVE_PLAYERS,
  payload: {
    players
  }
});

export const receiveBoard = ({ positions }) => ({
  type: RECEIVE_BOARD,
  payload: {
    positions
  }
});

export const incrementScore = ({ playerId }) => ({
  type: INCREMENT_SCORE,
  payload: {
    playerId
  }
});

export const decrementScore = ({ playerId }) => ({
  type: DECREMENT_SCORE,
  payload: {
    playerId
  }
});

export const setPlayerCount = ({ playerCount }) => ({
  type: SET_PLAYER_COUNT,
  payload: {
    playerCount
  }
});

export const resetGame = () => ({
  type: RESET_GAME,
});
