/*
 *
 * Game actions
 *
 */

import {
  TOGGLE_GAME_STARTED,
  RECEIVE_PLAYERS,
  RECEIVE_BOARD,
  SET_SCORE,
  SET_PLAYER_COUNT,
  RESET_GAME,
  TAKE_TURN,
  SET_CURRENT_PLAYER,
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

export const setScore = ({ playerId, score }) => ({
  type: SET_SCORE,
  payload: {
    playerId,
    score
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

export const takeTurn = ({ oldIndex, newIndex, currentPlayer }) => ({
  type: TAKE_TURN,
  payload: {
    oldIndex,
    newIndex,
    currentPlayer
  }
});

export const setCurrentPlayer = ({ playerId }) => ({
  type: SET_CURRENT_PLAYER,
  payload: {
    playerId,
  }
});
