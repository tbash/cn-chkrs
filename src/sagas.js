import { fork } from 'redux-saga/effects';
import watchGame from 'containers/Game/sagas';

export default function* root() {
  yield [
    fork(watchGame),
  ];
}
