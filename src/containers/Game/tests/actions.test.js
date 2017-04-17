import {
  toggleGameStarted,
  receivePlayers,
  receiveBoard,
  setPlayerCount,
} from '../actions';
import {
  TOGGLE_GAME_STARTED,
  RECEIVE_PLAYERS,
  RECEIVE_BOARD,
  SET_PLAYER_COUNT,
} from '../constants';

describe('Game actions', () => {
  describe('toggleGameStarted', () => {
    it('has correct type', () => { const expected = {
        type: TOGGLE_GAME_STARTED,
      };
      expect(toggleGameStarted()).toEqual(expected);
    });
  });

  describe('receivePlayers', () => {
    it('has correct type and payload', () => {
      const players = [];
      const expected = {
        type: RECEIVE_PLAYERS,
        payload: { players }
      };
      expect(receivePlayers({ players })).toEqual(expected);
    });
  });

  describe('receiveBoard', () => {
    it('has correct type and payload', () => {
      const positions = [];
      const expected = {
        type: RECEIVE_BOARD,
        payload: { positions }
      };
      expect(receiveBoard({ positions })).toEqual(expected);
    });
  });
});
