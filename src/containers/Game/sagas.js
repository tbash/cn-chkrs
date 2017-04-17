import { takeEvery, call, select, put, fork } from 'redux-saga/effects';

import { generatePlayers, generateBoard } from './utils';
import {
  SET_PLAYER_COUNT,
  RESET_GAME,
  TAKE_TURN,
} from './constants';
import {
  receivePlayers,
  receiveBoard,
  setCurrentPlayer,
  setScore,
} from './actions';
import {
  selectGameStarted,
  selectPlayerCount,
  selectCurrentPlayerPositions,
} from './selectors';

import {
  setModal,
} from 'containers/RootModal/actions';
import {
  SELECT_PLAYER_COUNT,
  WINNER,
} from 'containers/RootModal/constants';

export function* setSelectPlayerCountModal() {
  const gameStarted = yield select(selectGameStarted());

  if (!gameStarted) {
    yield put(setModal({ modalType: SELECT_PLAYER_COUNT }));
  }
}

export function* setupGameFlow({ payload }) {
  const [players, positions] = yield [
    call(generatePlayers, payload.playerCount),
    call(generateBoard, payload.playerCount),
  ];

  yield [
    put(receivePlayers({ players })),
    put(receiveBoard({ positions })),
  ];
}

export function* tearDownGameFlow() {
  yield put(setModal({ modalType: SELECT_PLAYER_COUNT }));
}

export function* checkIfWinner(currentPlayer, score) {
  if (score >= 10) {
    yield put(setModal({
      modalType: WINNER,
      modalProps: { winnerId: currentPlayer }
    }));
  }
}

export function* takeTurnFlow({ payload }) {
  const { currentPlayer } = payload;
  const [playerCount, playerPositions] = yield [
    select(selectPlayerCount()),
    select(selectCurrentPlayerPositions()),
  ];
  const score = playerPositions.reduce((acc, p) => {
    return acc + (p.isScoring() ? 1 : 0);
  }, 0);
  const nextPlayer = (currentPlayer + 1) % playerCount;

  yield [
    put(setCurrentPlayer({ playerId: nextPlayer })),
    put(setScore({ playerId: currentPlayer, score })),
    fork(checkIfWinner, currentPlayer, score),
  ];
}

export default function* watchGame() {
  yield [
    fork(setSelectPlayerCountModal),
    takeEvery(SET_PLAYER_COUNT, setupGameFlow),
    takeEvery(TAKE_TURN, takeTurnFlow),
    takeEvery(RESET_GAME, tearDownGameFlow)
  ];
}
