import { fork } from 'redux-saga/effects';
import gameSaga from 'containers/Game/sagas';

export default function* root() {
  yield [
    fork(gameSaga),
  ];
}
