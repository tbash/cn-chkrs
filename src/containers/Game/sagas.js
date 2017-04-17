import { takeEvery, call, select, put, fork } from 'redux-saga/effects';

import { generatePlayers, generateBoard } from './utils';
import {
  SET_PLAYER_COUNT,
  RESET_GAME,
} from './constants';
import {
  receivePlayers,
  receiveBoard,
} from './actions';
import {
  selectGameStarted,
} from './selectors';

import {
  setModal,
} from 'containers/RootModal/actions';
import { SELECT_PLAYER_COUNT,
} from 'containers/RootModal/constants';

export function* setSelectPlayerCountModal() {
  const gameStarted = yield select(selectGameStarted());

  if (!gameStarted) {
    yield put(setModal({ modalType: SELECT_PLAYER_COUNT }));
  }
}

export function* setupGame({ payload }) {
  const [players, positions] = yield [
    call(generatePlayers, payload.playerCount),
    call(generateBoard, payload.playerCount),
  ];

  yield [
    put(receivePlayers({ players })),
    put(receiveBoard({ positions })),
  ];
}

export function* tearDownGame() {
  yield put(setModal({ modalType: SELECT_PLAYER_COUNT }));
}

export default function* watchGame() {
  yield [
    fork(setSelectPlayerCountModal),
    takeEvery(SET_PLAYER_COUNT, setupGame),
    takeEvery(RESET_GAME, tearDownGame)
  ];
}
